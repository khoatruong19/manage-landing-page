import { useRef, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import { gsap } from "gsap";

const HeaderContainer = styled.div`
  ${tw`
    h-screen
    xl:h-auto
    px-10
    xl:py-12
    xl:px-48
    bg-white
    z-20
    relative
    overflow-hidden
  `}
`

const Square = tw.div`
  w-10
  h-10
  md:w-20
  md:h-20
  bg-primary
  z-0
  opacity-75
  absolute
`


const Circle = tw.div`
  w-8
  h-8
  md:w-16
  md:h-16
  rounded-full
  bg-secondary
  z-0
  opacity-75
  absolute
`

const FeaturesContainer = styled.div`
  ${tw`
    h-2/3
    xl:h-auto
    px-10
    xl:py-12
    xl:px-48
    bg-white
    relative
    overflow-hidden

  `}
`

const CommentContainer = styled.div`
  ${tw`
    h-1/2
    xl:h-auto
    px-10
    py-10
    xl:py-12
    xl:px-48
    bg-white
    overflow-hidden

  `}
`

function App() {
  const square1Ref = useRef()
  const square2Ref = useRef()
  const circle1Ref = useRef()
  const circle2Ref = useRef()

  useEffect(() => {
    gsap.fromTo(square1Ref.current, { x:-100, y:0 },{x: window.innerWidth, y:-window.innerHeight, duration:20, yolo:true, repeat:-1});
    gsap.fromTo(square2Ref.current, { x:-100, y:0 },{x: window.innerWidth, y:-800, duration:20, yolo:true, repeat:-1},"<");
    gsap.fromTo(circle1Ref.current, { x:window.innerWidth, y:0},{x: -250, y:-950, duration:15, yolo:true, repeat:-1},"<");
    gsap.fromTo(circle2Ref.current, { x:-200, y:-650},{x:window.innerWidth,  y:100, duration:15, yolo:true, repeat:-1},"<");

  });
  
  return (
    <>
    <HeaderContainer>
      <Header/>
      <Hero/>
      <Square ref={square1Ref}/>
      <Circle ref={circle1Ref}/>
    </HeaderContainer>
    <FeaturesContainer >
      <Features/>
      <Square ref={square2Ref}/>
      <Circle ref={circle2Ref}/>
    </FeaturesContainer>
    <CommentContainer >
      <Comment/>
    </CommentContainer>
    <Footer/>
    </>
  );
}

export default App;
