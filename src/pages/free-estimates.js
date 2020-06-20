import React from 'react'
import Layout from '../components/layout'
import { Container, ContactContainer } from '../components/containers'
import ContactForm from '../components/contactForm'
import SEO from '../components/seo'

const FreeEstimates = ({ data }) => {
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
  query EstimatePageQuery {
    wordpressPage(slug: { eq: "free-estimates" }) {
      title
      content
    }
  }
`

export default FreeEstimates
