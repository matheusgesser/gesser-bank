import React from "react"
import { Wrapper, Title, Card } from './styles'

import CardOnePic from '../../assets/card1.png'
import CardTwoPic from '../../assets/card2.png'
import CardThreePic from '../../assets/card3.png'

export default function Blog() {
  return (
    <Wrapper id="blog">
      <Title>Take a look at our
        articles & resources</Title>
      <section>
        <Card>
          <img src={CardOnePic} loading='lazy' />
          <section>
            <strong>May 3, 2023</strong>
            <h4>Business</h4>
            <p>Is it smart to invest in crypto in 2022? What you need to know</p>
          </section>
        </Card>
        <Card>
          <img src={CardTwoPic} loading='lazy' />
          <section>
            <strong>Jun 16, 2022</strong>
            <h4>Management</h4>
            <p>How to save money - 8 simple ways
              to start saving money every month</p>
          </section>
        </Card>
        <Card>
          <img src={CardThreePic} loading='lazy' />
          <section>
            <strong>Dec 24, 2022</strong>
            <h4>Finances</h4>
            <p>A guide to working remotely: How to
              maximize productivity.</p>
          </section>
        </Card>
      </section>
    </Wrapper>
  )
}