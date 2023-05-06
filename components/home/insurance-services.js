/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const InsuranceServices = () => {
  const insurance_service = [
    {
      image:
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      title: "Auto Insurance",
      desc: "Lafayette Insurance Agency offers auto insurance in Lafayette County. With years of experience, we are dedicated to providing our customers with the best possible coverage. Our team of experts is always available to help you make the right choice.",
      link: "/services/auto-insurance",
    },
    {
      image:
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      title: "Commercial Insurance",
      desc: "Commercial insurance is essential for protecting your business from potential liabilities due to accidents, injuries, property damage, and unforeseen events. Choose a reliable agency like Lafayette Insurance Agency for your commercial insurance needs.",
      link: "/services/commercial-insurance",
    },
    {
      image:
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      title: "Property Insurance",
      desc: "Protect your investment with property insurance from Lafayette Insurance Agency. We offer a variety of options, including coverage for your home, condominium, rental property, and more. Get peace of mind knowing your property is protected.",
      link: "/services/property-insurance",
    },
  ];
  return (
    <div className="py-14">
      <div className="max-w-xl space-y-3">
        <h3 className="text-indigo-600 font-semibold">Products and Services</h3>
        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Insurance Services
        </p>
        <p className="text-gray-600">
          We prioritize building personalized client relationships and
          delivering quality coverage at a low premium. Explore our range of
          insurance options, including Oxford auto, property, and commercial
          insurance.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3 mt-12">
        {insurance_service.map((item, idx) => (
          <div key={idx}>
            <img
              className="object-cover w-full h-64 mb-6 lg:h-80 xl:h-96"
              src={item.image}
              alt=""
            />
            <h5 className="mb-2 text-xl font-semibold text-gray-800 leading-none sm:text-2xl">
              {item.title}
            </h5>
            <p className="text-gray-600 mb-2">{item.desc}</p>
            <Link
              href={item.link}
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceServices;