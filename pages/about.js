/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FAQ, InsuranceOutline, Section } from "@/components";
import Link from "next/link";

const About = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="items-start justify-between py-4  border-b md:flex">
          <div className="max-w-lg space-y-3">
            <h3 className="text-gray-800 text-2xl font-bold">
              About Our Agency
            </h3>
            <p className="text-gray-600">
              Lafayette Insurance Agency is your trusted independent insurance
              agency. As Oxford Mississippi's most comprehensive agency, we
              offer all types of coverage.
            </p>
            <Link
              href="/services/auto-insurance"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              View More
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
        </div>
        {/* meet the agent */}
        <Section title={"Ramesh Retnam"} subtitle={"Meet the Agent"} ltr={true}>
          Meet Ramesh Retnam, founder and president of the Property and Casualty
          Division at Lafayette Insurance Agency. Known for his boundless energy
          and servant-hearted nature, Ramesh has achieved great success in both
          his personal and professional life. As a senior partner, he brings his
          expertise and enthusiasm to the agency, leading the property and
          casualty section with excellence.
        </Section>
        {/* approach */}
        <Section title={"Lafayette Insurance Agency"} subtitle={"Our Approach"}>
          At Lafayette Insurance Agency, we pride ourselves on being the
          independent insurance agency you can trust for all your coverage
          needs. As Oxford Mississippi's most comprehensive insurance agency, we
          offer a wide range of coverage options and prioritize building lasting
          client relationships. We believe in educating and guiding our clients
          to the right protection products for their needs and are committed to
          providing quality coverage at the lowest possible premiums.
        </Section>
        {/* oxford */}
        <Section
          title={"Oxford Mississippi"}
          subtitle={"Oxford Insurance"}
          ltr={true}
        >
          Insurance is a crucial investment for anyone, regardless of where they
          live. In Oxford, MS, homeowners, contractors, and car owners all
          recognize the importance of having reliable insurance coverage. That's
          why Oxford MS Insurance is highly sought after for the best policies
          in the area. At Lafayette Insurance, we've been serving the North
          Mississippi region for over 15 years, and we understand what our
          clients are looking for when it comes to Oxford Insurance.
        </Section>
        <InsuranceOutline />
        <FAQ />
      </div>
    </React.Fragment>
  );
};

export default About;
