import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const GarageDoor = () => {
  ;<StaticQuery
    query={graphql`
      query GarageDoorQuery {
        allWordpressWpGarageDoor {
          edges {
            node {
              title
              slug
              wordpress_id
              acf {
                wordpress_16_foot_no_window {
                  localFile {
                    childImageSharp {
                      fluid {
                        tracedSVG
                      }
                    }
                  }
                }
                wordpress_16_foot_window_1 {
                  localFile {
                    childImageSharp {
                      fluid {
                        tracedSVG
                      }
                    }
                  }
                }
                wordpress_8_foot_windows_1 {
                  localFile {
                    childImageSharp {
                      fluid {
                        tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
  />
}
