import Link from "next/link";
import Image from "next/image";
import familyImage from "/public/family.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src={familyImage}
          alt="Family"
          layout="fill"
          objectFit="cover"
          quality={50}
        />
      </div>

      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

      <div className="container mx-auto max-w-screen-xl relative flex flex-col justify-center p-6 sm:py-12 lg:py-40 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-5xl">
            Your Comprehensive Insurance Solution in{" "}
            <span className="text-blue-600 ">Oxford, MS.</span>
          </h1>
          <p className="mt-6 mb-8 text-lg text-gray-600 sm:mb-12">
            Trust Our Independent Insurance Agency for Complete Coverage and
            Peace of Mind.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="/contact"
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 hover:bg-blue-600-500 duration-150 text-white"
            >
              Get Your Quote Today
            </Link>
            <Link
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-dark bg-white hover:bg-gray-50"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
