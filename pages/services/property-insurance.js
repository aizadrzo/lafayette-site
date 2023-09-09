import React from "react";
import { MainLayout, ServiceLayout } from "@/components";
import Image from "next/image";
import Property from '@/public/property-insurance.jpeg';

const PropertyInsurance = () => (
  <React.Fragment>
    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold md:text-3xl">
        Property Insurance
      </h3>
      <p className="text-lg text-gray-600">
        Protect your investment with property insurance from Lafayette Insurance
        Agency. We offer a variety of options, including coverage for your home,
        condominium, rental property, and more. Get peace of mind knowing your
        property is protected.
      </p>
    </div>

    <figure>
      <Image
        src={Property}
        alt="property"
        className="w-full object-cover rounded-lg"
      />
    </figure>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">What They Do</h3>
      <p className="text-lg text-gray-600">
        Homeowners insurance is any type of insurance that protects and
        covers a private residence. This includes property damage such as damage
        from weather, personal property such as furniture, clothing, appliances,
        and jewelry such as engagement rings, wedding bands, and diamond
        bracelets. Homeowners insurance may also include theft, personal
        liability, medical bills for those who get injured while on your
        property, and any additional expenses.
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">What is it?</h3>

      <p className="text-lg text-gray-600">
        Homeowners insurance or home insurance is property insurance that
        provides coverage for a private residence. Any private residence is a
        single-family home, condo, townhome, mobile home, specialty or vacation
        home, and vacant home. Homeowners insurance typically covers
        losses and damages to your home residence that can include furnishings
        or other assets in and around your home. You can also have the option to
        have liability coverage for certain accidents that may happen in your
        home or property. Almost all mortgage lenders require a homeowners
        insurance policy making home insurance necessary to have if you are
        looking to buy or rent a private residence. Most states require
        homeowners insurance, so it is important to find out what is
        required in your state before committing to a homeowners insurance
        policy.
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-gray-800 text-2xl font-semibold">
        Why you need Homeowners Insurance?
      </h3>

      <p className="text-lg text-gray-600">
        Your home is a major investment and you are going to want homeowners
        insurance in order to make sure that investment is protected but it is
        also much more than that. You not only want to protect something you
        spent a lot of hard-earned money on, but you also want to protect the
        people and assets inside your home and the way to do that is to purchase
        homeowners insurance if something unforeseen happens to the
        home and what is inside it in the process. It’s not just natural
        disasters either; you also need homeowners insurance if a visitor gets
        injured or a thief comes while you are away or even if you simply lose
        something like your passport, homeowners insurance can cover all of that
        and help make your life a lot easier. The reason you would need
        homeowners insurance comes down to the fact that it is a surefire way to
        protect not only your home but the life you built in and around your
        home.
      </p>
    </div>
  </React.Fragment>
);

PropertyInsurance.getLayout = (page) => (
  <MainLayout>
    <ServiceLayout>{page}</ServiceLayout>
  </MainLayout>
);

export default PropertyInsurance;
