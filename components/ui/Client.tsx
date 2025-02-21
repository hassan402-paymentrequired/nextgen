/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import mlogo from "../../public/images/Icon.png";
import mlogo2 from "../../public/images/Icon (1).png";
import mhero from "../../public/images/Frame 35.png";
import TCard from '../TCard';
import Button from '../Button';
import { clients } from '@/libs/utils';

const Client = () => {

   


    return (
        <div
            className='w-full flex flex-col items-center justify-center bg-white'
        >
            <div className='w-full flex flex-col items-center justify-center max-sm:p-5'>
                <h1 className='text-3xl font-semibold text-gray-700 mt-5'>Our Client</h1>
                <p className='text-sm text-gray-500 my-2 text-center'>We have worked with many clients and have a good reputation in the market.</p>
            </div>

            <div className="mt-10 flex items-center justify-evenly w-full max-sm:flex-col max-sm:gap-y-4 max-sm:justify-center">
                {clients.map((client: { id: string | number, logo: any }) => (
                    <Image
                        src={client.logo}
                        width={70}
                        height={70}
                        alt={client.id.toString()}
                        key={client.id}
                    />
                ))}
            </div>

            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <h1 className='text-3xl text-center font-semibold text-gray-700 mt-5'>Manage Your Entire Community <br /> In a Single System</h1>
                <p className='text-sm text-gray-500 my-2'>Who is Nextcent Suitable For?</p>
            </div>

            <div className="flex mt-5 max-sm:flex-col items-center justify-evenly w-full max-w-6xl max-sm:gap-y-5">
                <TCard title='Membership Organisations' desc='Our membership management software provides full automation of membership renewals and payments'>
                    <Image
                        src={mlogo}
                        width={40}
                        height={40}
                        alt='hello'
                    />
                </TCard>
                <TCard title='Membership Organisations' desc='Our membership management software provides full automation of membership renewals and payments'>
                    <Image
                        src={mlogo}
                        width={40}
                        height={40}
                        alt='hello'
                    />
                </TCard>
                <TCard title='Membership Organisation' desc='Our membership management software provides full automation of membership renewals and payments'>
                    <Image
                        src={mlogo2}
                        width={40}
                        height={40}
                        alt='hello'
                    />
                </TCard>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-16 max-w-6xl">
                <div className="flex flex-col items-center justify-center mt-10">
                    <Image
                        src={ mhero}
                        width={ 350}
                        height={ 350}
                        alt={'hello'}
                    />
                </div>

                <div className="flex flex-col items-start justify-center p-5 gap-4">
                    <h1 className='text-3xl font-semibold text-gray-700'>
                        The Unseen of spending three years at pixelgrade
                    </h1>
                    <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <Button title='Learn More' />
                </div>

            </div>

        </div>
    )
}

export default Client