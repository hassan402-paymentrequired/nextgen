import React from 'react'
import BlogCard from '../BlogCard'
import { blogs } from '@/libs/utils'

const Blog = () => {
    return (
        <div className='w-full bg-white py-10'>
            <div className="w-full max-w-6xl m-auto flex items-center justify-center p-10 flex-col">
                <div className="flex flex-col my-5 text-center max-w-3xl">
                    <h1 className='text-3xl md:text-4xl font-semibold'>Caring is the new marketing</h1>
                    <p className='text-gray-500 text-sm'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&rsquo;s joining the community, read about how our community are increasing their membership income and lot&rsquo;s more.​</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        blogs.reverse().map((blog, i) => (
                            <BlogCard blog={blog} key={i} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Blog