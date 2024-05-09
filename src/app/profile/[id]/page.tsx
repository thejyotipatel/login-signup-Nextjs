const UserProfilePage = ({ params }: any) => {
  return (
    <>
      <div className='bg-gray-100 flex justify-center items-center h-screen'>
        <div className='max-w-md w-full bg-white p-8 rounded shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>Profile</h2>
          <p className='text-center text-gray-700'>
            Id value (URL value):
            <span className='text-blue-50 font-semibold m-1 p-2 rounded bg-blue-500'>
              {params.id}
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
export default UserProfilePage
