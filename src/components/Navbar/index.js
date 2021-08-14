import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Hamburger,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='top'>BG</NavLogo>
                    <Hamburger onClick={toggle}>
                        <FaBars/>
                    </Hamburger>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">.about( )</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">.discover( )</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">.services( )</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">.contact( )</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/message_me'>Message Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
