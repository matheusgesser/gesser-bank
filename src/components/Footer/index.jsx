import React from 'react'

import { Wrapper } from './styles'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'


export default function Footer() {
  return (
    <>
      <Wrapper>
        <section>
        </section>
        <section>
          <strong>© 2023 | All Rights Reserved</strong>
          <aside>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsYoutube />
            <BsLinkedin />
          </aside>
        </section>
      </Wrapper>
    </>
  )
}