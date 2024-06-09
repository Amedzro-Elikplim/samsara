import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
const HeroSection = () => {

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32 bg-hero bg-cover bg-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mx-[100px]">
                <p className="mt-2 lg:text-5xl md:text-5xl font-bold text-gray-900 text-4xl sm:text-5xl">Samsara</p>
                <p className="text-3xl md:text-4xl sm:text-4xl font-semibold xs:leading-6 ">Elite Cleaning Solutions</p>
                <p className="mt-6 text-lg leading-6 text-gray-600">
                Experience the difference of a clean and refreshed space with Nirvana. 
                Contact us to schedule a cleaning service. Let us handle the cleaning so you can focus on what matters most.
                </p>
                <button className="bg-secondary-500 text-white text-white-500 lg:px-[170px] lg:py-[13px] px-[100px] py-[13px] my-10 rounded-lg">BOOK NOW</button>
              </div>
            </div>
            <img
              src="/cleaner.png"
              alt="Product screenshot"
              className="w-[48rem] lg:w-[40rem] lg:h-[40rem]  max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={432}
              height={42}
            />
          </div>
        </div>
      </div>
    )
};

export default HeroSection;