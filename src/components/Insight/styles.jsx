import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 12rem;
  @media (max-width:1200px) {
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 2rem;
  }
`

export const VisualContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  position: relative;
  @media (max-width:700px) {
    width: 100%;
    margin: 0;
  }
`

export const BackImage = styled.img`
  width: 80%;
  filter: drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.3));
  @media (max-width:700px) {
    width: 100%;
    padding: 0;
  }
`

export const Comment = styled.aside`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: absolute;
  background: #fff;
  padding: 0.5rem;
  padding-right: 1.5rem;
  border-radius: 166px;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1));

  & img {
    width: 3rem;
    border-radius: 50%;
  }
  & section {
    display: flex;
    flex-direction: column;
  }
  & strong {
    font-weight: 600;
  }
  & p {
    opacity: 0.8;
  }
  @media (max-width:700px) {
    display: none;
  }
`

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  & span {
    font-weight: bold;
    background: #F4B52B;
    border-radius: 5px;
    color: #000;
    padding: .6rem;
    display: inline-block;
    width: fit-content;
    margin-bottom: 2rem;
  }
  & h2 {
    font-size: 3rem;
    line-height: 65px;
    font-weight: 600;
  }
  & > p {
    margin-bottom: 4rem;
    word-break: break-all;
  }
  & > section {
    display: inline-flex;
    width: 100%;
    align-items: center;
    gap: 4rem;
    margin: 2rem auto;
    align-items: center;
  }
  & > section svg {
    font-size: 2.5rem;
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
  & > section:first-of-type section:first-child h3::after {
    content: '%';
    color: #ff0000;
  }
  & > section:first-of-type section:last-child h3::after {
    content: '+';
    color: #066306;
  }
  & > section:last-of-type section:first-child h3::after {
    content: '+';
    color: #e100ff;
  }
  & > section:last-of-type section:last-child h3::after {
    content: '%';
    color: #5555e2;
  }
  @media (max-width:1200px) {
    & section {
      justify-content: center;
      gap: 0;
    }
  }
`

export const Card = styled.section`
  & h3 {
    font-size: 2rem;
    position: relative;
  }
`