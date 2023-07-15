import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

const Nav = () => (
  <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4">
    <nav
      className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <Link className="flex-none text-xl font-semibold" href="/">
          <Image src={Logo} alt="logo" width={100} height='auto' />
        </Link>
        <div className="sm:hidden">
          <button
            type="button"
            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
            data-hs-collapse="#navbar-with-mega-menu"
            aria-controls="navbar-with-mega-menu"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className="hs-collapse-open:block hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-with-mega-menu"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
          <Link
            className="font-medium text-gray-600 hover:text-gray-400"
            href="/about"
          >
            About Us
          </Link>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
            <button
              id="hs-mega-menu-basic-dr"
              type="button"
              className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium "
            >
              Services
              <svg
                className="ml-2 w-2.5 h-2.5 text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600-500 "
                href="/services/auto-insurance"
              >
                Auto Insurance
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600-500"
                href="/services/commercial-insurance"
              >
                Commercial Insurance
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600-500"
                href="/services/property-insurance"
              >
                Property Insurance
              </Link>
            </div>
          </div>
          <Link
            className="py-3 px-4 font-medium text-center text-white bg-blue-600 hover:bg-blue-600-500 active:shadow-none rounded-lg shadow md:inline"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Nav;
