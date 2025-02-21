import Image, { StaticImageData } from 'next/image'
import React from 'react'
import UiLink from './UiLink'

type Props = {
    blog: {
        id: string | number,
        title: string
        src: string |  StaticImageData,
    }
}

const BlogCard = ({ blog }: Props) => {
    return (
        <div className='relative w-full h-[300px] rounded-md '>
            <Image src={blog.src} width={300} height={300} alt={blog.title} className='w-full rounded-md h-full object-cover' />
            <div className='absolute -bottom-8 w-[80%] z-10  bg-background
             flex justify-center items-center flex-col rounded shadow-md p-3 left-[35px]'>
                <h2 className='text-gray-500 text-lg text-center'>{blog.title}</h2>
                <UiLink title='Read more' des='#' cla='text-primary font-bold underline' />
            </div>

        </div>
    )
}

export default BlogCard