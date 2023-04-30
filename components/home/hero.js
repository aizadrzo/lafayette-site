const Hero = () => {
  return (
    <section className="text-gray-800">
      <div className="container mx-auto max-w-screen-xl flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-5xl">
            Your Comprehensive Insurance Solution in{" "}
            <span className="text-indigo-600 ">Oxford, MS.</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Trust Our Independent Insurance Agency for Complete Coverage and
            Peace of Mind.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-gray-50"
            >
              Get Your Quote Today
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
