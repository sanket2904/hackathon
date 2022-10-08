

import Image from "next/image"
import Card from "./card"
export default function Hero2(props) {
    return (
        <div className="hero2 w-screen h-screen flex  items-center md:justify-evenly md:flex-row p-5 flex-wrap ">
            <Card />
            <Card />
            <Card />
        </div>
    )
}