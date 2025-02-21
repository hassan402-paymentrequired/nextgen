import React from 'react'

type Props = {
    title: string,
    desc: string,
    children: React.ReactNode
}

const TCard = ({ title, desc, children }: Props) => {
    return (
        <div className='flex flex-col p-5 items-center gap-4 w-[300px] h-auto shadow rounded'>
            <div className="flex items-center justify-center w-full relative">
                <div className="w-14 h-14 bg-green-200 rounded-tl-[25px] rounded-br-[25px] relative">
                    <div className='absolute top-0 -left-2'>
                        {children}
                    </div>
                </div>
            </div>
            <div className="flex text-center flex-col space-y-3 shrink-0">

                <h1 className='text-3xl max-sm:text-2xl font-semibold'>
                    {title}
                </h1>
                <p className='text-gray-500 text-sm'>{desc}</p>
            </div>
        </div>
    )
}

export default TCard