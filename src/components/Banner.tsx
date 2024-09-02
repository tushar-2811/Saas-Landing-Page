import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='py-3 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-yellow-200 '>
        <div className='container'>
            <p className='font-medium'>
            <span className='hidden sm:inline'>Introducing a completely redesgined interface - {" "}</span>
            <Link href={"/"} className='underline underline-offset-4 hover:cursor-pointer'> Explore the demo </Link>
            </p>
        </div>
    </div>
  )
}

export default Banner
 