import Image from "next/image";
import img from "../../public/images/Illustration.png";
import Button from '../Button';


const Guard = () => {
    return (
        <div className="bg-white w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-16 max-w-6xl m-auto  ">
                <div className="flex flex-col items-center justify-center mt-10">
                    <Image
                        src={img}
                        width={350}
                        height={350}
                        alt={'hello'}
                    />
                </div>

                <div className="flex flex-col items-start justify-center p-5 gap-4">
                    <h1 className='text-3xl font-semibold text-gray-700'>
                        How to design your site footer like we did
                    </h1>
                    <p className='text-sm text-gray-500'>
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <Button title='Learn More' />
                </div>

            </div>
        </div>
    )
}

export default Guard