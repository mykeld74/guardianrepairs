import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/containers'
import GarageDoor from '../components/garageDoor'
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
    <GarageDoor doors={data.allWordpressWpGarageDoor.edges} />
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
          title
          slug
          wordpress_id
          acf {
            wordpress_16_foot_no_window {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            wordpress_16_foot_window_1 {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            wordpress_8_foot_windows_1 {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              id
            }
          }
        }
      }
    }
  }
`
export default Replacement
