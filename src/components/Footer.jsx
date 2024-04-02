import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Aryan</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input className="email-submit-button" type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
              <FaLinkedinIn className="icons" />
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              AryanPortfolio. ⓒAll Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(128, 128, 128, 0.5);

    h3 {
      color: black;
      margin-bottom: 2.4rem;
      font-weight: 600;
    }
    p {
      color: black;
      font-weight: 600;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid black;

        .icons {
          color: black;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: black;
        height: 0.1px;
      }
    }
  .email-submit-button{
    background-color: rgba(128, 128, 128, 0.5);
    color: black;
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: rgba(128, 128, 128, 0.5);
      font-weight: 600;
      color: black;
      transform: scale(0.9);
      box-shadow: 0 2rem 2rem 0 rgb(128 128 128 / 30%);
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }

  
`;

export default Footer;