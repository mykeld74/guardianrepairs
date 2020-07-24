import React, { Fragment } from 'react'
import styled from 'styled-components'
import Opener from './opener'

const OpenerWrapper = styled.div`
  width: 100%;
`
const Openers = ({ openers }) => (
  <OpenerWrapper>
    {openers.map(opener => (
      <Fragment key={opener.node.wordpress_id}>
        <Opener
          title={opener.node.title}
          description={opener.node.content}
          fluid={opener.node.featured_media.localFile.childImageSharp.fluid}
        ></Opener>
      </Fragment>
    ))}
  </OpenerWrapper>
)

export default Openers
