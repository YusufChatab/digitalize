const Hero = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold my-4">
              Optimize User Experience.
              <strong className="block font-extrabold">
                Boost Engagement.
              </strong>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl md:text-2xl">
              Leverage advanced AI to analyze user behavior and streamline
              conversions. Discover actionable insights with cutting-edge
              technology.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:text-black hover:bg-white focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-black shadow hover:text-white hover:bg-black focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
