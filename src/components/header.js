import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Fish } from '../images/icons'

const StyledHeader = styled.header`
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: clamp(75px, 14vh, 104px);
  z-index: 1;
`
const Logo = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-decoration: none;
`

const LogoSVG = styled.div`
  width: clamp(60px, 12vw, 110px);
  /* max-width: 110px; */
  margin: 0 20px;
`
const FishContainer = styled.div`
  width: clamp(40px, 8vw, 90px);
  margin: 0 20px;
`

const LogoText = styled.div`
  font-size: 0.9rem;
  .guardian {
    margin: 0;
    color: red;
    text-transform: uppercase;
    font-weight: 700;
    font-size: clamp(26px, 6vw, 36px);
    letter-spacing: 0.1em;
  }
  .garageDoors {
    margin: 0;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    font-size: clamp(19px, 4.35vw, 26px);
    letter-spacing: 0.095em;
  }
`

const Header = ({ siteTitle, siteDesc }) => (
  <StyledHeader>
    <Logo to="/">
      <LogoSVG>
        <svg viewBox="0 0 100.1 69.9">
          <g>
            <path
              className="st0"
              style={{ fill: `#fff` }}
              d="M50.1,0.1l-49.8,31v37.5v0.1v1.1h15.4v-1.2h0v-14l-8-7.3h8h34.6h1h34.3h8.3l-8.3,7.3v3.9v11.3h14.4V31.2
	L50.1,0.1z M15.7,43.2v-7.1h69.9v7.1H15.7z"
            />
          </g>
        </svg>
      </LogoSVG>
      <LogoText>
        <h1 className="guardian">Guardian</h1>
        <h2 className="garageDoors">Garage Doors</h2>
      </LogoText>
      <FishContainer>
        <Fish />
      </FishContainer>
    </Logo>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
