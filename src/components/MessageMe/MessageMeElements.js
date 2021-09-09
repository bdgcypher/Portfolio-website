import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
    padding-bottom: 50px;
    z-index: 3;
    overflow: hidden;
    background: #110308;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(LinkR)`
    margin-top: 32px;
    margin-bottom: 14px;
    margin-left: 32px;
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

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 3;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width:400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #E22866;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #110308;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 1px solid #E22866;
    border-radius: 5px;

    &:hover {
        transition: all 0.1s;
        border: 2px solid #E22866;
    }
`;

export const FormButton = styled.button`
    background: #E22866;
    padding: 16px 0;
    border: none;
    border-radius: 50px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid #E22866;
        color: #E22866;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;
