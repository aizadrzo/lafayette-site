import React from "react";
import { MainLayout, ServiceLayout } from "@/components";
import Image from "next/image";
import Auto from "@/public/car-insurance.png";

const AutoInsurance = () => (
  <React.Fragment>
    <div className="space-y-3">
      <h2 className="text-gray-800 text-2xl font-semibold md:text-3xl">
        Auto Insurance
      </h2>
      <p className="text-lg text-gray-600">
        Lafayette Insurance Agency offers auto insurance in Lafayette County.
        With years of experience, we are dedicated to providing our customers
        with the best possible coverage. Our team of experts is always available
        to help you make the right choice.
      </p>
    </div>
    <figure>
      <Image className="w-full object-cover rounded-lg" src={Auto} alt="auto" />
    </figure>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">What They Do</h3>

      <p className="text-lg text-gray-600 ">
        Auto Insurance is one of the most important types of insurance to
        have. Nearly 85% of the US population is a licensed driver making
        driving in the United States the most popular mean of transportation.
        Car insurance at Lafayette Insurance protects you if you are in
        an accident and will help with the expenses for damages to your
        car, yourself, others, and property that was harmed in an accident.
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">What is it?</h3>

      <p className="text-lg text-gray-600">
        Auto insurance is any type of insurance or protection on cars,
        trucks, motorcycles and, any other road vehicles. Car insurance
        helps to provide financial protection against physical damage to a car
        or bodily injury from an accident. Car insurance also helps to
        protect people from liability that could come from traffic collisions.
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">
        Why you need Auto Insurance?
      </h3>
      <p className="text-lg text-gray-600">
        It is necessary for you to have Auto insurance for many reasons.
        Below are just a few of the main reasons why you need car
        insurance:
      </p>
      {/* bullet points */}
      <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-600">
        <li className="pl-2">
          It is required by law in most states to have car insurance. Most
          states have a minimum auto liability coverage limit that drivers in
          that state are required to have.
        </li>
        <li className="pl-2">
          Car insurance will help pay for losses like the other party’s
          medical bills, damage to their vehicle, or other property that was
          damaged from the accident. If you are found at fault in a car accident
          and do not have car insurance, you will have to pay out of pocket and
          can damage your driving record. It is extremely important to have
          liability coverage to help offset costs from an accident.
        </li>
        <li className="pl-2">
          If you are leasing a vehicle, it is likely your lender will require
          you to have some sort of collision coverage or comprehensive coverage.
          Car insurance will help protect you and your lender if an
          accident occurs.
        </li>
        <li className="pl-2">
          Car insurance not only helps protect you but also your
          passengers. Medical payments coverage will help pay for your medical
          bills but also any passenger in your vehicle that is injured from the
          accident. Car insurance coverage can help pay for hospital
          visits, doctor bills, and surgery.
        </li>
      </ul>
    </div>
  </React.Fragment>
);

AutoInsurance.getLayout = (page) => (
  <MainLayout>
    <ServiceLayout>{page}</ServiceLayout>
  </MainLayout>
);

export default AutoInsurance;
