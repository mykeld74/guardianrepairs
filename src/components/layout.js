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
import PageWrapper from './AppWrapper'

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

const ContactForm = styled.form`
  input,
  select,
  textarea,
  button {
    width: 100%;
    margin: 20px 0;
    background: #fff;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
  }
  input,
  select {
    height: 40px;
  }
  textarea {
    min-height: 200px;
    padding: 15px 10px;
  }
  button {
    height: 60px;
    padding: 0;
    background: red;
    color: white;
    text-align: center;
    font-size: clamp(20px, 10vw, 32px);
    font-weight: 700;
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
        <h2>Contact Us</h2>
        <ContactForm netlify data-netlify="true" name="contact">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            aria-label="Name"
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            aria-label="Subject"
          />
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            aria-label="Phone Number"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
          <select name="service" defaultValue="tos">
            <option disabled value="tos">
              Type of service:
            </option>
            <option value="Replacement">Replacment</option>
            <option value="Repair">Repair</option>
            <option value="Opener">Opener</option>
            <option value="Quote">Free Estimate</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            aria-label="Your message here"
          />
          <button type="submit">Submit</button>
        </ContactForm>
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
