import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const WindowImg = styled.div`
  width: 100%;
`

export const WindowStyle = ({ windowOptions }) => {
  const data = useStaticQuery(graphql`
    query {
      cascade: wordpressWpMedia(slug: { eq: "cascade" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      cathedral: wordpressWpMedia(slug: { eq: "cathedral" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      prairie: wordpressWpMedia(slug: { eq: "prairie" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      sherwood: wordpressWpMedia(slug: { eq: "sherwood" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      somerton: wordpressWpMedia(slug: { eq: "somerton" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      stockbridge: wordpressWpMedia(slug: { eq: "stockbridge" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      stockton: wordpressWpMedia(slug: { eq: "stockton" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      stocktonArch: wordpressWpMedia(slug: { eq: "stockton_arch" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      waterton: wordpressWpMedia(slug: { eq: "waterton" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      williamsburg: wordpressWpMedia(slug: { eq: "williamsburg" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      wyndbridge: wordpressWpMedia(slug: { eq: "wyndbridge" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  let windowType = ''
  switch (windowOptions) {
    case 'Cascade':
      windowType = data.cascade.localFile.childImageSharp.fluid
      break
    case 'Cathedral':
      windowType = data.cathedral.localFile.childImageSharp.fluid
      break
    case 'Prairie':
      windowType = data.prairie.localFile.childImageSharp.fluid
      break
    case 'Sherwood':
      windowType = data.sherwood.localFile.childImageSharp.fluid
      break
    case 'Stockbridge':
      windowType = data.stockbridge.localFile.childImageSharp.fluid
      break
    case 'Somerton':
      windowType = data.somerton.localFile.childImageSharp.fluid
      break
    case 'Stockton':
      windowType = data.stockton.localFile.childImageSharp.fluid
      break
    case 'Stockton Arch':
      windowType = data.stocktonArch.localFile.childImageSharp.fluid
      break
    case 'Waterton':
      windowType = data.waterton.localFile.childImageSharp.fluid
      break
    case 'Williamsburg':
      windowType = data.williamsburg.localFile.childImageSharp.fluid
      break
    case 'Wyndbridge':
      windowType = data.wyndbridge.localFile.childImageSharp.fluid
      break
    default:
      windowType = data.williamsburg.localFile.childImageSharp.fluid
      break
  }
  return (
    <WindowImg>
      <Img fluid={windowType} />
    </WindowImg>
  )
}

export default WindowStyle
