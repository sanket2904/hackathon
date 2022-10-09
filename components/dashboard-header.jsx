import Image from "next/image";
import ham from "../public/ham.png";
import React from "react";
import { useRouter } from "next/router";
export default function DashboardHeader(props) {
  const [show, setShow] = React.useState(false);
  const router = useRouter();
  return (
    <>


      <nav class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="container flex flex-wrap justify-end items-center mx-auto">
         
          
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col p-4 mt-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center p-8  w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"><ion-icon name="person-circle-outline" onClick={() => setShow(!show)} className=" w-5 h-5 " ></ion-icon></button>
               
                <div id="dropdownNavbar" class={` ${show ? "" : "hidden"} absolute right-7 z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                    
                  </ul>
                 
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
