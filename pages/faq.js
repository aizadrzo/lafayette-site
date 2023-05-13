import React from "react";

const Faq = () => {
  const faqsList = [
    {
      q: "What is an insurance?",
      a: "Insurance is important and necessary to have no matter where you live. Even in a small town, insurance is something homeowners, contractors and car owners are always on the search for.",
    },
    {
      q: "What do they do?",
      a: "Insurance is highly sought after in Oxford, MS. To find some of the best insurance policies here in Oxford, Mississippi, choose Lafayette Insurance Agency. We are the independent agency you can trust. At Lafayette insurance, we have been in the North Mississippi area for over 15 years and understand what our clients are looking for in Oxford Insurance.",
    },
    {
      q: "Why you need Oxford Insurance Oxford MS.",
      a: "If you are a community member of Oxford it is necessary for you to be protected whether it be a car, independent contractor, or home insurance. Lafayette Insurance Agency has a lot of policies to offer for unique situations and to meet needs for each and every client. Even in this small town, Oxford insurance is important to have so you can stay protected against theft and damage.",
    },
    {
      q: "Why an Indpendent Agent?",
      a: "Because an independent agent is not tied down to one insurance carrier. Lafayette Insurance Agency partners with different insurance carriers to give our customers the best coverage at the best rates. This helps our customers to save money on top of having a great coverage. We are able to shop with the top insurance carriers in the industry.",
    },
    {
      q: "Why Lafayette Insurance Agency?",
      a: "We are a one-stop shop for auto, home, life, health and combined benefits. We are here for individual home, auto, and business owners where they can shop for all their ins needs. We are locally owned and easily accessible to all our customers. At Lafayette Insurance Agency, we put our customer’s needs first. For any other automobile insurance questions, property insurance questions, etc. please give Lafayette Insurance a call today!",
    },
  ];
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-5">
          <div className="max-w space-y-3">
            <h3 className="text-blue-600 font-bold">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              All information you need to know
            </p>
          </div>
          {faqsList.map((item, idx) => (
            <div className="space-y-3 pt-10" key={idx}>
              <h2 className="text-2xl font-semibold text-gray-800">{item.q}</h2>

              <p className="text-lg ">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
