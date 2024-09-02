import React from 'react'
import Image from 'next/image'
import logoImage from '../assets/images/logosaas.png'
import MenuImage from '../assets/icons/menu.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black'>
    <div className='px-4'>
      <div className='py-4 flex items-center justify-between'>

      <div className='relative'>
        <div className='absolute w-full bottom-0 top-2 bg-gradient-to-r from-blue-400 via-yellow-300 to-pink-400 blur-md' ></div>
         <Image src={logoImage} alt='saas-image' className='h-12 w-12 relative'/>
       </div>

       <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
         <MenuImage className="text-white "/>
       </div>

       <nav className='hidden sm:flex gap-6 md:gap-12 items-center'>
         <Link href={"/"} className='text-white text-opacity-60 hover:text-opacity-100 transition'>About</Link>
         <Link href={"/"} className='text-white text-opacity-60 hover:text-opacity-100 transition'>Features</Link>
         <Link href={"/"} className='text-white text-opacity-60 hover:text-opacity-100 transition'>Updates</Link>
         <Link href={"/"} className='text-white text-opacity-60 hover:text-opacity-100 transition'>Help</Link>
         <Link href={"/"} className='text-white text-opacity-60 hover:text-opacity-100 transition'>Customers</Link>
         <button className='bg-white text-black py-2 px-4 rounded-lg'>Get for free</button>
       </nav>

      </div>
    </div>
    </div>
  )
}

export default Navbar
