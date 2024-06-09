import { FaPeopleCarry } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { HiMiniHomeModern } from "react-icons/hi2";

const Services = () =>  {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">

         <div className="flex flex-col justify-center gap-3 items-center col-span-2 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1">
            <div className="flex items-center justify-center bg-primary-500 w-20 h-20 rounded-full">
              <HiMiniHomeModern className="text-4xl text-primary-600" />
            </div>
            <p className="text-gray-500 font-bold">Residential Cleaning</p>
          </div>
          
          <div className="flex flex-col justify-center gap-3 items-center col-span-2 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1">
            <div className="flex items-center justify-center bg-primary-500 w-20 h-20 rounded-full">
              <HiOfficeBuilding className="text-4xl text-primary-600" />
            </div>
            <p className="text-gray-500 font-bold">Commercial Cleaning</p>
          </div>
 
          <div className="flex flex-col justify-center gap-3 items-center col-span-2 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1">
            <div className="flex items-center justify-center bg-primary-500 w-20 h-20 rounded-full">
              <GiVacuumCleaner className="text-4xl text-primary-600" />
            </div>
            <p className="text-gray-500 font-bold">Specialized Cleaning</p>
          </div>
          
          <div className="flex flex-col justify-center gap-3 items-center col-span-2 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1">
            <div className="flex items-center justify-center bg-primary-500 w-20 h-20 rounded-full">
              <FaPeopleCarry className="text-4xl text-primary-600" />
            </div>
            <p className="text-gray-500 font-bold">Mov-in/Move-out Cleaning</p>
          </div>
          </div>
        </div>
      </div>
    )
};

export default Services;