import React from "react"
import styled from "styled-components"
import { Header, Hero, BrandSection, Features, Product, StartSteps, Insight, Blog } from "./components"

export default function App() {
  return (
    <>
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
    </>
  )
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`