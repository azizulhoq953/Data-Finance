import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>

            <div className='flex flex-col sm:flex-row items-center space-x-4 justify-between w-full'>
              <input className=' p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 px4 text-black'>Notify Me</button>
            </div>
            <p>We care bout protection of your data. Read Our <span className='text-[#00df9a]'>Privacy Policy.</span> </p>

        </div>

    </div>
  )
} 

export default Newsletter