import React from 'react'

import { BackImage, Card, TextContent, VisualContent, Wrapper } from './styles'
import ProductPic from '../../assets/product.png'

import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { FaStripeS, FaFacebookF } from 'react-icons/fa'
import { AiFillBank } from 'react-icons/ai'
import { BsLightbulbFill, BsShieldFillCheck } from 'react-icons/bs'

export default function Product() {
  return (
    <>
      <Wrapper>
        <VisualContent>
          <BackImage src={ProductPic} />
          <Card>
            <section>
              <FaFacebookF style={{ background: '#4267B2' }} />
              <section>
                <strong>Facebook ads</strong>
                <p>-$800.00</p>
              </section>
              <span><FiArrowUpRight /> Paid</span>
            </section>
            <section>
              <FaStripeS style={{ background: '#625BFF' }} />
              <section>
                <strong>Stripe</strong>
                <p>+$12500.80</p>
              </section>
              <span><FiArrowDownRight /> Received</span>
            </section>
            <section>
              <AiFillBank style={{ background: '#FDB52A' }} />
              <section>
                <strong>Bank Inc.</strong>
                <p>-$3520.65</p>
              </section>
              <span><FiArrowUpRight /> Paid</span>
            </section>
          </Card>
        </VisualContent>
        <TextContent>
          <span>Our product</span>
          <h2>We are the next-gen
            banking experience</h2>
          <p>We use advanced technology to offer innovative banking solutions and improve your experience.</p>
          <section>
            <aside>
              <BsLightbulbFill />
            </aside>
            <section>
              <h3>Innovative</h3>
              <p>We offer some features like: Real-time transactions, Chatbots (AI-Powered), Digital payments and more.</p>
            </section>
          </section>
          <section>
            <aside>
              <BsShieldFillCheck />
            </aside>
            <section>
              <h3>Secure</h3>
              <p>We make use of technologies like 2FA, Encryption and Real-time fraud detection.</p>
            </section>
          </section>
        </TextContent>
      </Wrapper>
    </>
  )
}