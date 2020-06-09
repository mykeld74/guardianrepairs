import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useOpenCard } from '../hooks/useOpenCard'
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
    position: 'relative',
    zIndex: 0,
    width: '100%',
    top: 'auto',
    left: 'auto',
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
  closed: {
    position: 'relative',
    zIndex: 0,
    width: '100%',
    top: 'auto',
    left: 'auto',
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.0,
    },
  },
  active: {
    position: 'absolute',
    top: '10vh',
    left: '5vw',
    width: '90vw',
    zIndex: '1000',
    transition: {
      duration: 0,
    },
  },
}
const Door = ({ title, rValue, imgKey, divKey, alt, fluid }) => {
  const { isOpen, open, bind } = useOpenCard(false)

  return (
    <AnimatePresence>
      <DoorContainer
        className="profile"
        whileHover="hover"
        animate={!isOpen ? 'closed' : 'active'}
        variants={door}
        {...bind}
        isopen={isOpen}
      >
        <div className={`imgContainer`} key={divKey}>
          <Img key={imgKey} alt={alt} fluid={fluid} />
        </div>
        <h2>{title}</h2>
        {isOpen && (
          <div>
            <p r-value>R-Value: {rValue}</p>
          </div>
        )}
      </DoorContainer>
    </AnimatePresence>
  )
}
export default Door
