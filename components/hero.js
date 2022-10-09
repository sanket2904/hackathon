
import Image from "next/image"
export default function Hero(props) {
    return (
        <>
            <div className="bg-white h-screen w-screen flex-wrap flex text-black md:justify-evenly md:flex-row-reverse items-center  ">
                <div className="photo p-4 z-10">
                    <Image src={props.imageLink} alt="image" width={600} height={600} />
                </div>
                <div className="text p-3 text-center max-w-lg md:justify-start md:flex flex-wrap ">
                    <h1 className=" text-3xl p-2 font-semibold md:text-left">
                        {props.headerText}
                    </h1>
                    <p className=" text-lg p-2 text-gray-500 md:text-left">
                        {props.description}
                    </p>
                    <button className="bg-blue-700 w-1/3 h-10 rounded font-semibold text-white m-2">
                        Know More
                    </button>
                </div>
            </div>
        </>
    )
}