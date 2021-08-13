import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {Btn} from '../ButtonElements'
import {HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroHeader,
    HeroH1,
    HeroH2,
    HeroH3,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='Video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroHeader>
                    <HeroH1>Benjamin</HeroH1>
                    <HeroH2>.is()</HeroH2>
                </HeroHeader>
                <HeroP>Benjamin Goddard</HeroP>
                <HeroH3>
                    An aspiring <b>frontend developer, web-designer,</b> and <b>tech enthusiast.</b>
                </HeroH3>
                <HeroBtnWrapper>
                    <Btn to="about" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                    >
                        Jump In {hover ? <ArrowForward /> : <ArrowRight />}
                    </Btn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
