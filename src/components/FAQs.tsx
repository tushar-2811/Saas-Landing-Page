import React from 'react'
import AccordianItem from './AccordianItem'

const Items = [
  {
    id : 1,
    question : "What payment methods do you accept ?",
    answer : "We accept all major credit cards, paypal and various other payment methods, contact our support team for more information on accepted payment methods in your region."
  },
  {
    id : 2,
    question : "How does the pricing work for teams ?",
    answer : "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions."
  },
  {
    id : 3,
    question : "Can I change my plan later ?",
    answer : "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will propagated and reflect in your next billing cycle."
  },
  {
    id : 4,
    question : "Is my data secure ?",
    answer : "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users."
  }
]

const FAQs = () => {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24 '>
       <div className="container">
          <h2 className='text-center font-bold text-5xl sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter'>Frequently asked questions</h2>
          <div className='mt-12 max-w-[648px] mx-auto'>
            {
              Items.map((item) => (
                <div key={item.id} className='py-7 border-b border-white/30'>
                  <AccordianItem question={item.question} answer={item.answer} />
                </div>
              ))
            }

          </div>
       </div>
    </div>
  )
}

export default FAQs
