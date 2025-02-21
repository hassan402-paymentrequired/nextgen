import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    count: string | number,
    src: string | StaticImport
}

const Count = ({ title, count, src }: Props) => {
    return (
        <div className="flex items-center justify-center h-full w-full gap-3">
            <div className="">
                <Image
                    src={src}
                    width={100}
                    height={100}
                    className='w-[36px]'
                    alt='hello there'
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className='text-lg font-bold'>{count}</h3>
                <p className='text-gray-500 text-sm'>{title}</p>
            </div>
        </div>
    )
}

export default Count