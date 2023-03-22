import styled from "styled-components";

export const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3B66FF;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & ul {
      position: absolute;
      top: 25vh;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column;
    }
  & ul li {
    font-size: 2.5rem;
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 2rem;
  }
  & ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
  }
`

export const Wrapper = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background: #F2F8FFEE;
  z-index: 10;
  & svg {
    font-size: 2rem;
    box-sizing: content-box;
    padding: 1rem;
    cursor: pointer;
    display: none;
  }
  @media (max-width:1200px) {
  & svg {
    display: inline;
  }
  }
`

export const Logo = styled.aside`
  display: flex;
  align-items: end;
  gap: 2px;
  & img {
    width: 2rem;
  }
  & h1 {
    font-size: 1.5rem;
    font-weight: 800;
  }
  @media (max-width:400px) {
    & img {
      width: 1rem;
    }
    & h1 {
      font-size: .8rem;
    }
  }
`

export const NavBar = styled.nav`
  & ul {
    display: flex;
  }
  & ul li {
    padding: 1.5rem 2rem;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
  }
  @media (max-width:1200px) {
    & ul {
      display: none;
    }
  }
`