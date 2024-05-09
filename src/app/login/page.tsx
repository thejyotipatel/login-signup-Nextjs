'use client'
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })

  const onLogin = async () => {
    console.log('login')
  }

  return (
    <>
      <div className='bg-gray-100 flex justify-center items-center h-screen'>
        <div className='max-w-md w-full bg-white p-8 rounded shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>Login</h2>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-700 font-semibold mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='mb-4 text-center'>
              <button
                onClick={() => onLogin()}
                type='submit'
                className='w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200'
              >
                Login
              </button>
            </div>
          </form>
          <p className='text-center text-gray-700'>
            Don't have an account?
            <Link href='/signup' className='text-blue-500 font-semibold ml-1'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
export default LoginPage
