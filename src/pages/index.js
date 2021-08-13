import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2, homeObj3, } from '../components/InfoSection/data';
import Services from '../components/Services';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <MobileNav isOpen={isOpen} toggle={toggle} />
            <Hero />
            <InfoSection {...homeObj1}/>
            <InfoSection {...homeObj2}/>
            <Services />
            <InfoSection {...homeObj3}/>
        </>
    )
}

export default Home;
