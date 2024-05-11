import connectDb from '@/dbConfig/connectDb'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDb()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { email, password } = reqBody

    // check if user exists
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json({
        message: 'User does not exist',
        status: 400,
        success: false,
      })
    }

    // check if password is correct
    const checkPassword = await bcryptjs.compare(password, user.password)
    if (!checkPassword) {
      return NextResponse.json({
        message: 'Invalid password',
        status: 400,
        success: false,
      })
    }

    // create token data
    const tokenData = new User({
      id: user._id,
      user,
    })

    // crate token
    const token = await jwt.sign({ tokenData }, process.env.TOKEN_SECRET!, {
      expiresIn: '1d',
    })

    const response = NextResponse.json({
      message: 'User login successfully',
      success: true,
      user,
    })

    response.cookies.set('token', token, { httpOnly: true })

    return response
  } catch (error: any) {
    console.log(error)

    return NextResponse.json({ error: error.message, status: 500 })
  }
}
