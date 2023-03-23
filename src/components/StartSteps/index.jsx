import React from "react"
import { Wrapper, Title, Description, Card } from './styles'
import CardOnePic from '../../assets/card1.jpg'
import CardTwoPic from '../../assets/card2.jpg'
import CardThreePic from '../../assets/card3.jpg'

export default function StartSteps() {
  return (
    <Wrapper id="start">
      <Title>It have never been easier to
        manage your finances</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipiscing elit ut luctus aliquet ut nisl tortor nam lacus sit in lorem elementum scelerisque.</Description>
      <section>
        <Card>
          <img src={CardOnePic} loading='lazy' />
          <strong>1. Download our app</strong>
          <p>Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet dictum lectus tellus massa nec vel proin</p>
        </Card>
        <Card>
          <img src={CardTwoPic} loading='lazy' />
          <strong>2. Create an account</strong>
          <p>Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet dictum lectus tellus massa nec vel proin</p>
        </Card>
        <Card>
          <img src={CardThreePic} loading='lazy' />
          <strong>3. Start Investing</strong>
          <p>Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet dictum lectus tellus massa nec vel proin</p>
        </Card>
      </section>
    </Wrapper>
  )
}