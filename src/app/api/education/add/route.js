import connectToDB from "@/database";
import Degree from "@/models/Degree";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Education.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.status(500).json({
        success: false,
        message: "Failed to save data",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
