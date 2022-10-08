

import Image from "next/image"

export default function Testamonials(props) {
    return (

        <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm  md:mb-12 md:grid-cols-2 max-h-80">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r ">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-900 ">Very easy this was to integrate</h3>
                    <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
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
                    <p className="my-4 font-light">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver!"</p>
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

    )
}   