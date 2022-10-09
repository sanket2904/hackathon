import Hero from "../components/hero";
import Header from "../components/header";
import Image from "next/image";
import Hero2 from "../components/hero2"
import Head from "next/head"
import Script from "next/script"
import svg from "../public/engineer.svg"
import style from "../styles/Home.module.css"
import Hero3 from "../components/hero3"
import blob from "../public/blob.svg"
import Testamonials from "../components/testamonials"
import fav from '../public/favicon.ico'
export default function Home() { 
  return (
    <>
        
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <Header/>
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href={fav} />
      </Head>
      
      <Hero imageLink="https://cdn.uploadly.dev/63422af09666525789e0c1faIMG_0595.PNG" headerText="GENERATION CONNECTION FOR YOUR CAREER" description="Is finding your way into the professional world too overwhelming? What if there are friends with lifelong experiences in industries here to provide you with one-on-one guidance?

Meet experienced mentors and narrow the generational gap while receiving invaluable career advice through Generation Connection!
" />
      <Hero2 imageLink={svg} headerText="Start connecting today to learn & share" description="Retirees and students, sign in now through our portal to connect across generations while learning & sharing about the professional world." />
      <div className="flex justify-center  w-full p-4 py-16 ">
        <Testamonials />
      </div>
     
    </>
  )  
}
