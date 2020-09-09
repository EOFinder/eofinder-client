import React from 'react';
import {
    Link
  } from "react-router-dom";
import styled from 'styled-components';

const NavbarHolder = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  background-color: whitesmoke;
`;

const Navbar = () => {
    const styles = {
        liStyle : {
            listStyleType: 'none',
            margin: '10px',
            padding: '5px',
        },
        aStyle : {
            color: '#333',
            textDecoration: 'none',
            fontSize: '20px'
        }
    }
    return(
        <NavbarHolder>
            <li style={styles.liStyle}>
                <Link to="/" style={styles.aStyle}> Dashboard </Link>
            </li>
            <li style={styles.liStyle}>
                <Link to="/about" style={styles.aStyle}> About </Link>
            </li>
            <li style={styles.liStyle}>
                <Link to="/login" style={styles.aStyle}> Login </Link>
            </li>
            <li style={styles.liStyle}>
                <Link to="/register" style={styles.aStyle}> Register </Link>
            </li>
           
        </NavbarHolder>
    )
}
export default Navbar;