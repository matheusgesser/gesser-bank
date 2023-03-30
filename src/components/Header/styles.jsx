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
  user-select: none;
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
    font-weight: 800;
    text-transform: uppercase;
    padding: 1rem 2rem;
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      width: 0;
      height: 5px;
      position: absolute;
      bottom: 0.5rem;
      left: 2rem;
      background: #fff;
      transition: all 300ms;
    }
  }
  & ul li:nth-child(1) {
    &:hover::before {
      width: 62%;
    }
  }
  & ul li:nth-child(2) {
    &:hover::before {
      width: 56%;
    }
  }
  & ul li:nth-child(3) {
    &:hover::before {
      width: 71%;
    }
  }
  & ul li:nth-child(4) {
    &:hover::before {
      width: 48%;
    }
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
  transition: all 0.5s ease-in-out;
  user-select: none;
  box-shadow: 0 3px 10px #00000010;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    backdrop-filter: blur(4px);
  }
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
  cursor: pointer;
  padding: 1.5rem;
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
    position: relative;
    transition: all 200ms;
    &:hover {
      transform: scale(0.85);
    }
  }
  @media (max-width:1200px) {
    & ul {
      display: none;
    }
  }
`