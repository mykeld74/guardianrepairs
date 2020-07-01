import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import { Container, ContactContainer } from '../components/containers'
import SEO from '../components/seo'

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.wordpressPage.title} />
      <Container>
        <h1>{data.wordpressPage.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />

        <ContactContainer>
          <ContactForm />
        </ContactContainer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ContactUsPageQuery {
    wordpressPage(slug: { eq: "contact-us" }) {
      title
      content
    }
  }
`

export default ContactPage
