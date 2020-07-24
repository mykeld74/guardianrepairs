import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/containers'
import Openers from '../components/openers'
import SEO from '../components/seo'

const GarageDoorOpeners = ({ data }) => {
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
        <h2>Featured Openers:</h2>
        <Openers openers={data.allWordpressWpOpener.edges} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query OpenersPageQuery {
    wordpressPage(slug: { eq: "garage-door-openers" }) {
      title
      content
    }
    allWordpressWpOpener {
      edges {
        node {
          content
          title
          wordpress_id
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
export default GarageDoorOpeners
