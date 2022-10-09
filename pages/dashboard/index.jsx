

import AddMentor from "../../components/add-mentor";
import AddAppointment from "../../components/add-appointment";
import DashboardHeader from "../../components/dashboard-header";
import Script from "next/script";
export default function DashBoard(props) {

    return (
        <>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <div className="flex w-full">
            <div className="forLeft w-1/5">
                <div id="drawer-disable-body-scrolling" className=" z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 " tabindex="-1" aria-labelledby="drawer-disable-body-scrolling-label" aria-hidden="true">
                <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>

                    <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                </a>
                            </li>
                        </ul>
    </div>
</div>
            </div>
            <div className="right w-full">
                <DashboardHeader />
                 <div className=" test flex flex-col justify-center w-full p-6">

                    <AddAppointment />
                    <AddMentor />

                </div>


            </div>
        </div>
        </>
    )
}




