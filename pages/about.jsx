
import Image from "next/image"
import Header from "../components/header"

export default function About() {
    return  (
        <>
            <Header/>
            <div style={{height:"70vh"}} className="w-full flex ">
               
                <div className=" w-full p-5 flex justify-center  flex-col gap-4   ">
                    <h1 className="text-xl sm:text-3xl font-bold text-center">
                        We help to shrink the generation gap. <span className="text-blue-500">Together</span>
                    </h1>
                    
                </div> 
            </div>
            <div className="cardssection bg-slate-300 p-5 w-screen flex flex-wrap sm:py-28 ">
            <p className="text-lg sm:px-14 text-left">
                    In this era of ever-changing conditions, two people born ten years apart can have very different life experiences. It is therefore challenging for different age groups to relate to one another, especially the retired and the youth, causing unwanted generational disconnection.</p>
                    <p className="text-lg text-left sm:px-14">
                    However, we believe that age should not separate us. Rather, it forms our collective experience.
                    </p>
                    <p className="text-lg sm:px-14 text-left">
                    Then, the question we want to solve at Hacks for Humanity 2022 is, “How do we facilitate the formation of this collective experience? How do we create these cross-generational connections?”
                    </p>
                    
            </div>
            <div className="cardssection p-5 w-screen flex flex-wrap justify-center items-center md:gap-8">

                <a href="#" className="block md:w-1/2  md:max-w-xl p-6 max-w-sm bg-white rounded-lg border max-h-56 mt-3 mb-3 border-gray-200 shadow-md hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">What does Generation Connection do?</h5>
                    <p className="font-normal text-xs md:text-base text-gray-700 dark:text-gray-400">Generation Connection is a platform that connects retired experienced workers and college students through one-on-one advising meetings.
While college students struggle to explore the vast and oftentimes confusing professional world, retirees have first-hand experiences that students can learn from. 
</p>
                </a>

                <a href="#" className="block md:w-1/2 md:max-w-xl p-6 max-w-sm bg-white rounded-lg border  max-h-56 mt-3 mb-3 border-gray-200 shadow-md hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">How does Generation Connection work?
</h5>
                    <p className="font-normal text-xs md:text-base text-gray-700 dark:text-gray-400">For retirees: We welcome individual sign-ups as well as recommendations from companies and universities’ professors. Please sign up here to proceed.
For students: Students can book an appointment for free with a professional of their choice by signing up.
</p>
                </a>
                

            </div>

            <div className="cardssection bg-slate-300 p-5 w-screen   sm:py-28">
                <h1 className="sm:px-14 sm:text-xl font-bold ">Why Generation Connection?</h1>
                <div className="flex flex-wrap sm:justify-center items-center">
                    <div className="py-7 pl-7 md:px-7">
                        <p className="">Retirees:</p>
                        <div>
                            <ul className="list-disc">
                                <li>Unleash your valuable knowledge and experiences</li>
                                <li>Make meaningful contribution</li>
                                <li>Sense of community</li>
                                <li>Bridge generational gap</li>
                                <li>Lower risk of dementia</li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-7 pl-7 md:px-7">
                        <p>Students:</p>
                        <div>
                            <ul className="list-disc">
                                <li>Realistic knowledge about career fields</li>
                                <li>Bridge generational gap</li>
                                <li>Make meaningful connections</li>
                                <li>Sense of community</li>
                                <li>Potential referrals and career opportunities</li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-7 pl-7 md:px-7">
                        <p >Partners and companies:</p>
                        <div >
                            <ul className="list-disc">
                                <li>Access to a network of talented students</li>
                                <li>Refer retirees that worked for you and support them</li>
                                <li>Facilitating generational connections</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl text-center pt-5">Mentor Profiles</h1>
            <div className="w-full p-5 flex  items-center justify-center gap-5 flex-wrap py-16">

                <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
                    <div className="flex flex-col items-center p-5 ">
                        <Image className="mb-3 w-24 h-24 rounded-full shadow-lg" height={80} width={80} src="https://cdn.uploadly.dev/634228079666525789e0c19eprocess.jpg" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Mike</h5>
                            {/* <span class="text-sm text-gray-500 ">Aerospace Engineer</span> */}
                            <div className="flex mt-4 space-x-3 md:mt-6 text-left">
                                <div className="description">
                                    <ul className="list-disc">
                                        <li>20+ years experience in Aerospace Engineering</li>
                                        <li>Experience guiding capstone projects at ASU</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white rounded-lg border md:mt-0 border-gray-200 shadow-md   ">
                    <div className="flex flex-col items-center p-5 ">
                        <Image className="mb-3 w-24 h-24 rounded-full shadow-lg" height={80} width={80} src="https://cdn.uploadly.dev/634228a29666525789e0c1c9fred1.PNG" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Fred</h5>
                        <div className="flex mt-2 space-x-3 md:mt-2 text-left">
                            <div className="description">
                            <ul className="list-disc">
                                        <li>Retired police officer</li>
                                        <li>Passionate about building a community and serving others</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
   
            </div>
           
        </>
    )
}