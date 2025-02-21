import React from 'react'
import Button from '../Button'

const Demo = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center h-[50vh] gap-8'>
            <h1 className='text-2xl font-bold sm:text-3xl md:text-5xl text-black text-center'>You wanna see how it is done ? <br /> Request a Demo </h1>
            <Button title='Get a Demo' />
        </div>
    )
}

export default Demo