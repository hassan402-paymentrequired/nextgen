import React from 'react'

type Props = {
    title: string
}

const Button = ({ title }: Props) => {
    return (
        <button
    className='px-4 py-1.5 rounded-sm bg-primary text-white'
        
        >{title}</button>
    )
}

export default Button