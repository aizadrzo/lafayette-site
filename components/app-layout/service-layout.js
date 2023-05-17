import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CTA } from "../home";

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
    <div className="py-10">
      <div className="container max-w-screen-xl mx-auto pt-4 px-4 md:px-8">
        <div className="max-w-lg space-y-3">
          <h3 className="text-blue-600 font-semibold">Products & Services</h3>
          <p className="text-gray-800 text-3xl font-bold sm:text-4xl">
            Insurance Services
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
                      ? "border-blue-600 text-blue-600"
                      : "border-white text-gray-500"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
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
                  <figure>
                    <img
                      className="w-full object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                  </figure>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Lafayette Insurance Experience
                    </h3>

                    <p className="text-lg text-gray-600">
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
        <CTA />
      </div>
    </div>
  );
};

export default ServiceLayout;
