import React from 'react'
import Logo from "../../public/images/Logo.png";
import Image from 'next/image';
import UiLink from '../UiLink';
import Button from '../Button';

const Navbar = () => {
    return (
        <div className='max-sm:hidden w-full flex justify-between items-center px-16 h-[84px]'>
            <div className='flex items-center'>
                <Image
                    src={Logo}
                    width={100}
                    height={100}
                    alt='logo'
                />
            </div>

            <div className="flex items-center justify-center space-x-7">
                <UiLink title='Home' des='/'/>
                <UiLink title='Service' des='/'/>
                <UiLink title='Feature' des='/'/>
                <UiLink title='Product' des='/'/>
                <UiLink title='Testimonial' des='/'/>
                <UiLink title='FAQ' des='/'/>
            </div>

            <div className="flex items-center justify-center space-x-5">
                <button className='text-green-500 text-sm'>Login</button>
                <Button title='Sign Up'/>
            </div>

        </div>
    )
}

export default Navbar