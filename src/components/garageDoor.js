import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const DoorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  padding: 20px;
  width: 100%;
  max-width: 1170px;
  margin: auto;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`

const Door = styled.div`
  width: calc(50% - 20px);
  margin: 0 10px;
  .imgContainer {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #333;
    width: 100%;
    .gatsby-image-wrapper {
      position: initial !important;
      width: 100%;
    }
  }
`

const GarageDoor = ({ doors }) => (
  <DoorContainer>
    {doors.map(door => (
      <Door key={door.node.wordpress_id}>
        <div className={'imgContainer'} key={door.node.featured_media.id}>
          <Img
            fluid={door.node.featured_media.localFile.childImageSharp.fluid}
            alt={door.node.title}
            key={door.node.featured_media.id}
          />
        </div>
        <h2>{door.node.title}</h2>
      </Door>
    ))}
  </DoorContainer>
)

export default GarageDoor
