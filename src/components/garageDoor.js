import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { useOpenCard } from '../hooks/useOpenCard'
import { InfoContainer } from '../components/containers'

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  p {
    transition: color 0.3s ease-in-out;
  }
  p:hover {
    color: red;
  }
`
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
const DoorBlock = styled(motion.div)`
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  .openImgContainer {
    width: 100%;
    height: 350px;
    overflow: hidden;
    @media (max-width: 500px) {
      height: auto;
    }
  }
  .closedImgContainer {
    width: 100%;
    height: 180px;
  }
`

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  @media (min-width: 500px) {
    &.openBg {
      position: relative !important;
      top: -200px;
      height: auto;
      overflow: hidden;
      &.door490-491-2 {
        top: -150px;
      }
    }
  }
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 1750;
  position: fixed;
  top: 0;
  left: 0;
`
const door = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.025,
    cursor: 'pointer',
  },
  closed: {
    position: 'relative',
    zIndex: 0,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    top: 'auto',
    left: 'auto',
    scale: 1,
    border: 'none',
    transition: {
      duration: 0,
    },
  },
  active: {
    position: 'fixed',
    width: '90vw',
    top: '2vh',
    left: '5vw',
    height: '96vh',
    overflow: 'scroll',
    zIndex: '2000',
    border: '2px solid #333',
    transition: {
      duration: 0,
    },
  },
  showOverlay: {},
}
const Door = ({
  title,
  rValue,
  imgKey,
  divKey,
  alt,
  fluid,
  doorType,
  glass,
  interior,
  windows,
  colors,
  imgSlug,
}) => {
  const { isOpen, open, bind } = useOpenCard(false)

  return (
    <DoorContainer {...bind} isopen={isOpen} initial="hidden" variants={door}>
      <DoorBlock
        initial="show"
        animate={!isOpen ? 'closed' : 'active'}
        variants={door}
      >
        <div
          className={isOpen ? 'openImgContainer' : 'closedImgContainer'}
          key={divKey}
        >
          <Img
            key={imgKey}
            alt={alt}
            fluid={fluid}
            className={
              isOpen ? `door${imgSlug} openBg` : `door${imgSlug} closedBg`
            }
          />
        </div>
        <InfoContainer>
          <TitleBlock>
            <h2>{title}</h2>
            {!isOpen && <p>Learn More</p>}
          </TitleBlock>
          {isOpen && (
            <div>
              <p>R-Value: {rValue}</p>
              <ul>
                {colors.map(color => (
                  <li key={color}>{color}</li>
                ))}
              </ul>
            </div>
          )}
        </InfoContainer>
      </DoorBlock>
      {isOpen && <Overlay />}
    </DoorContainer>
  )
}
export default Door
