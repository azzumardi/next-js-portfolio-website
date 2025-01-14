import connectToDB from "@/database";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Contact.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.status(500).json({
        success: false,
        message: "Something goes wrong Please try again",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
