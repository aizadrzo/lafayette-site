import React from "react";
import { CTA, Features, Hero, Section } from "@/components";
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="container mx-auto max-w-screen-xl">
        {/* about */}
        <Section
          title={"Lafayette Insurance Agency"}
          subtitle={"About Us"}
          link={true}
          href={"/about"}
          linkName={"Read More"}
        >
          Get comprehensive insurance coverage with Lafayette Insurance Agency.
          We offer auto, home, life, health, and combined benefits. As a local
          business, we prioritize our customers and are always available to
          answer your questions. Contact us today for auto and property
          insurance needs.
        </Section>
        <Features />
        <CTA />
      </div>
    </React.Fragment>
  );
};

export default Home;
