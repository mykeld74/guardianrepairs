import React from 'react'

const ContactUs = () => (
  <>
    <h2>Contact Us</h2>
    <form netlify name="contact">
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
    </form>
  </>
)
export default ContactUs
