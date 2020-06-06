import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/containers'
import GarageDoors from '../components/garageDoors'
import SEO from '../components/seo'

const Replacement = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <Container>
      <h1>{data.wordpressPage.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.wordpressPage.content,
        }}
      />
    </Container>
    <GarageDoors doors={data.allWordpressWpGarageDoor.edges} />
  </Layout>
)

export const query = graphql`
  query ReplacementPageQuery {
    wordpressPage(slug: { eq: "replacement" }) {
      title
      content
    }
    allWordpressWpGarageDoor {
      edges {
        node {
          slug
          title
          id
          wordpress_id
          acf {
            available_colors
            door_type
            glass_options
            interior_skin
            r_value
            window_options
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid {
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
export default Replacement
