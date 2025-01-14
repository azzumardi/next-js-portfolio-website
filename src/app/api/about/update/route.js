import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;

    const updateData = await About.findByIdAndUpdate(
      {
        _id: _id,
      },
      { aboutme, noofprojects, yearofexperience, noofclients, skills },
      { new: true }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "Data updated successfully",
      });
    } else {
      return NextResponse.status(500).json({
        success: false,
        message: "Failed to update data",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({
      success: false,
      message: "Something went wrong Please try again",
    });
  }
}
