

import AddMentor from "../../components/add-mentor";
import AddAppointment from "../../components/add-appointment";
import DashboardHeader from "../../components/dashboard-header";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DashBoard(props) {
    const router = useRouter();
    const [schedules, setSchedules] = useState([]);
    console.log(schedules);
    useEffect(  () => {
        if (!window.ssn) {
            window.ssn = JSON.parse(window.localStorage.getItem("session"));
            try {
               
                    axios.get("http://localhost:1337/api/account/" + window.ssn.accountId).then(res => {
                        console.log(res);
                        if (res.status !== 200) {
                            delete window.localStorage.session;
                            router.push("/login");
                        }

                    }).catch(err => {
                        console.log(err);
                        delete window.localStorage.session;
                        router.push("/login");
                    });

                
            } 
            catch (error) {
                delete window.localStorage.session;
                router.push("/login");
            }
            
        }
        axios.get("http://localhost:1337/api/schedules/"+ window.ssn.accountId).then((res) => {
            setSchedules(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <div className="w-full flex ">

            
                

                
                <div id="drawer-navigation" class=" z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                    
                    <div class="py-4 overflow-y-auto">
                        <ul class="space-y-2">
                            <li>
                                <a onClick={() => router.push("/dashboard")} href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span class="ml-3">Dashboard</span>
                                </a>
                            </li>
                            
                            
                            <li>
                                <a onClick={() => router.push("/dashboard/appointments")} href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Appointments</span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    
                    <DashboardHeader />
                    {/* <form>
                        <input type="datetime-local" id="meeting-time"
                            name="meeting-time" value="2018-06-12T19:30"
                            min="2018-06-07T00:00" max="2018-06-14T00:00"  className="  border-2 border-black p-5"/>
                    </form> */}
                    {schedules.map((schedule => {
                        return (
                            <div key={schedule._id} className="appointments p-5">

                                <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h5>
                                    <h6 className="text-black">
                                        Upcoming Booking Info
                                    </h6>
                                    <div className="pt-3 pb-3 flex">
                                        <div>
                                            <ion-icon style={{ color: "black" }} fill="white" className="text-white" name="calendar-outline"></ion-icon>
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-black ml-2">
                                                Date & Time
                                            </h1>
                                            <p className=" text-black ml-2">
                                                {
                                                    new Date(schedule.timeSlot).toLocaleDateString() + " " + new Date(schedule.timeSlot).toLocaleTimeString()
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        )
                    }))}
                    
                </div>

        </div>
        
        </>
    )
}




