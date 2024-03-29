import React from "react";
import { MainLayout, ServiceLayout } from "@/components";
import Image from "next/image";
import Commercial from "../../public/commercial.jpg";

const CommercialInsurance = () => (
  <React.Fragment>
    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold md:text-3xl">
        Commercial Insurance
      </h3>
      <p className="text-lg text-gray-600">
        Commercial insurance is essential for protecting your business from
        potential liabilities due to accidents, injuries, property damage, and
        unforeseen events. Choose a reliable agency like Lafayette Insurance
        Agency for your commercial insurance needs.
      </p>
    </div>

    <figure>
      <Image
        src={Commercial}
        className="w-full object-cover rounded-lg"
        alt="commercial"
      />
    </figure>
    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">What They Do</h3>
      <p className="text-lg text-gray-600">
        Independent contractor insurance helps protect independent contractors
        against liability claims and any injuries that may occur during
        construction or renovations. An Independent contractor is a person,
        business, or corporation that provides goods or services under a written
        contract or verbal agreement. They do not work regularly for an employer
        but rather when work is required or if someone asks for their service.
        Independent contract insurance is insurance that almost all independent
        contractors have.
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">Definition</h3>
      <p className="text-lg text-gray-600 ">
        Independent contractor insurance according to Investopedia.com is any
        type of insurance that provides protection for the general liability,
        business operations, or business property of an independent contractor.
        In short, independent contractor insurance helps protect independent
        contractors’ businesses from liability claims.
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">
        Why you need Commercial Insurance?
      </h3>
      <p className="text-lg text-gray-600">
        If you are an independent contractor, it is necessary for you to have
        independent contractor insurance. As an independent contractor, you can
        get sued and held liable for damages like any other small business
        owner. Below are reasons why you need independent contractor insurance:
        {/* bullet points */}
      </p>
      <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-600">
        <li className="pl-2">
          Independent contractor insurance protects you and your business. As a
          business, you can be sued for damaging a client’s property or employee related injuries. Independent contractor insurance helps cover legal fees as
          well as damages from a lawsuit.
        </li>
        <li className="pl-2">
          Future clients of yours are most likely require you to have independent contractor insurance to make sure they are protected if
          anything happens in the renovations. Without independent contractor
          insurance, clients could be held responsible for damages or accidents
          caused by your work and are less likely to hire you if you do not have
          independent contractor insurance.
        </li>
        <li className="pl-2">
          Similar to car insurance, most states require independent contractors
          to have independent contractor insurance in order to perform work or
          renovations on homes or businesses. It is advised for both you and your client to
          have separate general liability insurance policies to ensure the
          protection of both parties.
        </li>
      </ul>
    </div>
  </React.Fragment>
);

CommercialInsurance.getLayout = (page) => (
  <MainLayout>
    <ServiceLayout>{page}</ServiceLayout>
  </MainLayout>
);

export default CommercialInsurance;
