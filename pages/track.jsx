import Header from "../components/header"
import Hero2 from "../components/hero2"
import Track from "../components/track"
import connection from "../public/connection.svg"
import Hero from "../components/hero"
import Hero3 from "../components/hero3"
import phone from "../public/phone.svg"
import Image from "next/image"
import Han from '../public/Han.PNG'
export default function Trackk() {
    return (
        <>
            <Header />
            <div className="w-screen h-screen flex flex-wrap justify-center items-center p-5">
                <div className="top text-center">
                    <h1 className=" text-3xl  md:text-4xl lg:text-5xl max-w-2xl"> 
                    Start connecting today to learn & share
                    </h1>
                    <p className="max-w-2xl  text-gray-400 mt-3 md:text-lg ">
                    Retirees and students, sign in now through our portal to connect across generations while learning & sharing about the professional world.
                    </p>
                </div>
            </div>
            <Hero2 headerText="Start a Conversation" description="Get in contact with an experienced senior in industry today!" imageLink={connection} />
            <div  style={{minHeight:"50vh"}} className="flex justify-center p-5 items-center ">
                
                <ol className="relative border-l border-gray-200 ">
                    <li className="mb-10 ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">Sign up for the Account</h3>
                       
                        <p className="mb-4 text-base font-normal text-gray-500 ">Get access to profiles across various disciplines and book an appointment.</p>
                        
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white 
                        ">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 " >Schedule an appointment with senior mentor</h3>
                        
                        <p className="text-base font-normal text-gray-500 ">Simple! Students choose a profile that matches their interests to book an appointment. Each of our retirees has their preferred communication methods: virtual, phone, or in-person.</p>
                    </li>
                    <li className="ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">Attend the appointment</h3>
                       
                        <p className="text-base font-normal text-gray-500 ">Get ready to learn from one another and form those generational connections!</p>
                    </li>
                </ol>

            </div>
            <Hero headerText="Want to be a mentor or know someone who does? Sign up." description="There is so much untapped knowledge and experience within each retiree. Let’s create a space for retirees to share, for students to learn, and for generations to connect!
" imageLink={phone} />
            <div className="testemonicals flex justify-center w-full flex-col items-center pt-8">
                <h1 className="text-3xl mt-4 mb-4">
                    Testemonials
                </h1>
                <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm  md:mb-12 md:grid-cols-2 max-h-80">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r ">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
                            <h3 className="text-lg font-semibold text-gray-900 ">So many helpful takeaways to get started on my career path.</h3>
                            <p className="my-4 font-light">I came into the meeting knowing nothing about Aerospace Engineering. After hearing about Mike’s 20+ years experience, I learned how the field had evolved over years and the trend that it is heading towards. Mike advised me on the next steps I could take given my background, and now I am inspired!</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image height={80} width={80} className="w-9 h-9 rounded-full" src={Han} alt="profile picture" />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div>Han Nguyen</div>
                                <div className="text-sm font-light text-gray-500 ">ASU student</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 ">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
                            <h3 className="text-lg font-semibold text-gray-900 ">It feels good helping someone.</h3>
                            <p className="my-4 font-light">Over my years working, I gained a lot of wisdom that I am excited to pass onto the younger generation. I hope to guide them on the right track by sharing my knowledge about laws, law enforcement, and morality.</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image height={80} width={80} className="w-9 h-9 rounded-full" src="https://cdn.uploadly.dev/634228a29666525789e0c1c9fred1.PNG" alt="profile picture" />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div>Fred</div>
                                <div className="text-sm font-light text-gray-500 ">former police officer</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>
            </div>
        </>
    )
}