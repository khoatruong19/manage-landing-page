import React from 'react'
import tw from 'twin.macro'
import logo from "../images/lightLogo.svg"
import FacebookIcon from "../images/icon-facebook.svg"
import InstagramIcon from "../images/icon-instagram.svg"
import PinterestIcon from "../images/icon-pinterest.svg"
import TwitterIcon from "../images/icon-twitter.svg"
import YoutubeIcon from "../images/icon-youtube.svg"


const Wrapper = tw.div`
    flex
    flex-col
    w-full
    h-1/2
    relative
`

const SloganContainer = tw.div`
    px-10
    py-14
    xl:py-20
    xl:px-48
    w-full
    flex
    flex-col
    gap-10
    xl:flex-row
    items-center
    justify-between
    bg-primary
    h-2/5
`

const SloganTitle = tw.h1`
    text-center
    text-white
    text-4xl
    font-semibold
`

const Button = tw.button`
    m-auto
    xl:m-0
    text-xs
    md:text-base
    w-28
    p-5
    px-4
    py-3
    lg:py-3
    lg:px-8
    text-primary
    bg-white
    rounded-3xl
    font-semibold
    lg:w-40
    md:w-36
`

const Logo = tw.img`
    
    w-56
    w-44
`

const IconContainer = tw.div`
    flex
    items-center
    gap-9
    md:gap-10
    lg:gap-2
    xl:gap-5
`

const IconImage = tw.img`
    w-8
    h-8
    xl:w-5
    xl:h-5
    lg:w-4
    lg:h-4
    md:w-12
    md:h-12
    cursor-pointer
`

const ContactContainer = tw.div`
    flex
    flex-col-reverse
    lg:flex-col
    items-center
    xl:gap-20
    gap-10
    mb-8
    lg:mb-0
`

const Nav = tw.div`
    flex
    w-72
    md:w-96
    justify-between
`

const NavLinks = tw.div`
    flex
    flex-col
    gap-6
    xl:gap-10
`

const NavLink = tw.p`
    text-white
    text-base
    md:text-lg
    cursor-pointer
    hover:text-gray-300
`

const Form = tw.div`
    flex
    items-center
    gap-2
    lg:-mt-48
`

const FormInput = tw.input`
    text-sm
    bg-white
    md:text-base
    border-none
    outline-none
    rounded-3xl
    h-10
    md:h-12
    w-52
    md:w-96
    lg:w-72
    px-6
`

const FormButton = tw.button`
    text-base
    px-3
    w-20
    md:w-24
    py-2
    md:py-3
    rounded-3xl
    bg-primary
    text-white
    hover:text-secondary
    font-semibold
`

const CopyRightText = tw.p`
    w-full
    text-center
    lg:w-auto
    text-sm
    text-gray-100
    absolute
    left-1/2
    -translate-x-1/2
    bottom-4
    lg:bottom-36
    xl:translate-x-96
    lg:translate-x-40
`

const InfoContainer = tw.div`
    flex
    flex-col-reverse
    lg:flex-row
    py-16
    px-5
    lg:py-16
    lg:px-20
    xl:py-20
    xl:px-44
    w-full
    h-3/5
    bg-darkBlue
    gap-20
    justify-center
    items-center
    lg:items-baseline
    lg:justify-between
`

const Footer = () => {
    return (
        <Wrapper>
            <SloganContainer>
                <SloganTitle>Simplify how your team works today.</SloganTitle>
                <Button>Get Started</Button>
            </SloganContainer>
            <InfoContainer>
                <ContactContainer>
                    <Logo src={logo} alt="logo"/>
                    <IconContainer>
                        <IconImage src={FacebookIcon} alt="icon"/>
                        <IconImage src={YoutubeIcon} alt="icon"/>
                        <IconImage src={TwitterIcon} alt="icon"/>
                        <IconImage src={PinterestIcon} alt="icon"/>
                        <IconImage src={InstagramIcon} alt="icon"/>
                    </IconContainer>
                </ContactContainer>
                <Nav>
                    <NavLinks>
                        <NavLink>Home</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>Products</NavLink>
                        <NavLink>About us</NavLink>
                    </NavLinks>
                    <NavLinks>
                        <NavLink>Careers</NavLink>
                        <NavLink>Community</NavLink>
                        <NavLink>Privacy Policy</NavLink>
                    </NavLinks>
                </Nav>
                <Form>
                    <FormInput type="text" placeholder='Updates in your inbox...'/>
                    <FormButton>Go</FormButton>
                </Form>
                <CopyRightText>@Copyright 2021. All Rights Reserved</CopyRightText>
            </InfoContainer>
        </Wrapper>
    )
}

export default Footer
