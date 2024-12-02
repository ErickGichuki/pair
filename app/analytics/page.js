import React from 'react'

function Page() {
  return (
    <div className='pt-10 px-4'>
      <h2 className='text-2xl font-bold text-center'>Welcome to the Analytics Page!</h2>
      <p className='mt-4 text-lg text-center text-gray-600'>
        We are currently undergoing maintenance to improve our services. Please check back later.
      </p>
      <div className='mt-6 text-center'>
        <div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4'>
          <p className='font-medium'>We apologize for the inconvenience.</p>
          <p>Thank you for your patience!</p>
        </div>
      </div>
    </div>
  )
}

export default Page
