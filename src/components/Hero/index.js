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
                    <HeroH1>BenjaminGoddard</HeroH1>
                    <HeroH2>.is()</HeroH2>
                </HeroHeader>
                <HeroP>
                    An aspiring frontend developer, web-designer, and tech enthusiast.
                </HeroP>
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
