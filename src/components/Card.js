import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
const Wrapper = styled.div`
    ${tw`
        h-56
        bg-gray-100
        w-96
        md:w-136
        md:h-72
        relative
        px-5
        text-center
        mb-5
        flex
        flex-col
        gap-6
        md:gap-8
    `}
`

const Avatar = tw.img`
    rounded-full
    w-16
    h-16
    md:w-20
    md:h-20
    absolute
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    z-30
`

const UserName = tw.h1`
    text-secondary
    text-lg
    md:text-xl
    mt-14
    md:mt-20
    font-semibold
`

const Comment = tw.p`
    text-grayBlue
    md:text-base
    lg:text-lg
    text-sm
    w-full
    
`

const Card = ({item}) => {
    const {image,name,comment} = item
    return (
        <Wrapper>
            <Avatar src={image} alt="avatar"/>
            <UserName>{name}</UserName>
            <Comment>{comment}</Comment>
        </Wrapper>
    )
}

export default Card
