import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import intro from "../images/intro.svg"
const Container = tw.div`
    flex
    flex-col-reverse
    xl:flex-row
    items-center
    justify-around
    xl:justify-between
    h-6/7
    pb-8
    md:pb-16
    xl:pb-10
`
const InfoContainer = tw.div`
    text-center
    xl:text-left
    w-full
    md:w-1/2
    flex
    flex-col
    justify-center
    px-1
    md:px-0
    gap-3
    md:gap-5
    -mt-16
    md:-mt-10
    z-20

`

const HeadingTitle = tw.h1`
    text-secondary
    text-3xl
    lg:text-5xl
    xl:text-6xl
    font-semibold
    z-20

`

const Desc = tw.div`
    text-grayBlue
    md:text-base
    lg:text-lg
    text-sm
    w-full
    xl:w-3/5
    z-20

`

const Button = styled.button`
${tw`
        m-auto
        my-5
        xl:m-0
        text-xs
        md:text-base
        w-28
        p-5
        px-4
        py-3
        lg:py-3
        lg:px-8
        text-white
        bg-primary
        rounded-3xl
        font-semibold
        lg:w-40
        md:w-36
        hover:text-secondary
        z-20

    `}
    -webkit-box-shadow: 0px 12px 15px -7px hsl(12, 88%, 59%); 
    box-shadow: 0px 12px 15px -7px hsl(12, 88%, 59%);
`

const ImgContainer = tw.div`
    w-full
    h-1/2
    xl:h-full
    md:w-2/3
    flex
    items-end
    -mt-20
    md:mt-0
    z-20

`

const Image = tw.img`
    w-full
    z-20

`

const Hero = () => {
    return (
        <Container>
            <InfoContainer className=' h-1'>
                <HeadingTitle>  Bring everyone together to build better products.</HeadingTitle>
                <Desc>Manage makes it simple for software teams to plan day-to-day 
                tasks while keeping the larger team goals in view.</Desc>
                <Button>Get Started</Button>
            </InfoContainer>
            <ImgContainer>
                <Image alt="intro" src={intro}/>
            </ImgContainer>

        </Container>
    )
}

export default Hero
