const FAQ = () => {
  const faqsList = [
    {
      q: "What is insurance?",
      a: "Insurance is important and necessary to have no matter where you live. Even in a small town, insurance is something homeowners, contractors and car owners are always on the search for.",
    },
    {
      q: "What do they do?",
      a: "Insurance is highly sought after in Oxford, MS. To find some of the best insurance policies here in Oxford, Mississippi, choose Lafayette Insurance Agency. We are the independent agency you can trust. At Lafayette insurance, we are in the North Mississippi area and understand what our clients are looking for in Oxford.",
    },
    {
      q: "Why you need insurance in Oxford MS.",
      a: "If you are a community member of Oxford it is necessary for you to be protected whether it be a car, independent contractor, or home insurance. Lafayette Insurance Agency has a lot of policies to offer for unique situations and to meet needs for each and every client. Even in this small town, insurance is important to have so you can stay protected against theft and damage.",
    },
    {
      q: "Why an Indpendent Agent?",
      a: "An independent agent is not tied down to one insurance carrier. Lafayette Insurance Agency partners with different insurance carriers to give our customers the best coverage at the best rates. This helps our customers to save money on top of having premium coverage. We are able to shop with the top insurance carriers in the industry.",
    },
    {
      q: "Why Lafayette Insurance Agency?",
      a: "We are a one-stop shop for auto, home, property, health, and casualty insurance. We are here for individual home, auto, and business owners where they can shop for all their insurance needs. We are locally owned and easily accessible to all our customers. At Lafayette Insurance Agency, we put our customers' needs first. For any other insurance questions, please give Lafayette Insurance a call today!",
    },
  ];
  return (
    <section className="py-12">
      <div className="container flex flex-col justify-center mx-auto">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-600">
              Frequently asked questions
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              All information you need to know
            </p>
          </div>
          <div className="space-y-5">
            {faqsList.map((item, idx) => (
              <details className="w-full border rounded-lg" key={idx}>
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                  {item.q}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
