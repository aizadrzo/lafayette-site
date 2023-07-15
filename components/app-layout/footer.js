/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-[85rem] w-full mx-auto px-4  py-10 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-full lg:col-span-3 space-y-3">
            <Image src={Logo} alt="logo" width={100} height='auto' className="flex-none" />
            <p className="inline-flex gap-x-2 text-gray-600">
              Lafayette Insurance Agency, Inc. is the trusted independent
              insurance agency near me that you can depend on all your insurance
              coverage needs. As Oxford Mississippi’s most complete
              comprehensive insurance agency, we offer all types of insurance
              coverage.
            </p>
          </div>
          {/* services */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-800">Services</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/services/auto-insurance"
                >
                  Auto Insurance
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/services/commercial-insurance"
                >
                  Commercial Insurance
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/services/property-insurance"
                >
                  Property Insurance
                </Link>
              </p>
            </div>
          </div>
          {/* links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-800">Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/about"
                >
                  About us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/services/auto-insurance"
                >
                  Services
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/contact"
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>
          {/* legal */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-800">Legal</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/faq"
                >
                  FAQ
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-400"
                  href="/privacy"
                >
                  Privacy
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2023 Lafayette Insurance Agency. All rights reserved.
            </p>
          </div>

          <div>
            <Link
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-600 hover:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
              href="https://www.facebook.com/insurelafayette/"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
            <Link
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-600 hover:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
              href="#"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
