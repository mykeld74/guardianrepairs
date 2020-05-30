import React, { useState } from 'react'
import Styled from 'styled-components'

const Contact = Styled.div` 
  box-sizing: border-box;
  width: 100%;
  background: red;
  color: #fff;
  min-height: 50px;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  h2{
    margin: 0;
  }
`

const Response = Styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 70px;
  width: 100vw;
  background: #cccccc90;
  min-height: 200vh;
  z-index: 90;
  .container{
    position: relative;
    width: calc(100vw - 20px);
    max-width: 760px;
    margin: 20px auto;
    background: #111;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  input, select, textarea, button{
    width: 100%;
    margin: 20px 0;
    background: #fff;
    border-radius: 5px;
    border: none;
    height: 35px;
  }
  textarea{
    min-height: 200px;
  }
  button{
    background: red;
    color: #fff;
    height: 50px;
    font-size: 24px;
    font-weight: 700;
  }
`

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Contact onClick={toggle}>
      <div className="container">
        <h2>Contact Us</h2>
      </div>
      {isOpen && (
        <Response>
          <div className="container">
            <form>
              <input name="name" type="text" />
              <input namd="subject" type="text" />
              <select name="service">
                <option value="Replacement">Replacment</option>
                <option value="Repair">Repair</option>
                <option value="Opener">Opener</option>
                <option value="Quote">Free Estimate</option>
              </select>
              <textarea name="message" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Response>
      )}
    </Contact>
  )
}

export default ContactUs
