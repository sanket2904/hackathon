import Header from "../components/header"
import axios from "axios";
import React from "react";
export default function Contact(params) {
    const [show,setShow] = React.useState(false)
    const sendContact = ( ) => {
        let formreq = new FormData();
        formreq.append("name", document.getElementById("name").value);
        formreq.append("email", document.getElementById("email").value);
        formreq.append("phone", document.getElementById("phone").value);
        formreq.append("message", document.getElementById("message").value);
        setShow(true)
        axios.post("http://localhost:1337/api/contact", formreq).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        }
        )
    }
    return (
        
        <>
            <Header/>
            <div className="  min-h-screen h-full w-screen flex justify-center items-center flex-wrap flex-col md:flex-row bg-slate-300">
                <div className="md:w-1/2 flex justify-center w-full p-5 mt-16">

                    <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 ">
                        {show ? <div>
                            <h1>Thank you for your interest!</h1>
                        </div> : <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 ">Contact Us</h5>
                            <label htmlFor="desc" className="text-sm font-medium text-gray-500 ">Our friendly team would love to hear from you</label>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John Doe" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                                <input type="tel" name="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="(123) 456-7890" required="" />
                            </div>
                            <div>
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..."></textarea>
                            </div>
                            <button onClick={(event) => {
                                event.preventDefault();
                                sendContact();
                            }} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send Message</button>
                           
                        </form>}
                    </div>

                </div>
                <div className="w-1/2">

                </div>
            </div>
        </>

    )
}