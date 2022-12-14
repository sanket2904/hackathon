import Image from "next/image";
import ham from "../public/ham.png";
import React from "react";
import { useRouter } from "next/router";
export default function Header(props) {
  const [show, setShow] = React.useState(false);
  const router = useRouter();
  return (
    <>

      <nav className="   px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-white ">
        <div className="container flex flex-wrap md:justify-between items-center mx-auto justify-end ">
          <a href="https://flowbite.com/" className="flex hidden md:block items-center">
            {/* <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
              <span className="self-center = text-xl font-semibold whitespace-nowrap ">GENERATION CONNECTION</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg onClick={() => setShow(!show)} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className={`${show ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <a onClick={() => router.push("/")} href="#" className="block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                <a onClick={() => router.push("/about")} href="#" className="block py-2 pr-4 pl-3   rounded md:bg-transparent  md:p-0 " aria-current="page">About</a>
              </li>
              <li>
                <a onClick={() => router.push("/track")} href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Details</a>
              </li>
              <li>
                <a onClick={() => router.push("/contact")} href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact Us</a>
              </li>
              <li>
                <a onClick={() => router.push("/login")} href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Login</a>
              </li>
              <li>
                <a onClick={() => router.push("/signup")} href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
