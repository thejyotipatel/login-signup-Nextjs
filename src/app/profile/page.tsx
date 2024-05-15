'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const ProfilePage = () => {
  const router = useRouter()

  const onLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout')
      toast.success(response.data.message)

      console.log('logout success', response)

      if (response.data.success) {
        router.push('/')
      }
    } catch (error: any) {
      console.log('Logout failed!', error)

      toast.error(error.message)
    }
  }

  return (
    <>
      <div className='bg-gray-100 flex justify-center items-center h-screen'>
        <div className='max-w-md w-full bg-white p-5 rounded shadow-lg m-3'>
          <div className='mb-8 '>
            <button
              onClick={onLogout}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
            >
              Logout
            </button>
          </div>
          <h2 className='text-2xl font-bold mb-4'>Profile</h2>
          <p className='text-center text-gray-700'>this is a profile page.</p>
        </div>
      </div>
    </>
  )
}
export default ProfilePage
