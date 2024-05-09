import connectDb from '@/dbConfig/connectDb'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connectDb()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { username, email, password } = reqBody

    console.log(reqBody)

    // check if user already exists
    const user = await User.findOne({ email })

    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // hash password
    const salt = await bcryptjs.genSalt(10)
    const hashPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    })

    const saveUser = await newUser.save()
    console.log(saveUser)

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      saveUser,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    )
  }
}
