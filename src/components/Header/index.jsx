import React, { useState } from 'react'
import { useScrollDirection } from '../../hooks'

import { MenuBackground, Wrapper, Logo, NavBar } from './styles'
import WingIcon from '../../assets/wing-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false)
  const scrollUp = useScrollDirection() == 'up'

  function scrollToElement(event) {
    setShowMenu(false)
    let element = event.target.textContent.toLowerCase()
    if (element) {
      document.getElementById(element).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <MenuBackground id='mobile-menu' style={{
        display:
          showMenu ? 'inline' : 'none'
      }} >
        <ul>
          <li onClick={scrollToElement} >About</li>
          <li onClick={scrollToElement} >Start</li >
          <li onClick={scrollToElement} >Insight</li>
          <li onClick={scrollToElement} >Blog</li>
        </ul >
      </MenuBackground >

      <Wrapper style={{
        transform: showMenu ? 'translateY(0)' :
          scrollUp ? 'translateY(0)' : 'translateY(-6rem)'
      }} >
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={WingIcon} />
          <h1>Gesser Bank</h1>
        </Logo>
        <NavBar>
          <ul>
            <li onClick={scrollToElement}>About</li>
            <li onClick={scrollToElement}>Start</li>
            <li onClick={scrollToElement}>Insight</li>
            <li onClick={scrollToElement}>Blog</li>
          </ul>
        </NavBar>
        {showMenu ? <IoClose onClick={() => setShowMenu(false)} style={{ fontSize: '2.5rem' }} />
          : <GiHamburgerMenu onClick={() => setShowMenu(true)} />}
      </Wrapper>
    </>
  )
}