import React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(14px, 5vw, 28px);
  margin-bottom: 20px;
  font-weight: 600;
  display: block;
`

const sidebar = {
  open: () => ({
    clipPath: `circle(1800px at 40px 40px)`,
    height: '100vh',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 100,
      duration: 1,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 320px 40px)',
    height: '90px',
    overflow: 'hidden',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      duration: 1,
    },
  },
}

export const MotionNav = ({ menu }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  // const { height } = 1000

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      // custom={height}
      ref={containerRef}
      variants={sidebar}
    >
      <motion.div className="navBlock" variants={variants}>
        {menu.map(item => (
          <MenuItem key={item.object_id}>
            <StyledLink to={item.object_slug} key={item.object_id}>
              {item.title}
            </StyledLink>
          </MenuItem>
        ))}
      </motion.div>

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
