import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from './responsive'
import Card from "./Card"
import ava1 from "../images/avatar-ali.png"
import ava2 from "../images/avatar-anisha.png"
import ava3 from "../images/avatar-richard.png"
import ava4 from "../images/avatar-shanai.png"


const data = [
    {name:"Anisha Li",comment: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”", image: ava1},
    {name:"Ali Bravo",comment: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”", image: ava2},
    {name:"Richard Watts",comment: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”", image: ava3},
    {name:"Shanai Gough",comment: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”", image: ava4},
    
]

const Wrapper = tw.div`
    flex
    flex-col
    items-center
    lg:gap-10
`

const HeadingTitle = tw.h1`
    text-secondary
    text-xl
    font-semibold
    md:text-3xl
    xl:text-5xl
    mb-8
`

const Cards = styled.div`
    ${tw`
        py-10
        flex
        flex-col
        xl:flex-row
        gap-10
        relative
    `}
`

const RightArrowImage = tw.img`
    hidden
    md:block
    absolute
    top-1/2
    -right-20
    lg:-right-32
    -translate-y-1/2
    cursor-pointer
    hover:opacity-70
    transition-all
    duration-300
    ease-in
`

const LeftArrowImage = tw.img`
    hidden
    md:block    
    absolute
    top-1/2
    -left-20
    lg:-left-32
    -translate-y-1/2
    cursor-pointer
    scale-x-180
    hover:opacity-70
    transition-all
    duration-300
    ease-in
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
        -mt-5
        hover:text-secondary
    `}
    -webkit-box-shadow: 0px 12px 15px -7px hsl(12, 88%, 59%); 
    box-shadow: 0px 12px 15px -7px hsl(12, 88%, 59%);
`

const ShowMoreBtn = tw.div`
    absolute
    w-10
    text-center
    py-1
    bg-gray-200
    text-darkBlue
    text-xs
    bottom-5
    left-1/2
    -translate-x-1/2
    -translate-y-3/4
    rounded-lg
`
const Comment = () => {
    const [index, setIndex] = useState(0)
    const [item, setItem] = useState(data[0])

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
    useEffect(() => {
        setItem(data[index])
    }, [index])  

    const increaseIndex = () => {
        if(index + 1 > data.length - 1) setIndex(0)
        else setIndex(index+ 1)
    }

    const decreaseIndex = () => {
        if(index - 1 < 0) setIndex(data.length -1)
        else setIndex(index- 1)
    }
    return (
        <Wrapper>
            <HeadingTitle>What they’ve said</HeadingTitle>
            <Cards>
                <Card item={item} key ={index} />
                <RightArrowImage src="https://img.icons8.com/office/80/000000/arrow.png" onClick={() => increaseIndex()} alt="arrow"/> 
                <LeftArrowImage src="https://img.icons8.com/office/80/000000/arrow.png" onClick={() => decreaseIndex()} alt="arrow"/> 
                {isMobile && <ShowMoreBtn onClick={() => increaseIndex()}>Next</ShowMoreBtn>}
            </Cards>
            <Button >Get Started</Button>
        </Wrapper>
    )
}

export default Comment
