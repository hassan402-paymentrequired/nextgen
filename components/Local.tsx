import Count from './Count'
import Icon1 from "../public/images/people.png";
import Icon2 from "../public/images/card.png";
import Icon3 from "../public/images/group.png";
import Icon4 from "../public/images/point.png";

const Local = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto p-10 mt-10'>

            <div className="flex flex-col w-full h-full items-center justify-center">
                <h2 className='text-3xl md:text-4xl font-semibold'>Helping a local <br /> <span className='text-primary'>business reinvent itself</span></h2>
                <p className='text-gray-500 text-sm my-2'>We reached here with our hard work and dedication</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <Count title="Members" count="2,245,341" src={Icon1} />
                <Count title="Clubs" count="46,328" src={Icon3} />
                <Count title="Event Bookings" count="828,341" src={Icon4} />
                <Count title="Payments" count="1,945,341" src={Icon2} />
            </div>

        </div>

    )
}

export default Local