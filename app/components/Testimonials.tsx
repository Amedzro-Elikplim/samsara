import Image from "next/image";

const Testimonials = () =>  {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-xl">
          {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="logo" /> */}
          <figure className="mt-10">
          <blockquote className=" w-[70%] mx-auto my-auto">
                <p className="text-3xl font-raleway font-gray-500 italic">
                    “Cleaning is not just about tidying up our surroundings; it&apos;s a reflection of the care we extend to ourselves and others. 
                    A clean space fosters clarity of mind, a sense of calm, and a brighter outlook on life.”
                </p>
                <footer>- Co-founder, Samsara Cleaning Services</footer>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                className="mx-auto h-10 w-10 rounded-full"
                src="/cofounder.png"
                alt="Co founder image"
                height={300}
                width={300}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Wisdom Dowell</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Co-founder of Samara</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  };

export default Testimonials;
  