import Image from "next/image";
import ham from "../public/ham.png";
export default function Header(props) {
  return (
    <>
      <div class="header h-20 flex shadow-md">
        <div class="m-5">
          <a>
            <Image src={ham} alt="logo" width={50} height={50} />
          </a>
        </div>

        <div class="flex-grow"></div>
        <div class="flex w-2/4 items-center">
          <div class="flex-1 text-center text-2xl font-semibold text-indigo-500 cursor-pointer">
            <a> Home</a>
          </div>
          <div class="flex-1 text-center text-2xl font-semibold text-indigo-500 cursor-pointer">
            <a> Tracks</a>
          </div>
          <div class="m-5 text-center">
          
        </div>
        </div>
      </div>
    </>
  );
}
