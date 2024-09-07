"use client"
import React, { useState } from 'react'
import PlusIcon from '../assets/icons/plus.svg'
import MinusIcon from '../assets/icons/minus.svg'
import clsx from 'clsx'

const AccordianItem = ({question , answer} : {
    question : string,
    answer : string
}) => {
    const [isAnswerVisible , setIsAnswerVisible] = useState(false);

 
    return (
        <>
            <div className='flex w-full items-center hover:cursor-pointer' onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
                <span className='flex-1 text-lg font-bold'>{question} </span>
                {
                    isAnswerVisible ? <MinusIcon/> : <PlusIcon/>
                }
            </div>
            <div className={clsx("mt-4" ,{
                hidden : !isAnswerVisible,
                "font-semibold text-white/70 " : isAnswerVisible === true
            })} >
                {answer}
            </div>

        </>
    )
}

export default AccordianItem
