
// app/signup/route.ts:
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { firstName, lastName, email, password, phone, location } =
      await req.json();
      console.log("first name: ",firstName)



    
      
    // Validate if password exists
    if (!password || password.trim().length === 0) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );

      
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password with salt rounds
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      location,
    });

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}






