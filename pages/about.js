/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Town from "../public/town.jpeg";
import Profile from "../public/ramesh.png";
import Office from "../public/office.jpeg";
import { FAQ, InsuranceOutline, Section } from "@/components";

const About = () => {
  return (
    <div className="py-14">
      <Head>
        <title>Lafayette | About Us</title>
      </Head>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w space-y-3">
          <h3 className="text-blue-600 font-semibold">About Us</h3>
          <p className="text-gray-800 text-3xl font-bold sm:text-4xl">
            Our Company Story and Values
          </p>
        </div>
        {/* oxford */}
        <div className="py-12">
          <Image
            className="w-full object-cover rounded-lg"
            src={Town}
            alt="Image Description"
          />
          <div className="mt-6 space-y-3">
            <h3 className="text-blue-600 font-semibold">Oxford Mississippi</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Oxford Insurance
            </p>
            <p className="mt-3 text-gray-600">
              Insurance is a crucial investment for anyone, regardless of where
              they live. In Oxford, MS, homeowners, contractors, and car owners
              all recognize the importance of having reliable insurance
              coverage. Here at Lafayette Insurance, we've
              been serving the North Mississippi region and
              we understand what our clients are looking for when it comes to
              Oxford Insurance.
            </p>
          </div>
        </div>
        {/* meet the agent */}
        <Section title={"Ramesh Retnam"} subtitle={"Meet the Agent"} ltr={true} img={Profile}>
          Meet Ramesh Retnam, founder and president of the Property and Casualty
          Division at Lafayette Insurance Agency. Known for his boundless energy
          and servant-hearted nature, Ramesh has achieved great success in both
          his personal and professional life. As a senior partner, he brings his
          expertise and enthusiasm to the agency, leading the property and
          casualty section with excellence.
        </Section>
        {/* approach */}
        <Section title={"Lafayette Insurance Agency"} subtitle={"Our Approach"} img={Office}>
          At Lafayette Insurance Agency, we pride ourselves on being the
          independent insurance agency you can trust for all your coverage
          needs. As Oxford Mississippi's most comprehensive insurance agency, we
          offer a wide range of coverage options and prioritize building lasting
          client relationships. We believe in educating and guiding our clients
          to the right protection products for their needs and are committed to
          providing quality coverage at the lowest possible premiums.
        </Section>
        <InsuranceOutline />
        <FAQ />
      </div>
    </div>
  );
};

export default About;
