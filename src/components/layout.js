import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'

import './layout.scss'

const PageContent = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: clamp(75px, 14vh, 104px);
`
const Main = styled.main`
  width: 100vw;
  min-height: calc(100vh - 130px);
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background: #000;
  padding: 10px 20px;
  p {
    font-size: 0.85rem;
    color: #fff;
    margin: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDesc={data.site.siteMetadata.description}
      />

      <PageContent className="page-content">
        <Main>{children}</Main>
      </PageContent>

      <Footer>
        <p className="footerText">
          ©{new Date().getFullYear()} Guardian Garage Doors
        </p>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
