import Image from "next/image";
import Card from "./card";
export default function Track(props) {
  return (
    <div className=" w-screen items-center md:justify-evenly md:flex-row p-5 flex-wrap ">
      <h1 className=" text-3xl p-2 font-semibold md:text-left items-start">
        About
      </h1>
      <p className=" text-lg p-2 text-gray-500 md:text-left">
        {props.description}
      </p>
      <h1 className=" text-3xl p-2 font-semibold md:text-left items-start">
        Start A Conversation
      </h1>
      <div className="flex-wrap md:md:flex">
        <div className="text p-3 text-center max-w-lg md:justify-start md:flex flex-wrap ">
          <p className=" text-lg p-2 text-gray-500 md:text-left">
            Get in contact with an experienced senior in the industry today!
          </p>
          <button className="bg-black w-1/2 h-10 rounded font-semibold text-white m-2">
            Make an appointment now
          </button>
        </div>
        <div className="photo p-4">
          <Image src={props.imageLink} alt="image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
