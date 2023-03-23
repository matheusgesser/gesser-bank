import React, { createRef } from "react"
import styled from "styled-components"
import { Header, Hero, BrandSection, Features, Product, StartSteps, Insight, Blog, Footer } from "./components"

export default function App() {
  const insight = createRef(null)
  return (
    <>
      <Header insight={insight} />
      <Main>
        <Hero />
        <BrandSection />
        <Features />
        <Product />
        <StartSteps />
        <Insight ref={insight} />
        <Blog />
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`