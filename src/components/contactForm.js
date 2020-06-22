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
    height: 60px;
    padding: 0;
    background: red;
    color: white;
    text-align: center;
    font-size: clamp(20px, 10vw, 32px);
    font-weight: 700;
  }
`

const ContactForm = () => (
  <>
    <h2>Contact Us</h2>
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
        <option value="Replacement">Replacment/New Installation</option>
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
    </Contact>
  </>
)
export default ContactForm
