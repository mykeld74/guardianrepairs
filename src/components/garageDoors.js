import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Door from './garageDoor'
const DoorWrapper = styled(motion.div)`
  box-sizing: border-box;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 40px;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0 40px;
  align-content: flex-start;
  justify-items: stretch;
  @media (max-width: 500px) {
    padding: 0 5px 40px;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
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
  active: {},
}
const GarageDoors = ({ doors }) => {
  const refs = useRef([])
  return (
    <DoorWrapper variants={staggerDoors} initial="hidden" animate="show">
      {doors.map(door => (
        <Door
          key={door.node.wordpress_id}
          ref={refs.current[door.node.wordpress_id]}
          rValue={door.node.acf.r_value}
          title={door.node.title}
          divKey={door.node.featured_media.id}
          imgKey={door.node.featured_media.id}
          fluid={door.node.featured_media.localFile.childImageSharp.fluid}
          alt={door.node.title}
          doorType={door.node.acf.door_type}
          glass={door.node.acf.glass_options}
          interior={door.node.acf.interior_skin}
          windows={door.node.acf.window_options}
          colors={door.node.acf.available_colors}
          imgSlug={door.node.featured_media.slug}
        />
      ))}
    </DoorWrapper>
  )
}
export default GarageDoors
