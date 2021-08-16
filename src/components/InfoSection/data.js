import Img1 from '../../images/svg-1.svg'
import Img2 from '../../images/svg-5.svg'
import Img3 from '../../images/svg-9.svg'

export const homeObj1 = {
    id: 'about',
    lightBg: false,
    lightText: false,
    lightTextDescription: true,
    topLine: 'Benjamin.about()',
    header: 'Creative, Excited, Hardworking',
    description: 'I am a young, hardworking programmer who is growing rapidly in web development skills. I have a year and 1/2+ of experience with python and Django REST framework, as well as html and css. I am currently learning the REACT.js framework (with which this website was built). I love technology, I am creative and innovative, and (a bonus tidbit), I love ultimate frisbee!',
    buttonLabel: 'Request my Resume',
    buttonLink: '/message_me',
    imgStart: false,
    img: Img1,
    alt: 'creative',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObj2 = {
    id: 'discover',
    lightBg: true,
    lightText: true,
    lightTextDescription: true,
    topLine: 'Benjamin.discover()',
    header: 'Projects, Designs, etc...',
    description: 'My most recent projects include a personal project developing an ecommerce site called SLATE, fullstack development designing and building both the UI and backend as a paid intern at TiP, and even creating "Bret" the personal voice assisstant.',
    buttonLabel: 'See my work',
    imgStart: true,
    img: Img2,
    alt: 'creative',
    dark: true,
    primary: true,
    darkText: true,
}

export const homeObj3 = {
    id: 'contact',
    lightBg: true,
    lightText: true,
    lightTextDescription: false,
    topLine: 'Benjamin.contact()',
    header: "Let's work together",
    description: 'I am excited to learn about your next project! Reach out and we can build it together.',
    buttonLabel: 'Contact me',
    buttonLink: '/message_me',
    imgStart: false,
    img: Img3,
    alt: 'creative',
    dark: true,
    primary: true,
    darkText: true,
}