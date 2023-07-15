import React from "react";
import Head from "next/head";
import { CTA, Hero, InsuranceServices, Section } from "@/components";
import Office from '@/public/office.jpeg';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Lafayette | Home</title>
      </Head>
      <Hero />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="py-14">
          <Section
            title={"Lafayette Insurance Agency"}
            subtitle={"About Us"}
            link={true}
            href={"/about"}
            linkName={"Read More"}
            img={Office}
          >
            Lafayette Insurance Agency, Inc. is the trusted independent
            insurance agency near me that you can depend on all your insurance
            coverage needs. As Oxford Mississippi’s most complete comprehensive
            insurance agency, we offer all types of insurance coverage.
          </Section>
          <InsuranceServices />
          <CTA />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
