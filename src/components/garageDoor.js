import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const DoorContainer = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: calc(100% - 40px);
  }
`

const door = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  hover: {
    scale: 1.025,
    backgroundColor: '#ddd',

    cursor: 'pointer',
  },
}

const Door = ({ children }) => {
  return (
    <DoorContainer className="profile" whileHover="hover" variants={door}>
      {children}
    </DoorContainer>
  )
}

export default Door
