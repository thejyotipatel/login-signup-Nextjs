import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        {/* SVG container */}
        <div className=' w-96'>
          {/* Your SVG code here */}
          {/* Example: */}
          <img src='/Hello-cuate.svg' alt='Hello-cuate' />
        </div>

        {/* Login/Sign Up buttons */}
        <div className='mt-8'>
          <Link
            href='/login'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  )
}
