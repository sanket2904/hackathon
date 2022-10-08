
import Hero from "../components/hero"
import Hero2 from "../components/hero2"
import Head from "next/head"
import Script from "next/script"
import svg from "../public/engineer.svg"
export default function Home() { 
  return (
    <>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      <Head>
        <title>Home</title>
      </Head>
      
      <Hero imageLink="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" headerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio." />
      <Hero2 imageLink={svg} headerText="Lorem ipsum dolor sit amet, consectetur" description="Built on top of the world’s most popular open source database and compatible with all major frameworks and languages." />
    </>
  )  
}