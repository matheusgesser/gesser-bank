import React from 'react'

import { Wrapper, Logo } from './styles'

import WingIcon from '../../assets/wing-logo.svg'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'


export default function Footer() {
  return (
    <>
      <Wrapper>
        <section>
          {/* LEFT SIDE */}
          <section>
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={WingIcon} />
              <h1>Gesser Bank</h1>
            </Logo>
            <p>Connect with us</p>
            <aside>
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsYoutube />
              <BsLinkedin />
            </aside>
          </section>
          {/* RIGHT SIDE */}
          <section>
            <section>
              <h4>Product</h4>
              <ul>
                <li>How it works</li>
                <li>Services</li>
                <li>Pricing</li>
              </ul>
            </section>
            <section>
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </section>
            <section>
              <h4>Utility</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </section>
          </section>
        </section>
        <section>
          <strong>© Gesser Bank 2023 | Made with ❤️ by Matheus</strong>

        </section>
      </Wrapper>
    </>
  )
}