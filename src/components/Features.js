import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Wrapper = tw.div`
    w-full
    flex
    flex-col
    gap-10
    md:gap-16
    xl:flex-row
    xl:justify-between
    xl:gap-0
    xl:h-auto

`
const Left = tw.div`
    flex
    flex-col
    gap-3
    xl:gap-5
    xl:w-1/2
    md:text-left
    w-full
    m-auto
    md:m-0
    z-20
`
const Right = tw.div`
    flex
    flex-col
    gap-10
    w-full
    xl:w-2/5
    z-20
`

const LeftHeadingTitle = tw.h1`
    w-80
    md:w-full
    text-secondary
    text-xl
    font-semibold
    md:text-3xl
    xl:text-5xl
    text-center
    md:text-left
    z-20
`

const LeftDesc = tw.div`
    text-grayBlue
    md:text-base
    lg:text-lg
    text-sm
    xl:w-3/5
    w-80
    md:w-full
    text-center
    md:text-left
    z-20
`

const FeatureContainer = tw.div`
    flex
    flex-col
    gap-3
    z-20
`

const RightDesc = tw.div`
    text-grayBlue
    md:text-base
    lg:text-lg
    text-sm
    w-full
    z-20
`

const FeatureHeadingContainer = styled.div`
    ${tw`
        xl:relative
        flex
        items-center
        z-20
    `},
`

const FeatureHeadingTitle = styled.div`
    ${tw`
        text-secondary
        text-sm
        md:text-lg
        lg:text-2xl
        font-semibold
        bg-paleRed
        xl:bg-transparent
        px-3
        w-full
        rounded-3xl
        -ml-2
        lg:ml-0
        z-10
        pt-1
        h-7
        md:h-8
        lg:h-9
        xl:-mt-3
        xl:-ml-3
        z-20
    `},
`

const HeadingNumber = tw.div`
    w-14
    h-7
    pt-1
    md:w-20
    md:h-8
    lg:h-10
    rounded-3xl
    bg-primary
    text-white
    xl:absolute
    text-center
    md:text-lg
    lg:text-xl
    text-sm
    xl:-top-3
    xl:-left-28
    z-20
`

const Features = () => {
    return (
        <Wrapper className=' '>
            <Left>
                <LeftHeadingTitle>What’s different about Manage?</LeftHeadingTitle>
                <LeftDesc>Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.</LeftDesc>
            </Left>
            <Right>
                <FeatureContainer>
                    <FeatureHeadingContainer>
                        <HeadingNumber>01</HeadingNumber>
                        <FeatureHeadingTitle>Track company-wide progress</FeatureHeadingTitle>
                    </FeatureHeadingContainer>
                    <RightDesc>
                        See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.</RightDesc>
                </FeatureContainer>
                <FeatureContainer>
                    <FeatureHeadingContainer>
                        <HeadingNumber>02</HeadingNumber>
                        <FeatureHeadingTitle>Advanced built-in reports</FeatureHeadingTitle>
                    </FeatureHeadingContainer>
                    <RightDesc>
                        Set internal delivery estimates and track progress toward company 
                        goals. Our customisable dashboard helps you build out the reports 
                        you need to keep key stakeholders informed.</RightDesc>
                </FeatureContainer>
                <FeatureContainer>
                    <FeatureHeadingContainer>
                        <HeadingNumber>03</HeadingNumber>
                        <FeatureHeadingTitle>Everything you need in one place</FeatureHeadingTitle>
                    </FeatureHeadingContainer>
                    <RightDesc>
                        Stop jumping from one service to another to communicate, store files, 
                        track tasks and share documents. Manage offers an all-in-one team 
                        productivity solution.</RightDesc>
                </FeatureContainer>
            </Right>
        </Wrapper>
    )
}

export default Features
