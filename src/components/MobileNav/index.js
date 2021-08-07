import React from 'react'
import { MobileNavContainer,
    Icon,
    CloseIcon,
    MobileNavWrapper,
    MobileNavMenu,
    MobileNavLink,
    MobileNavBtnWrap,
    MobileNavRoute,
} from './MobileNavElements'

const MobileNav = ({ isOpen, toggle }) => {
    return (
        <MobileNavContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <MobileNavWrapper>
                <MobileNavMenu>
                    <MobileNavLink to='about' onClick={toggle}>.about( )</MobileNavLink>
                    <MobileNavLink to='discover' onClick={toggle}>.discover( )</MobileNavLink>
                    <MobileNavLink to='services' onClick={toggle}>.services( )</MobileNavLink>
                    <MobileNavLink to='contact' onClick={toggle}>.contact( )</MobileNavLink>
                </MobileNavMenu>
                <MobileNavBtnWrap>
                    <MobileNavRoute to='/message'>Message Me</MobileNavRoute>
                </MobileNavBtnWrap>
            </MobileNavWrapper>
        </MobileNavContainer>
    )
}

export default MobileNav
