import React from 'react';
import Img from '../../images/traverse.jpg';
import Img2 from '../../images/tip.jpg';
import Img3 from '../../images/slate.png';
import Img4 from '../../images/bg.jpg';
import Img5 from '../../images/indigo.jpg';
import Img6 from '../../images/ice.jpg';

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
                <ServicesCardExternal target="_blank" href="https://tip-web.herokuapp.com/">
                    <ServicesIcon src={Img2}/>
                    <ServicesH2>TiP</ServicesH2>
                    <ServicesP>I spent the last 6 months as a paid intern at TiP (Transparency in Politics) building the frontend and half of the backend of their web app with Python, Django, HTML5, and CSS.
                        My work included all frontend design and integration, animations, hover and transition effects. I was also integral to the backend. From processing data and writing user-handling logic to server-side and database integration with MySQL.
                    </ServicesP>
                </ServicesCardExternal>
                <ServicesCard to="/">
                    <ServicesIcon src={Img4}/>
                    <ServicesH2>benjamingoddard.me</ServicesH2>
                    <ServicesP>That's right, this portfolio website was made by none other than yours truly. This webpage domonstrates knowledge in React.js, 
                        web-hooks, HTML, CSS, Animations, Scroll Effects, multiple page integration, and Excellent Web-Design. From start to finish, from sketch 
                        to html frame, to deployed Application, I did it all.
                    </ServicesP>
                </ServicesCard>
                <ServicesCardExternal target="_blank" href="https://bdgcypher.github.io/ice/">
                    <ServicesIcon src={Img6}/>
                    <ServicesH2>ICE</ServicesH2>
                    <ServicesP>I created ICE as a frontend project to practice tailwindcss. Based in react.js and using KitwindUI components, I created ICE in just a few hours. Simple, yet eye-pleasing, ICE is a finance style landing page.</ServicesP>
                </ServicesCardExternal>
                <ServicesCardExternal target="_blank" href="https://bdgcypher.github.io/traverse-web/">
                    <ServicesIcon src={Img}/>
                    <ServicesH2>TRAVRSE</ServicesH2>
                    <ServicesP>Traverse is a travel-guide type website frontend that displays my expertise in creating eye-catching UI with clean-cut cards, 
                        fantastic footers, and creative content. Built with React.js, Traverse is a simple, yet elegant beginner javascript Web Project.</ServicesP>
                </ServicesCardExternal>
                <ServicesCardExternal target="_blank" href="https://bdgcypher.github.io/indigo/">
                    <ServicesIcon src={Img5}/>
                    <ServicesH2>INDIGO</ServicesH2>
                    <ServicesP>Indigo is an ecommerce based frontend web application created to familiarize myself with and demonstrate use of TailwindUI template elements and is built on top off the React.js framework.</ServicesP>
                </ServicesCardExternal>
                <ServicesCard>
                    <ServicesIcon src={Img3}/>
                    <ServicesH2>SLATE</ServicesH2>
                    <ServicesP>(Link coming soon...) SLATE was my first ever Django website. An E-commerce style site with base, user, 
                        and admin pages and amenities such as User Authentication, Account Recovery, a basic light/dark theme switcher and database quiries and search filters.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Projects
