
import Image from "next/image"
import Header from "../components/header"

export default function About() {
    return  (
        <>
            <Header/>
            <div style={{height:"70vh"}} className="w-full flex ">
               
                <div className=" w-full p-5 flex justify-center text-center flex-col gap-4  items-center ">
                    <h1 className="text-3xl font-bold ">
                        We help to shrink the generaring gap. <span className="text-blue-500">Together</span>
                    </h1>
                   
                </div>

            </div>
            <div className="cardssection bg-slate-300 p-5 w-screen flex flex-wrap justify-center items-center md:gap-8">

                <a href="#" className="block md:w-1/2  md:max-w-xl p-6 max-w-sm bg-white rounded-lg border max-h-56 mt-3 mb-3 border-gray-200 shadow-md hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

                <a href="#" className="block md:w-1/2 md:max-w-xl p-6 max-w-sm bg-white rounded-lg border  max-h-56 mt-3 mb-3 border-gray-200 shadow-md hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
                <a href="#" className="block p-6 max-w-sm  md:max-w-xl bg-white rounded-lg border  max-h-56 mt-3 mb-3 border-gray-200 shadow-md hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
                <a href="#" className="block p-6 max-w-sm  md:max-w-xl bg-white rounded-lg border  max-h-56 mt-3 mb-3 border-gray-200 shadow-md hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

            </div>
            <div className="w-full p-5 flex  items-center justify-center gap-5 flex-wrap">

                <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
                    <div class="flex justify-end px-4 pt-4">
                        
                        
                        
                    </div>
                    <div class="flex flex-col items-center p-5 ">
                        <Image class="mb-3 w-24 h-24 rounded-full shadow-lg" height={80} width={80} src="https://cdn.uploadly.dev/634228079666525789e0c19eprocess.jpg" alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 ">Mike</h5>
                            <span class="text-sm text-gray-500 ">Aerospace Engineer</span>
                            <div class="flex mt-4 space-x-3 md:mt-6 text-center">
                                <div className="description">
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam tincidunt, nunc elit aliquet nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec aliquam tincidunt, nunc elit aliquet nunc, eget aliquam massa nisl eget dolor.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="w-full max-w-sm bg-white rounded-lg border mt-5 md:mt-0 border-gray-200 shadow-md ">
                    <div class="flex justify-end px-4 pt-4">



                    </div>
                    <div class="flex flex-col items-center p-5 ">
                        <Image class="mb-3 w-24 h-24 rounded-full shadow-lg" height={80} width={80} src="https://cdn.uploadly.dev/634228a29666525789e0c1c9fred1.PNG" alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 ">Fred</h5>
                        <span class="text-sm text-gray-500 ">Police Officer</span>
                        <div class="flex mt-4 space-x-3 md:mt-6 text-center">
                            <div className="description">
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam tincidunt, nunc elit aliquet nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec aliquam tincidunt, nunc elit aliquet nunc, eget aliquam massa nisl eget dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
   
            </div>
           
        </>
    )
}