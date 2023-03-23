import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 4rem 0;
  & h4 {
    font-size: .9rem;
    opacity: 0.9;
  }
  & section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 2rem;
    row-gap: 1rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    @media (max-width:800px) {
      width: 90%;
    }
  }
`

export const Title = styled.h1`
  width: 60%;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width:700px) {
    width: 90%;
    font-size: 2.5rem;
  }
`

export const Description = styled.p`
  width: 50vw;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width:700px) {
    width: 90%;
    word-break: break-all;
    text-overflow: ellipsis;
  }
`

export const Card = styled.section`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  & svg {
    font-size: 2.5rem;
  }
  & strong {
    font-weight: 800;
  }
  & p {
    font-size: 1.2rem;
  }
`