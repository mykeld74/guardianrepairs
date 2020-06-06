import React from 'react'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import Styled from 'styled-components'
import Door from './garageDoor'

const DoorWrapper = Styled(motion.div)`
  box-sizing: border-box;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 40px;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  align-content: flex-start;
  justify-items: stretch;
  @media (max-width: 500px){
    padding: 90px 5px 40px;
  }
  @media all and (-ms-high-contrast: none),
  (-ms-high-contrast: active){
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
  }
`
const staggerDoors = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.075, staggerDirection: 1 },
  },
  hover: {},
}
const GarageDoors = ({ doors }) => {
  return (
    <DoorWrapper variants={staggerDoors} initial="hidden" animate="show">
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
    </DoorWrapper>
  )
}

export default GarageDoors
