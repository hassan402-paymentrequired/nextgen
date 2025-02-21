import Image from 'next/image'
import logo from "../../public/images/Logo.png";
import UiLink from '../UiLink';

const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-900 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>

      <div className="w-full h-full flex flex-col items-start">
        <Image src={logo} alt="Logo" width={170} height={170} />

        <div className="flex flex-col mt-7">
          <span className='text-white'>Copyright &copy; 2025 Nexcent LTD.</span>
          <span className='text-white'> All rights reserved.</span>

          <div className="flex items-center space-x-3">
            {/* social media */}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className='text-lg mb-3 text-white'>Company</h2>
        <div className="flex flex-col space-y-4">
          <UiLink cla='text-white' des='#' title='About Us' />
          <UiLink cla='text-white' des='#' title='Blog' />
          <UiLink cla='text-white' des='#' title='Contact Us' />
          <UiLink cla='text-white' des='#' title='Pricing' />
          <UiLink cla='text-white' des='#' title='testimonials' />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className='text-lg mb-3 text-white'>Support</h2>
        <div className="flex flex-col space-y-4">
          <UiLink cla='text-white' des='#' title='Help center' />
          <UiLink cla='text-white' des='#' title='Terms of service' />
          <UiLink cla='text-white' des='#' title='Legal' />
          <UiLink cla='text-white' des='#' title='Privacy Policy' />
          <UiLink cla='text-white' des='#' title='Status' />
        </div>
      </div>


      <div className="flex flex-col">
        <h2 className='text-lg mb-3 text-white'>Stay up to date</h2>
        <div className="w-full bg-neutral-700 rounded overflow-hidden">
          <input type="text" placeholder='Email' className='w-full px-3 py-3  h-full bg-transparent text-white' />

        </div>
      </div>

    </div>

  )
}

export default Footer