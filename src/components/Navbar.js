import React from 'react';
import {
    Link
  } from "react-router-dom";
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import logo from '../assets/images/logo.png';
import {ButtonLogin} from '../components/Button';

const NavbarHolder = styled.div`
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color: #3C6E71;
`;
const ImgLogo = styled.img`
  width:60%
`
const Left = styled.div`
  display: flex;
  align-items:center;
`

const Navbar = () => {
    const user = useSelector((state) => state.user.users)
    const isLogin = useSelector((state) => state.user.isAuthenticated)
    const styles = {
        liStyle : {
            listStyleType: 'none',
            margin: '10px',
            padding: '5px',
        },
        aStyle : {
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px'
        }
    }
    return(
        <div>
            {isLogin ? 
            <NavbarHolder>
                <div>
                <li style={styles.liStyle}>
                    <Link to="/" style={styles.aStyle}> <ImgLogo src={logo}/> </Link>
                </li>
                </div>
                <Left>
                    <li style={styles.liStyle}>
                        <Link to="/about" style={styles.aStyle}> About </Link>
                    </li>
                    <li style={styles.liStyle}>
                        <Link to="/profile" style={styles.aStyle}> {user.fullname} </Link>
                    </li>
                    <li style={styles.liStyle}>
                        <Link to="/" style={styles.aStyle}><ButtonLogin primary> Logout </ButtonLogin></Link>
                    </li>
                </Left>
            </NavbarHolder> 
        
        : 
        
        <NavbarHolder>
            <div>
                <li style={styles.liStyle}>
                    <Link to="/" style={styles.aStyle}> <ImgLogo src={logo}/> </Link>
                </li>
            </div>
            <Left>
                <li style={styles.liStyle}>
                    <Link to="/about" style={styles.aStyle}> About </Link>
                </li>
                <li style={styles.liStyle}>
                    <Link to="/login" style={styles.aStyle}><ButtonLogin> Login </ButtonLogin> </Link>
                </li>
                <li style={styles.liStyle}>
                    <Link to="/register" style={styles.aStyle}><ButtonLogin primary> Register </ButtonLogin></Link>
                </li>
            </Left>
        </NavbarHolder>}
        </div>
        
        
    )
}
export default Navbar;