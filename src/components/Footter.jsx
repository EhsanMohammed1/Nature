import React from "react";

const Footter = () => {
  return (
    <footer className="bg-black w-full   ">
      <div className="w-full max-w-screen-3xl px-8 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-gray-800 text-2xl font-semibold whitespace-nowrap ">
            <span className="text-green-700 text-3xl">N</span>
            <span className="text-2xl text-white">ature</span>
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 text-white hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 text-white hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 text-white hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://greenexchange.com/"
            className="hover:underline hover:text-white"
          >
            Green Exchange ™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footter;
