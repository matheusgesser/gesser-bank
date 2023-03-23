import React from 'react'

import { BackImage, TextContent, VisualContent, Wrapper, Comment, Card } from './styles'

import InsightPic from '../../assets/stats.png'

import PersonOnePic from '../../assets/person2.jpg'
import PersonTwoPic from '../../assets/person1.jpg'

export default function Insight() {
  return (
    <>
      <Wrapper id='insight'>
        <TextContent>
          <span>Insight</span>
          <h2>Our company have
            impactful numbers</h2>
          <section>
            <Card>
              <h3>99</h3>
              <p>Customer satisfaction</p>
            </Card>
            <Card>
              <h3>100K</h3>
              <p>New users per week</p>
            </Card>
          </section>
          <section>
            <Card>
              <h3>205M</h3>
              <p>Monthly active users</p>
            </Card>
            <Card>
              <h3>55</h3>
              <p>Growth year-over-year</p>
            </Card>
          </section>
        </TextContent>
        <VisualContent>
          <BackImage src={InsightPic} loading='lazy' />
          <Comment style={{ left: '-12vw', top: '40px' }}>
            <img src={PersonOnePic} loading='lazy' />
            <section>
              <strong>"Extremely secure"</strong>
              <p>Andy Smith - Investor & Trader</p>
            </section>
          </Comment>
          <Comment style={{ left: '-8vw', bottom: '40px' }}>
            <img src={PersonTwoPic} loading='lazy' />
            <section>
              <strong>"Gesser Bank is the best"</strong>
              <p>Sophie Moore - Head of Finance</p>
            </section>
          </Comment>
        </VisualContent>
      </Wrapper>
    </>
  )
}