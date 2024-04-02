import React from "react";
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import styled from "styled-components";


const Header = () => {
    
    return (
        <MainHeader >
            <NavLink to="/">
                <h1 className="logo">ARYAN</h1>
            </NavLink>
            <Navbar />
        </MainHeader>
    )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 51px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        height: auto;
        max-width: 30%;
    }
`;


export default Header;