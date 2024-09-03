import Link from 'next/link'
import React from 'react'
import ArrowIcon from '../assets/icons/arrow-w.svg'
import CursorImage from '../assets/images/cursor.png'
import MessageImage from '../assets/images/message.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-black text-white bg-gradient-to-b from-black via-violet-500 to-purple-500 py-[72px] sm:py-24 relative overflow-clip '>
            <div className='absolute h-[375px] sm:h-[768px] lg:h-[1200px] w-[750px] sm:w-[1536px] lg:w-[2400px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'>
            </div>
            <div className='container relative'>
                <div className='flex justify-center items-center'>
                    <Link href={"/"} className='inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30'>
                        <span className='bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-transparent bg-clip-text'>Version 2.0 is here</span>

                        <span className='inline-flex items-center gap-1'>
                            <span>Read More</span>
                            <ArrowIcon />
                        </span>
                    </Link>
                </div>

                <div className='flex justify-center mt-8 '>
                    <div className='inline-flex relative'>
                <h1 className='text-7xl font-bold text-center tracking-tighter inline-flex sm:text-9xl'>
                    One Task <br/> at a Time
                </h1>
                <Image src={CursorImage} height="200" width="200" className='absolute right-[476px] top-[108px] hidden sm:inline' alt='cursorImage'/>
                <Image src={MessageImage} height="200" width="200" className='absolute left-[498px] top-[56px] hidden sm:inline' alt='MessageImage'/>
                    </div>
                </div>

                 <div className='flex justify-center'>
                <p className='text-xl text-center font-medium mt-8 tracking-tight max-w-md'>
                    Celebrate the joy of accomplishment with an app designed to track your progress ,
                    motivate your efforts and Celebrate your Successes.
                </p>
                 </div>

                <div className='flex justify-center mt-8'>
                    <button className='bg-white text-black px-5 py-3 rounded-lg font-medium'>Get for Free</button>
                </div>

            </div>
  

        </div>
    )
}

export default Hero
