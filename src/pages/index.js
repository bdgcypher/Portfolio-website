import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Hero from '../components/Hero';

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
        </>
    )
}

export default Home
