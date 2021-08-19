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
`;

export const ServicesHeader = styled.p`
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