import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100% - 6vw);
  max-width: 1170px;
  margin: 0 auto;
  padding-top: 20px;
  .twoCol {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
    .leftCol {
      width: 60%;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
    .rightCol {
      margin-left: 10%;
      width: 30%;
      @media (max-width: 500px) {
        width: 100%;
        margin-left: 0;
      }
    }
  }
`

export const InfoContainer = styled.div`
  width: 90%;
  margin: 20px 5%;
`

export const ContactContainer = styled.div`
  width: 100%;
  background: #333;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto 30px;
  h2 {
    color: #fff;
  }
`
