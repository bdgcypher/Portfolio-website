import React from 'react'
import { FaInstagram, FaFacebook, FaGithub, FaArrowCircleUp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { 
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterItemTitle,
    FooterLinkS,
    FooterLinkR,
    FooterA,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebesiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterItemTitle>Learn More</FooterItemTitle>
                            <FooterLinkR to="/message_me">Request Resume</FooterLinkR>
                            <FooterLinkS to="/projects">Projects</FooterLinkS>
                            <FooterLinkS to="about">My Story</FooterLinkS>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterItemTitle>Contact Me</FooterItemTitle>
                            <FooterLinkR to="/message_me">Feedback</FooterLinkR>
                            <FooterLinkR to="/message_me">Email</FooterLinkR>
                            <FooterLinkR to="/message_me">Contact</FooterLinkR>
                            <FooterLinkS to="top" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Back to Top <FaArrowCircleUp/></FooterLinkS>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterItemTitle>Random</FooterItemTitle>
                            <FooterLinkS to="/">Hello</FooterLinkS>
                            <FooterLinkS to="/">Hola</FooterLinkS>
                            <FooterLinkS to="/">Nazdar</FooterLinkS>
                            <FooterLinkS to="/">Dobry Den</FooterLinkS>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterItemTitle>Social Media</FooterItemTitle>
                            <FooterA href="//www.instagram.com/ben_jammin1967/" target="_blank" aria-label="Instagram">Instagram</FooterA>
                            <FooterA href="//www.facebook.com/benjamin.goddard.90" target="_blank" aria-label="Facebook">Facebook</FooterA>
                            <FooterA href="//www.github.com/bdgcypher" target="_blank" aria-label="Github">Github</FooterA>
                            <FooterA href="mailto:bdgcypher@gmail.com" target="_blank" aria-label="bdgcypher@gmail.com">Email</FooterA>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">BG</SocialLogo>
                        <WebesiteRights>benjamingoddard © {new Date().getFullYear()} All rights reserved.</WebesiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.instagram.com/ben_jammin1967/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.facebook.com/benjamin.goddard.90" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/bdgcypher" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="mailto:bdgcypher@gmail.com" target="_blank" aria-label="bdgcypher@gmail.com">
                                <HiOutlineMail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
