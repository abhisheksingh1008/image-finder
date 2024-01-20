import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const q = req.nextUrl.searchParams.get("q");
    let page = req.nextUrl.searchParams.get("page");
    let per_page = req.nextUrl.searchParams.get("per_page");

    if (!q) {
      return NextResponse.json(
        { success: false, message: "Invalid query" },
        { status: 400 }
      );
    }

    if (!page) page = 1;
    if (!per_page) per_page = 50;

    // console.log(q, page, per_page);

    const { data } = await axios.get(
      `${process.env.BASE_URL}?key=${process.env.API_KEY}&q=${q}&page=${page}&per_page=${per_page}`
    );

    return NextResponse.json(
      { success: true, imagesData: data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        success: false,
        message: "Failed to get images. Please try again later.",
      },
      { status: 500 }
    );
  }
};
