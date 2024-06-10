import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { FaPeopleCarry } from 'react-icons/fa';
import { GiVacuumCleaner } from 'react-icons/gi';
import { HiOfficeBuilding } from 'react-icons/hi';
import { HiMiniHomeModern } from 'react-icons/hi2';

const SectionDetails = () => {

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-primary-600">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Check out our services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keep your space clean</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Cleaning is not just about tidying up our surroundings; it's a reflection of the care we extend to ourselves and others. A clean space fosters clarity of mind, a sense of calm, and a brighter outlook on life
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none bg-gray-900 sm:w-[57rem]"
            src="/cleaner-broom.png"
            alt="cleaner-broom"
          />
        </div>
        <div className="lg:col-span-2 lg:-mt-[50px] lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className="flex gap-5 mt-[50px] justify-center items-center mr-[50px] w-[90%]">
                  <HiMiniHomeModern className="text-6xl text-secondary-500" />
                  <p className="text-[20px] tracking-wide">
                      <span className="font-bold text-xl">Residential Cleaning:</span>  Let us take care of your home with our comprehensive residential cleaning services. From regular maintenance cleanings to deep cleaning sessions, we ensure every corner of your home sparkles.
                  </p>
              </div>


             <div className="flex gap-5 mt-[35px] justify-center items-center mr-[50px] w-[90%]">
                <HiOfficeBuilding className="text-6xl text-secondary-500" />
                <p className="text-[20px] tracking-wide">
                    <span className="font-bold text-xl">Commercial Cleaning:</span>  Keep your workplace pristine and inviting with our commercial cleaning services. We cater to offices, retail spaces, restaurants, and more, providing a clean and hygienic environment for your employees and customers.
                </p>
             </div>

             <div className="flex gap-5 mt-[35px] justify-center items-center mr-[50px] w-[90%]">
                <GiVacuumCleaner className="text-6xl text-secondary-500" />
                <p className="text-[20px] tracking-wide">
                    <span className="font-bold text-xl">Specialized Cleaning:</span>  Have specific cleaning needs? We offer specialized cleaning services such as carpet cleaning, upholstery cleaning, window cleaning, and more, using industry-leading techniques and eco-friendly products.
                </p>
             </div>

             <div className="flex gap-5 mt-[35px] justify-center items-center mr-[50px] w-[90%]">
                <FaPeopleCarry className="text-6xl text-secondary-500" />
                <p className="text-[20px] tracking-wide">
                    <span className="font-bold text-xl">Move-In/Move-Out Cleaning:</span>  Moving can be stressful, but our move-in and move-out cleaning services make the process smoother. We'll leave your old or new place spotless, so you can focus on settling in or preparing for the next chapter.
                </p>
             </div>

            </div>
          </div>
        </div> 
      </div>
    </div>
  )
};

export default SectionDetails;
