import React from 'react'
import { FaHandshake, FaUsers, FaProjectDiagram, FaBolt, FaUserShield, FaTools } from 'react-icons/fa'

function page() {
  return (
    <div className='py-10 px-4'>
      <div className='mb-10'>
        <h2 className='font-bold text-xl'>About us!</h2>
        <p className='mt-2 text-lg text-center text-gray-600'>
          Empowering students through meaningful pairing and collaboration.
        </p>
      </div>
      <div className='mb-16'>
        <h3 className='text-2xl font-semibold mb-6 text-center text-gray-700'>
          Areas We Focus On
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='p-6 shadow-md rounded-md text-center bg-white'>
            <FaHandshake className='text-blue-500 text-4xl mb-4 mx-auto' />
            <h4 className='text-xl font-bold mb-2 text-gray-800'>Skill Matching</h4>
            <p className='text-gray-600'>
              We pair students based on their skills and goals to ensure efficient collaboration.
            </p>
          </div>
          <div className='p-6 shadow-md rounded-md text-center bg-white'>
            <FaUsers className='text-blue-500 text-4xl mb-4 mx-auto' />
            <h4 className='text-xl font-bold mb-2 text-gray-800'>Mentorship</h4>
            <p className='text-gray-600'>
              Facilitating mentorship to help students achieve their academic and career aspirations.
            </p>
          </div>
          <div className='p-6 shadow-md rounded-md text-center bg-white'>
            <FaProjectDiagram className='text-blue-500 text-4xl mb-4 mx-auto' />
            <h4 className='text-xl font-bold mb-2 text-gray-800'>Team Projects</h4>
            <p className='text-gray-600'>
              Encouraging teamwork and collaboration through project-based learning.
            </p>
          </div>
        </div>
      </div>
      <div className='mb-16'>
        <h3 className='text-2xl font-semibold text-gray-700 mb-6 text-center'>
          Why Choose Us?
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='p-6 shadow-md rounded-md bg-white text-center'>
            <FaBolt className='text-blue-500 text-3xl mb-4 mx-auto'/>
            <h4 className='text-xl font-bold text-gray-800 mb-2'>Customized Pairing</h4>
            <p className='text-gray-600'>We match students based on shared interests and goals.</p>
          </div>
          <div className='p-6 shadow-md rounded-md bg-white text-center'>
            <FaUserShield className='text-blue-500 text-3xl mb-4 mx-auto'/>
            <h4 className='text-xl font-bold text-gray-800 mb-2'>24/7 Support</h4>
            <p className='text-gray-600'>Dedicated support team for all pairing-related concerns.</p>
          </div>
          <div className='p-6 shadow-md rounded-md bg-white text-center'>
            <FaTools className='text-blue-500 text-4xl mb-4 mx-auto'/>
            <h4 className='text-xl font-bold text-gray-800 mb-2'>Diverse Opportunities</h4>
            <p className='text-gray-600'>Access to projects, mentorship, and peer collaboration opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
