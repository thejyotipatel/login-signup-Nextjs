import { NextResponse } from 'next/server'

export async function GET(request: NextResponse) {
  try {
    const response = NextResponse.json({
      message: 'Logout successfully',
      success: true,
    })

    response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) })

    return response
  } catch (error: any) {
    console.log(error)

    return NextResponse.json({ error: error.message, status: 500 })
  }
}
