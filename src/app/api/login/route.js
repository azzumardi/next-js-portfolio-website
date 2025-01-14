import connectToDB from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    const checkUser = await User.findOne({ username });

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User name is not available, please try again",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Password is incorrect, please try again",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
  }
}
