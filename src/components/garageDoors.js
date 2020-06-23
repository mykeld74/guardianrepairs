import React, { useRef, Fragment } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Door from './garageDoor'
import { useOpenCard } from '../hooks/useOpenCard'

const DoorWrapper = styled(motion.div)`
  box-sizing: border-box;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: clamp(20px, 3vw, 40px);
  align-items: center;
  width: calc(100vw - 5vw);
  max-width: 1170px;
  margin: 0 auto 30px;
  padding: 0;
  align-content: flex-start;
  justify-items: stretch;

  .gridHeader {
    grid-column: 1/-1;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      width: 100%;
      max-width: 400px;
      background: #1c628e;
      color: #fff;
      height: 50px;
      font-size: clamp(20px, 2.8vw, 28px);
      font-weight: 600;
      cursor: pointer;
      border: 3px solid #1c628e;
      border-radius: 10px;
      transition: all 0.25s ease-in-out;

      &:hover {
        background: #fff;
        color: #1c628e;
      }
      .arrow {
        margin-left: 10px;
        transition: transform 0.25s ease-in-out;
        &.rotate {
          transform: rotate(90deg);
        }
      }
    }
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
  }
`
const staggerDoors = {
  hidden: {
    transition: { staggerChildren: 0.075, staggerDirection: -1 },
  },
  show: {
    transition: { staggerChildren: 0.075, staggerDirection: 1 },
  },
  hover: {},
  active: {},
}
const GarageDoors = ({ doors, doorStyle }) => {
  const refs = useRef([])
  const { isOpen, open } = useOpenCard(true)
  return (
    <DoorWrapper id={doorStyle} ref={refs}>
      <div className="gridHeader">
        <button onClick={open}>
          {doorStyle} <div className={isOpen ? 'rotate arrow' : 'arrow'}>❯</div>
        </button>
      </div>
      {isOpen && (
        <DoorWrapper
          variants={staggerDoors}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {doors.map(door => (
            <Fragment key={door.node.wordpress_id}>
              {door.node.acf.door_style === doorStyle && (
                <Door
                  key={door.node.wordpress_id}
                  ref={refs.current[door.node.wordpress_id]}
                  rValue={door.node.acf.r_value}
                  title={door.node.title}
                  divKey={door.node.featured_media.id}
                  imgKey={door.node.featured_media.id}
                  fluid={
                    door.node.featured_media.localFile.childImageSharp.fluid
                  }
                  alt={door.node.title}
                  doorType={door.node.acf.door_type}
                  glass={door.node.acf.glass_options}
                  interior={door.node.acf.interior_skin}
                  windows={door.node.acf.window_options}
                  colors={door.node.acf.available_colors}
                  imgSlug={door.node.featured_media.slug}
                />
              )}
            </Fragment>
          ))}
        </DoorWrapper>
      )}
    </DoorWrapper>
  )
}
export default GarageDoors
