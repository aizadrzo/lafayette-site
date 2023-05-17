import Link from "next/link";
import React from "react";
import { Car, Home, Shop } from "@/public";
import Image from "next/image";

const InsuranceOutline = () => {
  const features = [
    {
      icon: <Image src={Car} alt="car" width={50} height={50} />,
      title: "Auto Insurance",
      desc: "Elements required for your coverage:",
      list: ["VIN number", "Name", "Date of birth", "Identification (ID)"],
      link: "/services/auto-insurance",
    },
    {
      icon: <Image src={Shop} alt="shop" width={50} height={50} />,
      title: "Commercial Insurance",
      desc: "Protect Your Business with Lafayette Insurance Agency",
      list: [
        "The craftsman",
        "The shopkeeper",
        "Restaurant owners",
        "Carpenters",
        "Masonry businesses",
        "House painters",
      ],
      link: "/services/commercial-insurance",
    },
    {
      icon: <Image src={Home} alt="home" width={50} height={50} />,
      title: "Property Insurance",
      desc: "Complete Property Coverage",
      list: [
        "Homeowner needs",
        "Tenants",
        "Floods",
        "Owners",
        "Condominiums",
        "Earthquakes",
      ],
      link: "/services/property-insurance",
    },
  ];
  return (
    <section className="py-12">
      <div className="text-gray-600">
        <div className="max-w-xl space-y-3">
          <h3 className="text-blue-600 font-semibold">Products and Services</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Insurance Services
          </p>
          <p>
            We prioritize building personalized client relationships and
            delivering quality coverage at a low premium. Explore our range of
            insurance options, including Oxford auto, property, and commercial
            insurance.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 text-blue-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
                <ul className="py-3 space-y-3">
                  {item.list.map((listItem) => (
                    <li key={listItem} className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {listItem}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.link}
                  className="inline-flex gap-x-1 items-center text-blue-600 hover:text-blue-500 duration-150 font-medium"
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InsuranceOutline;
