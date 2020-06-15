import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Image from 'gatsby-image'
// import { pascalCase } from 'change-case'
import { useOpenCard } from '../hooks/useOpenCard'
import { InfoContainer } from '../components/containers'
import { DoorModal } from './modal'
import DrColors from './doorColors'
import WindowStyle from './windowOptions'
import GlassStyle from './glassOptions'

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
    }
  }
`
const ColorList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
  border-bottom: 1px ridge #1c628e;
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0.5% 20px 0;
    padding: 0;
    width: clamp(12%, 150px, 32%);
    p {
      width: 100%;
      text-align: center;
    }
  }
`

const WindowList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
  border-bottom: 1px ridge #1c628e;
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 1% 20px 0;
    padding: 0;
    width: clamp(32.3%, 300px, 49%);
    p {
      width: 100%;
      text-align: center;
    }
  }
`
const GlassList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
  border-bottom: 1px ridge #1c628e;
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 1% 20px 0;
    padding: 0;
    width: clamp(24%, 200px, 32.3%);
    p {
      width: 100%;
      text-align: center;
    }
  }
`
const Features = styled.div``

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
  const { isOpen, open } = useOpenCard(false)

  return (
    <DoorContainer onClick={open} initial="hidden" variants={door}>
      <DoorBlock>
        <div key={divKey}>
          <Img
            key={imgKey}
            alt={alt}
            fluid={fluid}
            className={`door${imgSlug} closedBg`}
          />
        </div>
        <InfoContainer>
          <TitleBlock>
            <h2>{title}</h2>
            {!isOpen && <p>Learn More</p>}
          </TitleBlock>
        </InfoContainer>
      </DoorBlock>
      <DoorModal isVisible={isOpen} setIsVisible={open}>
        <div>
          <Img
            key={imgKey}
            alt={alt}
            fluid={fluid}
            className={`door${imgSlug} modalDoor`}
          />
          <InfoContainer>
            <TitleBlock>
              <h2>{title}</h2>
            </TitleBlock>
            <h3 className="blue">Available Colors</h3>
            <ColorList>
              {colors.map(color => (
                <li key={color}>
                  <DrColors colorOptions={color} />
                  <p>{color}</p>
                </li>
              ))}
            </ColorList>
            <h3 className="blue">Window Options</h3>
            <WindowList>
              {windows.map(window => (
                <li key={window} className={window}>
                  <WindowStyle windowOptions={window} />
                  <p>{window}</p>
                </li>
              ))}
            </WindowList>
            <GlassList>
              {glass.map(glassType => (
                <li key={glassType} className={glassType}>
                  <GlassStyle glassOptions={glassType} />
                  <p>{glassType}</p>
                </li>
              ))}
            </GlassList>
            <h3 className="blue">Features</h3>
            <Features>
              <div>
                <h4>R-Value: {rValue}</h4>
              </div>
              <div>
                <h4>Interior Material: {interior}</h4>
              </div>
            </Features>
          </InfoContainer>
        </div>
      </DoorModal>
    </DoorContainer>
  )
}
export default Door
