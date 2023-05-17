import { CTA } from "@/components";
import Link from "next/link";
import React from "react";

const Faq = () => {
  const faqsList = [
    {
      title: "Information Collection and Use",
      description:
        "We collect personal information when you request a quote or purchase an insurance policy from us. This information may include your name, address, phone number, email address, date of birth, driver’s license number, and payment information.",
      continuation:
        "We use this information to provide you with the insurance products and services you have requested. We may also use this information to communicate with you about your policy and send you marketing materials, such as newsletters and promotions, unless you opt-out of receiving such communications.",
    },
    {
      title: "Information Sharing",
      description:
        "We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information with our affiliates and service providers to perform certain functions on our behalf, such as processing payments, underwriting policies, and managing claims.",
      continuation:
        "We may also share your information in response to a subpoena, court order, or other legal process, or to protect our rights or property, or the safety of our employees, customers, or others.",
    },
    {
      title: "Security",
      description:
        "We have implemented physical, technical, and administrative safeguards to protect your personal information from unauthorized access and use. We use industry-standard encryption technologies to secure your sensitive information during transmission and storage.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, correct, or delete the personal information we have collected from you. You may also request that we stop using your information for marketing purposes. To exercise your rights, please contact us using the information below.",
    },
    {
      title: "Updates to This Policy",
      description:
        "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website or by email.",
    },
    {
      title: "Contact Us",
      contact_description: (
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <Link
            className=" text-blue-600 underline hover:text-blue-500 duration-150"
            href="/"
          >
            662-801-7758
          </Link>
          .
        </p>
      ),
    },
  ];
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-5">
          <div className="max-w space-y-3">
            <h3 className="text-blue-600 font-semibold">Privacy Policy</h3>
            <p className="text-gray-800 text-3xl font-bold sm:text-4xl">
              Protecting Your Data
            </p>
          </div>
          {faqsList.map((item, idx) => (
            <div className="space-y-3 pt-10" key={idx}>
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.title}
              </h2>

              <p className="text-lg ">
                {item?.description
                  ? item.description
                  : item.contact_description}
                {item?.continuation && (
                  <>
                    <br />
                    {item.continuation}
                  </>
                )}
              </p>
            </div>
          ))}
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Faq;
