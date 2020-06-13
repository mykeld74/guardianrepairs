import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ColorImg = styled.div`
  width: clamp(50px, 5vw, 80px);
  height: clamp(50px, 5vw, 80px);
  border-radius: 50%;
  border: 3px ridge #1c628e;
  overflow: hidden;
`

const DrColor = ({ colorOptions }) => {
  const data = useStaticQuery(graphql`
    query {
      white: wordpressWpMedia(slug: { eq: "white" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      almond: wordpressWpMedia(slug: { eq: "almond" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      black: wordpressWpMedia(slug: { eq: "black" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      brown: wordpressWpMedia(slug: { eq: "brown" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      desertTan: wordpressWpMedia(slug: { eq: "deserttan" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      driftwood: wordpressWpMedia(slug: { eq: "driftwood" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      gray: wordpressWpMedia(slug: { eq: "gray" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      oak: wordpressWpMedia(slug: { eq: "oak" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      sandstone: wordpressWpMedia(slug: { eq: "sandstone" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      walnut: wordpressWpMedia(slug: { eq: "walnut" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  let doorColor = data.white.localFile.childImageSharp.fluid
  switch (colorOptions) {
    case 'White':
      doorColor = data.white.localFile.childImageSharp.fluid
      break
    case 'Almond':
      doorColor = data.almond.localFile.childImageSharp.fluid
      break
    case 'Black':
      doorColor = data.black.localFile.childImageSharp.fluid
      break
    case 'Brown':
      doorColor = data.brown.localFile.childImageSharp.fluid
      break
    case 'Desert Tan':
      doorColor = data.desertTan.localFile.childImageSharp.fluid
      break
    case 'Driftwood':
      doorColor = data.driftwood.localFile.childImageSharp.fluid
      break
    case 'Gray':
      doorColor = data.gray.localFile.childImageSharp.fluid
      break
    case 'Oak':
      doorColor = data.oak.localFile.childImageSharp.fluid
      break
    case 'Sandstone':
      doorColor = data.sandstone.localFile.childImageSharp.fluid
      break
    case 'Walnut':
      doorColor = data.walnut.localFile.childImageSharp.fluid
      break
    default:
      doorColor = data.white.localFile.childImageSharp.fluid
      break
  }
  return (
    <ColorImg>
      <Img fluid={doorColor} />
    </ColorImg>
  )
}

export default DrColor
