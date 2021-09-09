import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div`
    background: #E22866;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 3;

    @media screen and (max-width: 768px) {
        height: 700px;
    }

    /* add :before styles */
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
    filter: brightness(25%);
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`;

export const HeroHeader = styled.div`
    z-index: 4;
    max-width: 1200px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 36px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;

export const HeroH2 = styled.h2`
color: #E22866;
font-size: 40px;
font-weight: 400;
text-align: left;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 23px;
}
`;

export const HeroH3 = styled.p`
    margin-top: 30px;
    color: #D7D6D7;
    font-size: 48px;
    font-weight: 300;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 28px;
        max-width: 400px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 28px;
        max-width: 400px;
    }
`;

export const HeroP = styled.p`
    margin-top: 0px;
    color: #E22866;
    font-size: 16px;
    text-align: left;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        max-width: 400px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 12px;
        max-width: 250px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    transition: 0.2s ease-in-out;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
    transition: 0.2s ease-in-out;
`


