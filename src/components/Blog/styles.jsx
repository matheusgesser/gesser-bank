import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 6rem 0;
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
  margin-bottom: 3rem;
  @media (max-width:700px) {
    width: 90%;
    font-size: 2.5rem;
  }
`

export const Card = styled.section`
  width: 22vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  filter: drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.1));
  cursor: pointer;
  transition: all 0.3s;
  & section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    background: #fff;
    border-radius: 0 0 30px 30px;
  }
  & img {
    width: 100%;
  }
  & strong {
    font-weight: 800;
  }
  & h4 {
    color: #F7402E;
    font-size: 0.9rem;
  }
  & p {
    width: 90%;
    font-size: 1.2rem;
  }
  &:hover {
    transform: translateY(-8px);
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