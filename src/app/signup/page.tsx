'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const SignUpPage = () => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [disabledBtn, setDisabledBtn] = React.useState(false)
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })

  const onSignUp = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/signup', user)
      console.log('sign up success', response)
      toast.success(response.data.message)

      if (response.data.success) {
        router.push('/profile')
      }
    } catch (error: any) {
      console.log('sign Up failed', error)

      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setDisabledBtn(false)
    } else {
      setDisabledBtn(true)
    }
  }, [user])

  return (
    <>
      <div className='bg-gray-100 flex justify-center items-center h-screen'>
        <div className='max-w-md w-full bg-white p-8  rounded shadow-lg m-3'>
          <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>

          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-700 font-semibold mb-2'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

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
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className='mb-4 text-center'>
            <button
              onClick={onSignUp}
              type='submit'
              className={`w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200  `}
              disabled={disabledBtn}
            >
              {loading ? 'Processing' : 'Sign Up'}
            </button>
          </div>

          <p className='text-center text-gray-700'>
            Already have an account?
            <Link href='/login' className='text-blue-500 font-semibold ml-1'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
export default SignUpPage
