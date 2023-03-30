import React, { useEffect } from "react"
import styled from "styled-components"
import { Header, Hero, BrandSection, Features, Product, StartSteps, Insight, Blog, Footer } from "./components"
import { useAnimations } from './hooks/useAnimations'
import gsap from "gsap"
import { BsChevronDown } from 'react-icons/bs'

export default function App() {

  useEffect(() => {
    const ctx = gsap.context(() => {

      useAnimations()

    })
    return () => {
      ctx.revert()
    };
  })


  return (
    <>
      <ScrollDownIcon>
        <BsChevronDown />
      </ScrollDownIcon>
      <Header />
      <Main>
        <Hero />
        <BrandSection />
        <Features />
        <Product />
        <StartSteps />
        <Insight />
        <Blog />
      </Main>
      <Footer />
    </>
  )
}

const ScrollDownIcon = styled.aside`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  color: #111;
  pointer-events: none;
  user-select: none;
  cursor: default;
  z-index: 5;
  & svg {
    font-size: 4rem;
    cursor: default;
    animation: jump infinite ease-out 1s alternate-reverse;
  }
  @keyframes jump {
    from {
      transform: translate(-50%, 0);
    }
    to {
      transform: translate(-50%, -30%);
    }
  }
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`