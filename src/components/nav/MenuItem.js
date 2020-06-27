import * as React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: '100vw',
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}
