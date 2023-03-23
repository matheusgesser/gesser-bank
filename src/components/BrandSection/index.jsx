import React from "react"
import { Wrapper } from './styles'

import { BsApple, BsMessenger, BsTwitch, BsTwitter, BsYoutube, BsAndroid2, BsSpotify } from 'react-icons/bs'
import { SiIbm, SiAirbnb } from 'react-icons/si'

export default function BrandSection() {
  return (
    <Wrapper id="about">
      <h4>Trusted by</h4>
      <section>
        <BsYoutube color="#FF0000" />
        <BsApple color="#000" />
        <BsMessenger color="#006AFF" />
        <BsSpotify color="#1DB954" />
        <BsTwitch color="#5510D6" />
        <BsTwitter color="#1DA1F2" />
        <SiIbm color="#006699" />
        <BsAndroid2 color="#78C257" />
        <SiAirbnb color="#FF5A5F" />
      </section>
    </Wrapper>
  )
}