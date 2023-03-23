import React from "react"
import styled from "styled-components"
import { Header, Hero, BrandSection, Features, Product, StartSteps, Insight, Blog, Footer } from "./components"

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