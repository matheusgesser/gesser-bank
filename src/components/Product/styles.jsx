import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6rem 2rem 8rem 2rem;
  background: #000;
  @media (max-width:1200px) {
    flex-direction: column;
    gap: 3rem;
    padding: 6rem 2rem 4rem 2rem;
  }
`

export const VisualContent = styled.section`
  position: relative;
  margin-right: 6rem;
  padding: 0 8rem;
  @media (max-width:1200px) {
    padding: 0;
    margin: 0;
  }
`
export const BackImage = styled.img`
  width: 100%;
  transition: all 300ms;
  &:hover {
    transform: translateY(-8px);
  }
`
export const Card = styled.section`
  position: absolute;
  bottom: -50px;
  right: -60px;
  width: 25rem;
  background: #fff;
  border-radius: 30px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 300ms;
    &:hover {
      background: #FFFFFFDD;
    }
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0,1));
  & > section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & section > svg {
    box-sizing: content-box;
    padding: 1rem;
    border-radius: 50%;
    color: #fff;
    font-size: 1.5rem;
    transition: all 300ms;
  }
  & svg:hover {
    transform: scale(1.15);
  }
  & section:last-of-type > svg {
    color: #000;
  }
  & > section > section {
    margin-right: auto;
  }
  & strong {
    font-weight: 800;
  }
  & p::first-letter {
    font-weight: 600;
    color: red;
  }
  & > section:nth-child(2) p::first-letter {
    color: green;
  }
  & span {
    opacity: 0.8;
  }
  & span svg {
    font-size: 1.2rem;
  }
  @media (max-width:1200px) {
    display: none;
  }
`
export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
  & span {
    font-weight: bold;
    background: #F4B52B;
    border-radius: 5px;
    color: #000;
    padding: .6rem;
    display: inline-block;
    width: fit-content;
    margin-bottom: 2rem;
    transition: all 300ms;
    &:hover {
      letter-spacing: 2px;
    }
  }
  & h2 {
    font-size: 3rem;
    line-height: 65px;
    font-weight: 600;
  }
  & > p {
    margin-bottom: 4rem;
  }
  & > section {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: center;
  }
  & > section svg {
    font-size: 2.5rem;
    transition: all 300ms;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  }
  & > section > section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & h3 {
    font-weight: 800;
    font-size: 1.3rem;
  }
  @media (max-width:400px) {
    & h2,
    & p {
      word-break: break-all;
    }
  }
`