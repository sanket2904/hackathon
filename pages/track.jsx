import Header from "../components/header"
import Hero2 from "../components/hero2"
import Track from "../components/track"
import connection from "../public/connection.svg"
import Hero from "../components/hero"
import Hero3 from "../components/hero3"
import phone from "../public/phone.svg"
import Image from "next/image"
export default function Trackk() {
    return (
        <>
            <Header />
            <div className="w-screen h-screen flex flex-wrap justify-center items-center p-5">
                <div className="top text-center">
                    <h1 className=" text-3xl  md:text-4xl lg:text-5xl max-w-2xl"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p className="max-w-2xl  text-gray-400 mt-3 md:text-lg ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <Hero2 headerText="Start a Conversation" description="Get in contact with an experienced senior in industry today!" imageLink={connection} />
            <Hero headerText="Know someone? Sign them up." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." imageLink={phone} />
            <div className="testemonicals flex justify-center w-full flex-col items-center">
                <h1 className="text-3xl mt-4 mb-4">
                    Testemonials
                </h1>
                <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm  md:mb-12 md:grid-cols-2 max-h-80">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r ">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
                            <h3 className="text-lg font-semibold text-gray-900 ">Very easy this was to integrate</h3>
                            <p className="my-4 font-light">If you care for your time, I hands down would go with this</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image height={80} width={80} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div>Bonnie Green</div>
                                <div className="text-sm font-light text-gray-500 ">Developer at Open AI</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 ">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
                            <h3 className="text-lg font-semibold text-gray-900 ">Solid foundation for any project</h3>
                            <p className="my-4 font-light">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image height={80} width={80} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div>Roberta Casas</div>
                                <div className="text-sm font-light text-gray-500 ">Lead designer at Dropbox</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>
            </div>
        </>
    )
}