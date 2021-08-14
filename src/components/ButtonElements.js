import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const BtnS = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#E22866' : '#FFFFFF')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#FFFFFF' : '#E22866')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#FFFFFF' : '#E22866')};
        color: ${({dark}) => (dark ? '#E22866' : '#FFFFFF')};
    }
`

export const BtnR = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#E22866' : '#FFFFFF')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#FFFFFF' : '#E22866')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#FFFFFF' : '#E22866')};
        color: ${({dark}) => (dark ? '#E22866' : '#FFFFFF')};
    }
`