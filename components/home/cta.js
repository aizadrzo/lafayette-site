import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-xl">
        <div className="py-4">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Get Your Quote <span className="text-indigo-600">Today</span>
          </h3>
          <p className="text-gray-500 leading-relaxed mt-3">
            Lafayette Insurance Agency is your one-stop-shop for all your
            insurance needs. We put customers first and provide easy
            accessibility for all. Contact us today for all your insurance
            questions and needs, including auto and property insurance.
          </p>
        </div>
        <Link
          className="cta-pr-btn px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
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
    </section>
  );
};

export default CTA;
