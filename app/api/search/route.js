import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const q = req.nextUrl.searchParams.get("q");

    if (!q) {
      return NextResponse.json(
        { success: false, message: "Invalid query" },
        { status: 400 }
      );
    }

    const { data } = await axios.get(
      `${process.env.BASE_URL}?key=${process.env.API_KEY}&q=${q}&image_type=photo`
    );

    return NextResponse.json(
      { success: true, imagessData: data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};
