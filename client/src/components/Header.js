import React from "react";
import logo from "../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 absolute w-full top-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Scheduler Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Course Scheduler
            </span>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800 cursor-pointer">
              <AccountCircleIcon fontSize="large" />
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Click to Enroll
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
