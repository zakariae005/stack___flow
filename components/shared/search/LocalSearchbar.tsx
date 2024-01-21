'use client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

interface CustomInputProps {
    route: string
    iconPosition: string
    imgSrc: string
    placeholder: string
    otherClasses?: string

}

const LocalSearchbar = ({ route, iconPosition, imgSrc, placeholder, otherClasses }: CustomInputProps) => {
  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
        <Image 
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className='cursor-pointer'
        />

        <Input 
            type='text'
            placeholder={placeholder}
            
            onChange={() => {}}
            className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
        />
    </div>
  )
}

export default LocalSearchbar