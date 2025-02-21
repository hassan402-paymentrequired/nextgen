import Image from 'next/image'
import React from 'react'
import hero from '../../public/images/Illustration.png'
import Button from '../Button'

const Hero = () => {
  return (
    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 '>

      <div className="flex w-full h-full flex-col items-start p-10 justify-center">
        <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold'>
          Lesson And Insights <br/>
          <span className="text-primary"> From 8 Years</span>
        </h1>
        <p className='text-sm text-gray-600 my-2'>
          We are a team of experienced professionals who have been in the industry for over 8 years.
        </p>
        <Button title='Register' />
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={hero}
          alt="Hero Image"
          width={400}
          height={400}
          className='max-sm:w-56'
        />
      </div>

    </div>
  )
}

export default Hero