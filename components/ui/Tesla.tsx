import Image from 'next/image'
import tesla from "../../public/images/tesla.png";
import UiLink from '../UiLink';
import { clients } from '@/libs/utils';
const Tesla = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-16 max-w-6xl m-auto">
            <div className="flex flex-col ">
                <Image
                    src={tesla}
                    width={350}
                    height={350}
                    alt={'hello'}
                />
            </div>

            <div className="flex flex-col items-start gap-4  max-sm:p-3">
                <p className='text-sm text-gray-500'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>

                <div className="flex flex-col g mt-3">
                    <h3 className='text-base text-primary'>Tim Smith</h3>
                    <span className='text-gray-500 text-sm'>British Gragon Boat Racing Association</span>
                </div>

                <div className="mt-5 max-sm:mt-0 flex items-start w-full max-sm:flex-col ">
                    <div className="flex items-start justify-evenly w-full">
                        {
                            clients.map((client, i) => (
                                <Image
                                    src={client.logo}
                                    width={40}
                                    height={40}
                                    alt='hello'
                                    key={i}
                                />
                            ))
                        }
                    </div>
                    <UiLink cla='text-primary  max-sm:mt-2 hover:underline' title='meet all customers ' des='#' />
                </div>
            </div>

        </div>
    )
}

export default Tesla