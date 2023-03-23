import React from 'react'
import { TextContent, Description, Title, VisualContent, MainPicture, Card, Comment } from './styles'

import MainPic from '../../assets/teamwork.jpg'
import PersonOnePic from '../../assets/person1.jpg'
import PersonTwoPic from '../../assets/person2.jpg'

import { GoTriangleUp } from 'react-icons/go'
import { AiFillCreditCard } from 'react-icons/ai'

export default function Hero() {
  return (
    <>
      <TextContent>
        <Title id='home'>The most transparent & secure banking ever</Title>
        <Description>Here customers have access to detailed information about their financial activities, including account balances, transactions, and fees. Our robust security measures include multi-factor authentication, encryption, and regular monitoring to ensure that our customers' data is always protected.</Description>
      </TextContent>
      <VisualContent>
        <MainPicture src={MainPic}></MainPicture>
        <Card>
          <h4>Business account</h4>
          <strong>R$54.698,00<GoTriangleUp /></strong>
          <button>
            <AiFillCreditCard />
            Payment received
          </button>
        </Card>
        <Comment style={{ left: '-6vw', top: '130px' }}>
          <img src={PersonOnePic} />
          <section>
            <strong>"The best finance bank"</strong>
            <p>Sophie Moore - Head of Finance</p>
          </section>
        </Comment>
        <Comment style={{ right: '-6vw', bottom: '130px' }}>
          <img src={PersonTwoPic} />
          <section>
            <strong>"Very easy to use"</strong>
            <p>John Carter - Finance Manager</p>
          </section>
        </Comment>
      </VisualContent>
    </>
  )
}