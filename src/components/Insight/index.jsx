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
              <h3 id='cs'>0</h3>
              <p>Customer satisfaction</p>
            </Card>
            <Card>
              <h3 id='nupw'>0</h3>
              <p>New users per week</p>
            </Card>
          </section>
          <section>
            <Card>
              <h3 id='mau'>0</h3>
              <p>Monthly active users</p>
            </Card>
            <Card>
              <h3 id='gyoy'>0</h3>
              <p>Growth year-over-year</p>
            </Card>
          </section>
        </TextContent>
        <VisualContent>
          <BackImage src={InsightPic} />
          <Comment style={{ left: '-6vw', top: '40px' }}>
            <img src={PersonOnePic} />
            <section>
              <strong>"Extremely secure"</strong>
              <p>Andy Smith - Investor & Trader</p>
            </section>
          </Comment>
          <Comment style={{ left: '-12vw', bottom: '40px' }}>
            <img src={PersonTwoPic} />
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