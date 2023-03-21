import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  & h4 {
    font-size: .9rem;
    opacity: 0.9;
  }
  & section {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    @media (max-width:800px) {
      width: 90%;
    }
  }
`