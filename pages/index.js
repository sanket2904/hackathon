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
export default function Home() { 
  return (
    <>
        
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <Header/>
      <Head>
        <title>Home</title>
      </Head>
      
      <Hero imageLink="https://cdn.uploadly.dev/63421e459666525789e0c179Aboutsection.png" headerText="GENERATION CONNECTION FOR YOUR CAREER" description="Is finding your way into the professional world too overwhelming? What if there are friends with lifelong experiences in industries here to provide you with one-on-one guidance?

Meet experienced mentors and narrow the generational gap while receiving invaluable career advice through Generation Connection!
" />
      <Hero2 imageLink={svg} headerText="Lorem ipsum dolor sit amet, consectetur" description="Built on top of the world’s most popular open source database and compatible with all major frameworks and languages." />
      <div className="flex justify-center  w-full p-4 ">
        <Testamonials />
      </div>
     
    </>
  )  
}
