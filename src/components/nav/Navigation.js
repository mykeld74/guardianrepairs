import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import Styled from 'styled-components'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const StyledLink = Styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;  
`

export const Navigation = ({ menu }) => (
  <motion.div variants={variants} className="navBlock">
    {menu.map(item => (
      <div className="navContainer" key={item.object_id}>
        <MenuItem>
          {item.wordpress_children &&
            item.wordpress_children.map(subitem => (
              <StyledLink to={subitem.object_slug} key={subitem.object_id}>
                {subitem.title}
              </StyledLink>
            ))}
        </MenuItem>
      </div>
    ))}
  </motion.div>
)
