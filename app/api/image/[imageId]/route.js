import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const imageId = req.url.split("image/")[1];

    if (!imageId) {
      return NextResponse.json(
        { success: false, message: "Invalid image id." },
        { status: 400 }
      );
    }

    const { data } = await axios.get(
      `${process.env.BASE_URL}?key=${process.env.API_KEY}&id=${imageId}`
    );

    return NextResponse.json(
      { success: true, imageInfo: data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        success: false,
        message: "Failed to get image information. Please try again later.",
      },
      { status: 500 }
    );
  }
};
