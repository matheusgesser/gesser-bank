import React from "react"
import { Wrapper, Title, Description, Card } from './styles'

import { RiSmartphoneFill, RiCoinsFill, RiSecurePaymentFill } from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'
import { VscGraph } from 'react-icons/vsc'
import { FiMonitor } from 'react-icons/fi'

export default function Features() {
  return (
    <Wrapper>
      <Title>The features that make our bank unique</Title>
      <Description>We strive to provide clear and concise information to our customers, so they can make informed decisions about their finances. Our online banking platform is user-friendly and easy to navigate, making it simple for customers to access their financial information from anywhere at any time.</Description>
      <section>
        <Card>
          <RiSmartphoneFill />
          <strong>Mobile app</strong>
          <p>A mobile application provided by the bank that allows customers to manage their accounts, make transactions, and access various banking services from their smartphones or tablets.</p>
        </Card>
        <Card>
          <RiCoinsFill />
          <strong>Crypto supported</strong>
          <p>A feature offered by the bank that allows customers to buy, sell, and store cryptocurrencies such as Bitcoin, Ethereum, and others.</p>
        </Card>
        <Card>
          <RiSecurePaymentFill />
          <strong>256-bit security</strong>
          <p>A high level of encryption provided by the bank to ensure the security and confidentiality of customer data and transactions.</p>
        </Card>
      </section>
      <section>
        <Card>
          <BiSupport />
          <strong>World-class support</strong>
          <p>A customer service feature offered by the bank that provides high-quality support and assistance to customers, including 24/7 availability, knowledgeable representatives, and prompt resolution of issues.</p>
        </Card>
        <Card>
          <VscGraph />
          <strong>Expense reports</strong>
          <p>A feature provided by the bank that allows customers to generate reports on their expenses and track their spending habits to better manage their finances.</p>
        </Card>
        <Card>
          <FiMonitor />
          <strong>Automatic payments</strong>
          <p>A feature that enables customers to set up automatic payments for bills, loans, and other recurring expenses, eliminating the need for manual payments and reducing the risk of late payments.</p>
        </Card>
      </section>
    </Wrapper>
  )
}