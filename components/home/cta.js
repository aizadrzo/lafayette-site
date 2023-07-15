import Link from "next/link";
import React from "react";

const CTA = () => (
  <section className="py-12 mx-auto">
    <div className="p-8 rounded shadow-xl sm:p-16 bg-blue-600">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Get your Quote
            <br className="hidden md:block" />{" "}
            <span className="md:pt-2 inline-block">Today</span>
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="mb-6 sm:mb-4text-base text-white">
            Lafayette Insurance Agency is your one-stop-shop for all your
            insurance needs. We put customers first and provide easy
            accessibility for all. Contact us today for all your insurance
            questions and needs, including auto and property insurance.
          </p>
          <Link
            className="px-4 py-2 text-grey-800 font-medium bg-white rounded-full inline-flex items-center"
            href="/contact"
          >
            Contact us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
