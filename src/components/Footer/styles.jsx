import styled from "styled-components"

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 4rem;
  background: #111;
  color: #fff;
  & > section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    & > section {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }
    & > section:last-of-type {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      & > section {
        gap: 2rem;
        & h4 {
          margin-bottom: 1rem;
        }
        & ul {
          padding: 0.5rem 1rem;
        }
        & li {
          padding: 0.3rem 0;
          cursor: pointer;
          transition: all 300ms;
          &:hover {
            transform: scale(0.9);
          }
        }
      }
    }
  }
  & > section:last-of-type {
    font-size: 0.8rem;
    & a {
      color: #fff;
      font-size: 1rem;
    }
  }
  & aside {
    display: flex;
    justify-content: center;
    & svg {
      font-size: 1.3rem;
      box-sizing: content-box;
      padding: 0.5rem;
      cursor: pointer;
      transition: all 100ms;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  @media (max-width:1000px) {
    & > section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      & > section:last-of-type {
        justify-content: center;
        @media (max-width:600px) {
          flex-direction: column;
        }
      }
    }
    & > section:last-of-type {
      text-align: center;
    }
  }

  @media (max-width:400px) {
    & aside {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Logo = styled.aside`
  display: flex;
  align-items: end;
  gap: 2px;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    transform: scale(0.9);
  }
    & img {
    width: 2rem;
  }
  & h1 {
    font-size: 1.5rem;
    font-weight: 800;
  }
  @media (max-width:400px) {
    & img {
      width: 2rem;
    }
    & h1 {
      display: none;
    }
  }
`