import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 8rem 0;
  & > section {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 1rem;
  }
  @media (max-width:700px) {
    gap: 1rem;
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
  margin-bottom: 2rem;
  @media (max-width:700px) {
    width: 90%;
    margin-bottom: 0;
  }
`

export const Card = styled.section`
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  & img {
    transition: all .3s;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 16px;
    filter: drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.1));
  }
  & strong {
    font-weight: 800;
  }
  & p {
    width: 90%;
    text-align: center;
    font-size: 1.2rem;
  }
  &:hover img {
    transform: scale(1.05) rotate(1deg);
  }
  @media (max-width:1200px) {
    width: 20rem;
  }
  @media (max-width:700px) {
    & p {
      margin-bottom: 2rem;
    }
  }
`