import Image from "next/image"
export default function Hero2(props) {
    return (
        
            <div className="hero2 w-screen h-screen flex flex-wrap flex-col items-center md:justify-evenly md:flex-row ">
                <div className="photo md:w-1/2 flex md:justify-center p-5 md:p-12">
                    <Image src={props.imageLink} alt="image" width={500} height={500} />
                </div>
                <div className="content md:w-1/2  flex md:justify-start flex-col md:flex-wrap md:p-12 p-5">
                    <h1 className="text-3xl max-w-lg">
                        {props.headerText}
                    </h1>
                    <p className="text-md text-gray-400 max-w-lg" >
                        {props.description}
                    </p>
                    <button style={{ minWidth: "125px", maxWidth: "200px" }} className="bg-blue-700 w-1/2 h-10 rounded font-semibold min-w-min flex justify-center items-center text-white mt-2 pr-3 pl-3 box-border ">
                        Know More <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>

                </div>

            </div>
            )
}