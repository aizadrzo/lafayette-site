/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FAQ, InsuranceOutline, Section } from "@/components";

const About = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
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
