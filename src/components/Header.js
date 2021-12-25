import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import logo from "../images/logo.svg"
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from './responsive'
import styles from "./menuStyles"

const Wrapper = tw.div`
    h-20
    flex
    justify-between
    items-center
`

const Logo = tw.img`
    w-56
    w-44
    z-50
`

const Nav = tw.div`
    hidden
    md:flex
    gap-2
    lg:gap-5
    xl:gap-7
    z-20
`

const NavLink = tw.p`
    text-secondary
    cursor-pointer
    hover:animate-bounce
    transition-all
    duration-500
    z-20
`

const Button = styled.button`
    ${tw`
        hidden
        lg:block
        px-5
        py-2
        lg:py-3
        lg:px-8
        text-white
        bg-primary
        rounded-3xl
        font-semibold
        hover:text-secondary
        z-20
    `}
    -webkit-box-shadow: 0px 12px 15px -7px hsl(12, 88%, 59%); 
    box-shadow: 0px 12px 15px -7px hsl(12, 88%, 59%);
`

const Header = () => {
    const isMobileAndTablet = useMediaQuery({maxWidth: deviceSize.tablet})
    const navItemsList = () => {
        return (
            <Nav>
                <NavLink>Pricing</NavLink>
                <NavLink>Product</NavLink>
                <NavLink>About us</NavLink>
                <NavLink>Careers</NavLink>
                <NavLink>Community</NavLink>
            </Nav>
        )
    }
    return (
        <Wrapper>
            <Logo alt="logo" src={logo} />
                {isMobileAndTablet ? <Menu right styles={styles}>{navItemsList()}</Menu> : navItemsList()}

            <Button>Get Started</Button>

        </Wrapper>
    )
}

export default Header
