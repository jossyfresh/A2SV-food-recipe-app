import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7 text-white">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Food Recipe App
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0    ">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 rounded   md:p-0  md:dark:hover:text-blue-500 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded  md:p-0 md:blue-500 ay-700 white md:ansparent"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded  md:p-0  ay-700 white md:ansparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
