import React from 'react'
import acmeLogo from '../assets/images/acme.png'
import quantumLogo from '../assets/images/quantum.png'
import echoLogo from '../assets/images/echo.png'
import celestialLogo from '../assets/images/celestial.png'
import pulseLogo from '../assets/images/pulse.png'
import apexLogo from '../assets/images/apex.png'
import Image from 'next/image'

const Images = [
    {id : 1 , src : acmeLogo , alt : "acmeLogo"} ,
    {id : 2 ,src : quantumLogo , alt : "quantumLogo" } ,
    {id : 3 ,src : echoLogo , alt : "echoLogo" } , 
    {id : 4 ,src : celestialLogo , alt : "celestialLogo" } , 
    {id : 5 ,src : pulseLogo , alt : "pulseLogo" } , 
    {id : 6 , src : apexLogo , alt : "apexLogo" }
  ];


const Logoticker = () => {
  return (
    <div className='bg-black text-white py-[72px]'>
        <div className='container'>

           <h2 className='text-center text-xl text-white/70'>Trusted by the world's most innovative teams</h2>

           <div className='overflow-hidden mt-9'>
             <div className='flex justify-center gap-16'>
            {Images.map((imageData) => (
              <Image key={imageData.id} src={imageData.src} alt={imageData.alt} className='flex-none h-8 w-auto' />
            ))}
             </div>
           </div>
        </div>      
    </div>
  )
}

export default Logoticker
