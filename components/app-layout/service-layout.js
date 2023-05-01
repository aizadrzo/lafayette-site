import React, { useState } from "react";
import Link from "next/link";
import { CTA } from "../home";
import { useRouter } from "next/router";

const ServiceLayout = ({ children }) => {
  const router = useRouter();

  const navigation = [
    {
      link: "/services/auto-insurance",
      name: "Auto Insurance",
    },
    {
      link: "/services/commercial-insurance",
      name: "Commercial Insurance",
    },
    {
      link: "/services/property-insurance",
      name: "Property Insurance",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <div className="px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-2xl font-bold">
            Insurance Services
          </h3>
          <p className="text-gray-600 mt-2">
            We prioritize building personalized client relationships and
            delivering quality coverage at a low premium. Explore our range of
            insurance options, including Oxford auto, property, and commercial
            insurance.
          </p>
        </div>
        <React.Fragment>
          <div className="mt-6">
            <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className={`py-2 border-b-2 truncate ${
                    router.pathname === item.link
                      ? "border-indigo-600 text-indigo-600"
                      : "border-white text-gray-500"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <section className="container mx-auto max-w-screen-xl">
              <div className="pt-12">
                <div className="space-y-5 md:space-y-8">
                  {children}
                  {/* Common Section */}
                  <figure>
                    <img
                      class="w-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                    <figcaption class="mt-3 text-sm text-center text-gray-500">
                      A man and a woman looking at a cell phone.
                    </figcaption>
                  </figure>
                  <div class="space-y-3">
                    <h3 class="text-2xl font-semibold dark:text-white">
                      Lafayette Insurance Experience
                    </h3>

                    <p class="text-lg text-gray-600 dark:text-gray-200">
                      At Lafayette Insurance we work with you in order to figure
                      out the best homeowners insurance policy for you and your
                      family. Lafayette Insurance has been a key provider in
                      homeowners insurance in the oxford area for some time now
                      and we only recommend policies that make sense for you
                      based on your own opinion and depending on your situation.
                      Lafayette Insurance’s main concern is that the homeowner’s
                      insurance includes only what is necessary and won’t try to
                      trick you into a higher price, unlike the bigger insurance
                      companies. We focus on everything from a tornado to a
                      thief and will make sure you can go about your day-to-day
                      life worry-free.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </React.Fragment>
      </div>
      <CTA />
    </div>
  );
};

export default ServiceLayout;