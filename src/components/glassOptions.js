import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const GlassImg = styled.div`
  width: 100%;
`

export const GlassStyle = ({ glassOptions }) => {
  const data = useStaticQuery(graphql`
    query {
      clear: wordpressWpMedia(slug: { eq: "clear" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      satin: wordpressWpMedia(slug: { eq: "satin" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      bronze: wordpressWpMedia(slug: { eq: "bronze" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      gray: wordpressWpMedia(slug: { eq: "gray-2" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      graylite: wordpressWpMedia(slug: { eq: "graylite" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      pattern: wordpressWpMedia(slug: { eq: "pattern" }) {
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
  let glassType = ''
  switch (glassOptions) {
    case 'Clear':
      glassType = data.clear.localFile.childImageSharp.fluid
      break
    case 'Satin':
      glassType = data.satin.localFile.childImageSharp.fluid
      break
    case 'Bronze':
      glassType = data.bronze.localFile.childImageSharp.fluid
      break
    case 'Gray':
      glassType = data.gray.localFile.childImageSharp.fluid
      break
    case 'Gray Lite':
      glassType = data.graylite.localFile.childImageSharp.fluid
      break
    case 'Pattern':
      glassType = data.pattern.localFile.childImageSharp.fluid
      break
    default:
      glassType = data.clear.localFile.childImageSharp.fluid
      break
  }
  return (
    <GlassImg>
      <Img fluid={glassType} />
    </GlassImg>
  )
}

export default GlassStyle
