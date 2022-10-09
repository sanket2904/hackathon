


import { useRouter } from "next/router"
import DashboardHeader from "../../components/dashboard-header"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
export default function Appointments() {


    
    
    
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        console.log(appointments);

        if (!window.ssn) {
            window.ssn = JSON.parse(localStorage.getItem("session"))
        }

        axios.get("http://localhost:1337/api/appointments").then((res) => {
            setAppointments(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const createSchedule = (e) => {
        e.preventDefault()
        let formdata = new FormData()
        formdata.append("name", document.getElementById("name").value)
        formdata.append("email", document.getElementById("email").value)
        formdata.append("phone", document.getElementById("phone").value)
       
        formdata.append("timeSlot", document.getElementById("timings").value)
        formdata.append("duration", 30)
        formdata.append("user", window.ssn.accountId)
        axios.post("http://localhost:1337/api/create_schedule", formdata).then((res) => {
            console.log(res)
        }
        ).catch((err) => {
            console.log(err)
        }
        )
    }
    return(
        <>
            <div className="w-full flex">
                
                <div id="drawer-navigation" class=" z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>

                    <div class="py-4 overflow-y-auto">
                        <ul class="space-y-2">
                            <li>
                                <a onClick={() => router.push("/dashboard")}  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span class="ml-3">Dashboard</span>
                                </a>
                            </li>


                            <li>
                                <a onClick={() => router.push("/dashboard/appointments")} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Appointments</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <DashboardHeader />
                    <div className="p-5">
                        <button onClick={() => setShow(!show)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Schedule an appointment</button>
                    </div>
                    {
                        show && <div className="w-1/2  p-7">

                            <form>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="email" name="floating_email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                                
                                
                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input type="text" name="floating_first_name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input type="text" name="floating_last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 mb-6 w-full group">
                                        <input type="tel"  name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                    </div>
                                    
                                </div>
                                <div class="grid md:grid-cols-2 md:gap-6">
                                   
                                    <div class="relative z-0 mb-6 w-full group">
                                        <select id="timings" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected> Choose a timing Slot</option>
                                            {
                                                (appointments.length > 0) && appointments.map((appointment) => {
                                                    return <option className="text-black" key={appointment._id} value={appointment.timeSlot}>{
                                                        new Date(appointment.timeSlot).toLocaleString()
                                                    }</option>
                                                })
                                            }
                                            {
                                                appointments.length === 0 && <option className="text-black" value="No slots available">No slots available</option>
                                            }
                                            
                                        </select>
                                    </div>
                                </div>
                                <button onClick={(e) => createSchedule(e)} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>

                        </div>
                    }
                </div>
            </div>
        </>
    )
}