import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/containers'
import { Repair, Replace, Estimate, Opener } from '../images/icons'

const HeroBanner = styled(BackgroundImage)`
  width: 100vw;
  height: 50vh;
  background-position: 50% 15%;
  display: flex;
  align-items: center;
  color: #fff;

  .tagLine {
    font-size: clamp(44px, 6vw, 68px);
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 0.025em;
    -webkit-text-stroke-color: #000;
    text-shadow: 2px 2px 5px #777;
    text-align: center;
    line-height: 1.3;
  }
`

const TextContainer = styled(Container)`
  margin-top: 1vh;
`

const IconContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner
      fluid={data.wordpressPage.featured_media.localFile.childImageSharp.fluid}
    >
      <Container>
        <h3 className="tagLine">{data.wordpressPage.title}</h3>
      </Container>
    </HeroBanner>
    <TextContainer
      dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
    />
    <TextContainer>
      <h3>What type of service do you need?</h3>
    </TextContainer>
    <IconContainer>
      <Replace />
      <Opener />
      <Repair />
      <Estimate />
    </IconContainer>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    wordpressPage(slug: { eq: "home" }) {
      title
      content
      featured_media {
        source_url
        localFile {
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    wordpressSiteMetadata {
      description
    }
  }
`

export default IndexPage
