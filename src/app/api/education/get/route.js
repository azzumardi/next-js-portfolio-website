import connectToDB from "@/database";
import Degree from "@/models/Degree";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Education.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.status(500).json({
        success: false,
        message: "Failed to load data",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
