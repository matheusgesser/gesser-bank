import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  padding: 4rem 0;
  & h4 {
    font-size: .9rem;
    opacity: 0.9;
  }
  & section {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.8rem;
  }
  & section svg {
    box-sizing: content-box;
    padding: 0.5rem 1rem;
    transition: all 200ms;
    &:hover {
      transform: scale(1.5);
    }
  }
  @media (max-width:1200px) {
    & section {
      width: 90%;
      gap: 0;
      & svg {
        padding: 0;
      }
    }
  }
`