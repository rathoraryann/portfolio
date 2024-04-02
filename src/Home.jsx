import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";
import Services from "./Services"
import About from "./About"
import Contact from "./Contact";

function Home(){
    
    const {updateHomePage} = useGlobalContext()

    useEffect(()=>{
        updateHomePage()
    }, [])

    return(
        <>
        <HeroSection />
        <Services />
        {/* <About /> */}
        <Contact />
        </>
    )
}

export default Home;