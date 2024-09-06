import React from 'react'
import appScreen from '../assets/images/app-screen.png'
import Image from 'next/image'

const Productshowcase = () => {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24'>
        <div className="container">
            <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Intuitive interface</h2>
            <div className='max-w-xl mx-auto'>
            <p className='text-xl text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with the app designed to track your progress, motivate your efforts,
                and celebrate your success, one task at a time.
            </p>
            </div>
            <div className='flex justify-center mt-14'>
            <Image  src={appScreen} alt='product screenshot' />
            </div>
        </div>
       
    </div>
  )
}

export default Productshowcase
