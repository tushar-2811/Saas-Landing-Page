import React from 'react'
import Instagram from '../assets/icons/insta.svg'
import X from '../assets/icons/x-social.svg'
import Tictok from '../assets/icons/tiktok.svg'
import Youtube from '../assets/icons/youtube.svg'

const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
        <div className="container">
            <div className='flex flex-col sm:flex-row sm:justify-between gap-4'>
               <div className='text-center '>2024, your Company, Inc. All rights reserved</div>
               <ul className='flex justify-center items-center gap-2.5 '>
               <li><X/></li>
               <li><Instagram/></li>
               <li><Tictok/></li>
               <li><Youtube/></li>
               </ul>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
