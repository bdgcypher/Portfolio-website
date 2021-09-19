import React from 'react'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'

import { 
    ServicesContainer,
    ServicesWrapper,
    ServicesHeader,
    ServicesH1,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesHeader>Benjamin.services( )</ServicesHeader>
            <ServicesH1>What can I do for You?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>UI/UX Design</ServicesH2>
                    <ServicesP>I design User Interfaces that are easy to use and fun to look at.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Frontend Development</ServicesH2>
                    <ServicesP>I build out appealing and beautiful frontends following my own designs or one of yours.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Backend Development</ServicesH2>
                    <ServicesP>I write backend code to filter and handle your data. (currently only using python, django, and mySQL, but learning javascript)</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
