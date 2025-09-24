import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className='py-20 bg-[#0f0f1b]' id='testimonials'>
      <h1 className='heading text-center px-4 sm:px-8 md:px-16'>
        My <span className='text-purple-400'> Work Experience</span>
      </h1>

      <div className='w-full mt-12 flex flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
            className='w-full flex flex-col lg:flex-row items-center text-white border-neutral-200 dark:border-slate-800 p-5 md:p-8 lg:p-10'
            borderClassName='h-32 w-32 bg-[radial-gradient(#0ea5e9_60%,transparent_40%)] opacity-100'
          >
            <div className='relative lg:w-32 md:w-24 w-20 h-20 lg:h-32 mb-3 lg:mb-0 lg:mr-5'>
              <Image
                src={card.thumbnail}
                alt={card.title}
                fill
                className='object-contain'
                sizes='(max-width: 1024px) 100vw, 128px'
              />
            </div>
            <div className='text-center lg:text-left'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>{card.title}</h1>
              <p className='mt-2 md:mt-3 text-sm md:text-base font-semibold text-gray-200'>{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
