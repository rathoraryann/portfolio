import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h2 className="common-heading">Please Contact</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.706355393701!2d77.02382277618297!3d28.578579186527477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a98249db801%3A0x1c3c88481a4eb490!2sSatya%20Public%20School!5e0!3m2!1sen!2sin!4v1711772206033!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xdoqwdra" method="POST" className="contact-inputs">
            <input type="text"
              name="username"
              placeholder="username"
              required
              autoComplete="off"
            />

            <input type="email"
              name="Email"
              placeholder="Email"
              required
              autoComplete="off"
            />

            <textarea name="message" id="" cols="30" rows="6" autoComplete="off" required></textarea>

            <input className="input-gray-button" type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;

.container {
  margin-top: 6rem;
  text-align: center;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        background-color: rgba(128, 128, 128, 0.5);
        color: black;
        border-radius: 10px;
        border: none;

        &:hover {
          background-color: rgba(128, 128, 128, 0.5);
          box-shadow: 0 2rem 2rem 0 rgb(128 128 128 / 30%);
          font-weight: 600;
          color: black;
          transform: scale(0.9);
        }
      }
    }
  }
}

`;

export default Contact;