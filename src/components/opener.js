import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const OpenerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: clamp(20px, 3vw, 40px);
  border-bottom: 1px solid #787878;
  align-items: center;
  margin-bottom: 20px;
  &:last-of-type {
    border-bottom: none;
  }
`
const Description = styled.div`
  width: 100%;
`

const ImageContainer = styled.div`
  width: 100%;
`

const Img = styled(Image)`
  width: 100%;
  height: 100%;
`

const Opener = ({ title, description, fluid }) => (
  <OpenerContainer>
    <Description>
      <h3>{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </Description>
    <ImageContainer>
      <Img fluid={fluid} />
    </ImageContainer>
  </OpenerContainer>
)

export default Opener
