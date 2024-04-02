import React from "react";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { useGlobalContext } from "../Context";

const HeroSection = () => {
    const {name , image}  = useGlobalContext()
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">This is me</p>
                    <h1 className="hero-heading">{name}</h1>
                    <p className="hero-paragraph">I am {name} FRONTEND DEVELOPER.</p>
                    <Button className="btn hireme-btn">
                        <NavLink
                            to="/contact"
                        > hire me </NavLink>
                    </Button>
                </div>
                
                <div className="section-hero-image">
                    <picture>
                        <img className="hero-img" src={image} alt="hero-section-image" />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    paddding: 9rem 0;

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn{
        max-width: 16rem;
    }

    .here-top-data{
        text-transfrom: uppercase;
        font-size: 1.5rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }

    .hero-heading{
        text-transfrom : uppercase;
        font-size: 6.4rem;
    }

    .hero-paragraph{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }

    .section-hero-image{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    picture{
        text-align: center;
    }

    .hero-img{
        max-width: 80%;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
          gap: 7.2rem;
        }

`

export default HeroSection;