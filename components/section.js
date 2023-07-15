import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const Section = ({
  title,
  subtitle,
  children,
  ltr = false,
  link = false,
  href = null,
  linkName = null,
  img
}) => {
  const flexDirection = classNames(
    "items-center",
    "gap-x-12",
    "sm:px-4",
    "md:px-0",
    "lg:flex",
    { "lg:flex-row-reverse": ltr }
  );
  return (
    <section className="py-12">
      <div className={flexDirection}>
        <div className="flex-1 sm:hidden lg:block">
          <Image
            src={img}
            className="md:max-w-lg rounded-lg"
            alt="Image Alt"
          />
        </div>
        <div className="max-w-xl space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
          <h3 className="text-blue-600 font-semibold">{subtitle}</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {title}
          </p>
          <p className="mt-3 text-gray-600">{children}</p>
          {link && (
            <Link
              href={href}
              className="inline-flex gap-x-1 items-center text-blue-600 hover:text-blue-600-500 duration-150 font-medium"
            >
              {linkName}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
