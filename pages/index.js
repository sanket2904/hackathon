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
      
      <Hero imageLink="https://cdn.uploadly.dev/63421e459666525789e0c179Aboutsection.png" headerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio." />
      <Hero2 imageLink={svg} headerText="Lorem ipsum dolor sit amet, consectetur" description="Built on top of the world’s most popular open source database and compatible with all major frameworks and languages." />
      <div className="flex justify-center  w-full p-4 ">
        <Testamonials />
      </div>
     
    </>
  )  
}
