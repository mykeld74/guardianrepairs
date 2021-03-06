import React from 'react'
import styled from 'styled-components'

const Contact = styled.form`
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
    box-sizing: border-box;
    height: 60px;
    padding: 0;
    background: red;
    color: white;
    text-align: center;
    font-size: clamp(20px, 10vw, 32px);
    border: 2px solid red;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: red;
      background: #fff;
    }
  }
`

const ContactForm = () => (
  <>
    <Contact
      netlify
      data-netlify="true"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      action="/thank-you"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        aria-label="Name"
        required
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
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Email"
        required
      />
      <select name="service" defaultValue="tos">
        <option disabled value="tos">
          Type of service:
        </option>
        <option value="Replacement">Replacment/New Installation</option>
        <option value="Repair">Repair</option>
        <option value="Opener">Opener</option>
        <option value="Quote">Free Estimate</option>
      </select>
      <textarea
        name="message"
        placeholder="Message"
        aria-label="Your message here"
        required
      />
      <button type="submit">Submit</button>
    </Contact>
  </>
)
export default ContactForm
