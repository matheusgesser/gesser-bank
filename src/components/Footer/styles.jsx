import styled from "styled-components"

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  & > section:last-of-type {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & aside {
    display: flex;
    & svg {
      font-size: 1.3rem;
      box-sizing: content-box;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
  @media (max-width:700px) {
    & > section:last-of-type {
      flex-direction: column-reverse;
      padding: 1rem;
      gap: 2rem;
    }
  }
`