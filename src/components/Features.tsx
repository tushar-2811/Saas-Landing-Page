import React from 'react'
import EcosystemIcon from '../assets/icons/ecosystem.svg'

const featuresCardData = [
    {
        id : 1,
        title : "Integration Ecosystem",
        description : "Enhance your productivity by connecting with your tools, keeping everything in one place."
    },
    {
        id : 2,
        title : "Goal Setting and Tracking",
        description : "Define and Track your goals, breaking down objectives into achieveable tasks to keep your targets in sight. "
    },
    {
        id : 3,
        title : "Secure Data Encryption",
        description : "With end-to-end encryption ,your data is securly stored and protected from unauthorized access."
    },

]

const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
        <div className='container'>
            <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
            <div className='max-w-xl mx-auto'>
            <p className='text-center mt-5 text-xl text-white/70 '>
                Enjoy customizable lists, team work tools, and smart tracking all in one place.
                Set tasks , get reminders, and see your progess simply and quickly.
            </p>
            </div>

            <div className='mt-16 flex flex-col gap-4 sm:flex-row'>
                {
                    featuresCardData.map((features) => (
                        <div key={features.id} className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 '>
                            <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg '>
                                <EcosystemIcon/>
                            </div>
                            <h3 className='mt-6 font-bold'>{features.title}</h3>
                            <p className='mt-2 text-white/70'>{features.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Features
