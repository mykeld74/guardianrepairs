import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import { MotionNav } from './nav/MotionNav'
import { Modal } from './modal'
import './nav/nav.scss'
import './layout.scss'
import { useOpenCard } from '../hooks/useOpenCard'
import ContactForm from '../components/contactForm'
// import PageWrapper from './AppWrapper'

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
  min-height: calc(100vh - 160px);
`
const ContactButton = styled.div`
  width: 100vw;
  text-align: center;
  background: red;
  color: #fff;
  margin: 0;
  padding: 10px 0;
  cursor: pointer;
  h4 {
    margin: 0;
  }
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
  const { isOpen, open } = useOpenCard(false)
  // const [isContactVisible, setIsContactVisible] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      wordpressWpApiMenusMenusItems(slug: { eq: "main-nav" }) {
        items {
          title
          object_slug
          object_id
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
      <MotionNav menu={data.wordpressWpApiMenusMenusItems.items} />

      <PageContent className="page-content">
        <Main>{children}</Main>
      </PageContent>
      <ContactButton onClick={open}>
        <h4>Contact Us</h4>
      </ContactButton>
      <Footer>
        <p className="footerText">
          ©{new Date().getFullYear()} Guardian Garage Doors
        </p>
      </Footer>
      <Modal isVisible={isOpen} setIsVisible={open}>
        <h2>
          Complete the form below or call or text us at:{' '}
          <a href="tel:3039490688">303.949.0688</a>
        </h2>
        <ContactForm />
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
