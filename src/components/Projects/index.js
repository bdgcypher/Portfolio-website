import React from 'react';
import Img from '../../images/traverse.jpg';
import Img2 from '../../images/tip.jpg';
import Img3 from '../../images/slate.png';
import Img4 from '../../images/bg.jpg';

import { 
    ServicesContainer,
    ServicesWrapper,
    ServicesHeader,
    ServicesH1,
    ServicesCard,
    ServicesCardExternal,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    Icon,
} from './ProjectElements';

const Projects = () => {
    return (
        <ServicesContainer id="top">
            <Icon to="/" id="top">BG</Icon>
            <ServicesHeader>Benjamin.projects( )</ServicesHeader>
            <ServicesH1>See what I can do</ServicesH1>
            <ServicesWrapper>
                <ServicesCardExternal target="_blank" href="https://bdgcypher.github.io/traverse-web/">
                    <ServicesIcon src={Img}/>
                    <ServicesH2>TRVSE</ServicesH2>
                    <ServicesP>Traverse is a travel-guide type website frontend that displays my expertise in creating eye-catching UI with clean-cut cards, 
                        fantastic footers, and creative content. Built with React.js, Traverse is a simple, yet elegant begginer javascript Web Project.</ServicesP>
                </ServicesCardExternal>
                <ServicesCardExternal target="_blank" href="https://tip-web.herokuapp.com/">
                    <ServicesIcon src={Img2}/>
                    <ServicesH2>TiP</ServicesH2>
                    <ServicesP>I spent the last 6 months as a paid intern at TiP (Transparency in Politics) building the frontend and half of the backend of their web app with Python, Django, HTML5, and CSS</ServicesP>
                </ServicesCardExternal>
                <ServicesCard>
                    <ServicesIcon src={Img3}/>
                    <ServicesH2>SLATE</ServicesH2>
                    <ServicesP>(Link coming soon...) SLATE was my first ever Django website. An E-commerce style site with base, user, 
                        and admin pages and amenities such as User Authentication, Account Recovery, a basic light/dark theme switcher and database quiries and search filters.</ServicesP>
                </ServicesCard>
                <ServicesCard to="/">
                    <ServicesIcon src={Img4}/>
                    <ServicesH2>benjamingoddard.me</ServicesH2>
                    <ServicesP>That's right, this portfolio website was made by none other than yours truly. This webpage domonstrates knowledge in React.js, 
                        web-hooks, HTML, CSS, Animations, Scroll Effects, multiple page integration, and Excellent Web-Design. From start to finish, from sketch 
                        to html frame, to deployed Application, I did it all.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Projects
