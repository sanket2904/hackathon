

import Image from "next/image"

export default function Testamonials(props) {
    return (

        <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm  md:mb-12 md:grid-cols-2 max-h-80">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r ">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-900 ">So many helpful takeaways to get started on my career path.</h3>
                    <p className="my-4 font-light">I came into the meeting knowing nothing about Aerospace Engineering. After hearing about Mike’s 20+ years experience, I learned how the field had evolved over years and the trend that it is heading towards. Mike advised me on the next steps I could take given my background, and now I am inspired!</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <Image height={80} width={80} className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
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
                            <div>Fred </div>
                            <div className="text-sm font-light text-gray-500 ">former police officer</div>
                        </div>
                </figcaption>
            </figure>
            
        </div>

    )
}   