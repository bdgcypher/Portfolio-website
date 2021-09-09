import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #110308;
    padding: 50px 0 50px 0;

    @media screen and (max-width: 1000px) {
        padding: 20px 0 20px 0;
    }

    @media screen and (max-width 784px) {
        padding: 10px 0 10px 0;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export const ServicesCard = styled(Link)`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 600px;
    width: 500px;
    text-decoration: none;
    color: #000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    z-index: 3;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 784px) {
        height: 500px;
        width: 250px;
    }
`;

export const ServicesCardExternal = styled.a`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 600px;
    width: 500px;
    text-decoration: none;
    color: #000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    z-index: 3;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 784px) {
        height: 500px;
        width: 250px;
    }
`;

export const ServicesIcon = styled.img`
    height: auto;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    z-index: 3;
`;

export const ServicesHeader = styled.p`
    margin-top: 50px;
    font-size: 16px;
    color: #E22866;
`;

export const ServicesH1 = styled.h1`
    font-size: 48px;
    color: #fff;
    line-height: 1.1;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 64px;

    @media screen and (max-width: 784px) {
        font-size: 26px;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin: 10px;
`;

export const Icon = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 32px;
    margin-bottom: 14px;
    margin-left: 32px;
    float: left;
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 1.8rem;
    z-index: 3;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;