import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { Col, Row  } from 'react-bootstrap'
import logo from '../assets/images/logo.png';

import './Footer.css';

const FooterHolder = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: whitesmoke;
`;

const Footer = () => {
  const styles = {
    liStyle : {
        listStyleType: 'none',
        margin: '10px',
        padding: '5px',
    },
    aStyle : {
        color: '#333',
        textDecoration: 'none',
        fontSize: '15px'
    }
}
    return(
        <footer className="bg-whitesmoke mt-5">
          <div className="container-fluid p-3 ">        
            
            <Row>
              <Col>
              <     div>
                        <img src={logo} style={{height: "5.5rem"}} alt="logo"/>
                    </div>
              </Col>
              <Col xs={5}>
                    <FooterHolder>
                            <li style={styles.liStyle}>
                                <Link to="/" style={styles.aStyle}> eofinder.com </Link>
                            </li>
                            <li style={styles.liStyle}>
                                <Link to="/about" style={styles.aStyle}> Privacy </Link>
                            </li>
                            <li style={styles.liStyle}>
                                <Link to="/login" style={styles.aStyle}> Cookie Preferences </Link>
                            </li>
                            <li style={styles.liStyle}>
                                <Link to="/register" style={styles.aStyle}> Help Center </Link>
                            </li>          
                    </FooterHolder>
              </Col>
              <Col>
                    <Row className="d-flex justify-content-end">                    
                      <div className="column">
                          <h5 className="mr-2">FOLLOW US</h5>                    
                          <div className="baris">                 
                              <div className="icon">
                                  <a href="/" className="mr-2">
                                        <div>
                                            <svg>
                                                <g fill="none" fill-rule="evenodd">
                                                    <circle fill="#221F1F" cx="17" cy="17" r="17"></circle>
                                                    <path d="M17.894 22.998v-5.473h1.77l.264-2.133h-2.034v-1.361c0-.618.166-1.039 1.018-1.039H20v-1.908A14.023 14.023 0 0 0 18.415 11c-1.568 0-2.641.994-2.641 2.82v1.572H14v2.133h1.774v5.473h2.12z" fill="#FFF"></path>
                                                </g>
                                            </svg>
                                        </div>
                                  </a>
                                  <a href="/" className="mr-2">
                                        <div>
                                            <svg><g fill="none" fill-rule="evenodd"><circle fill="#221F1F" cx="17" cy="17" r="17"></circle><path d="M17 10c1.901 0 2.14.008 2.886.043.745.035 1.254.157 1.7.336.46.184.85.43 1.24.831.388.401.628.803.806 1.277.174.459.292.983.326 1.75.034.77.042 1.015.042 2.973s-.008 2.204-.042 2.973c-.034.767-.152 1.291-.326 1.75a3.546 3.546 0 0 1-.807 1.277c-.389.4-.78.647-1.24.832-.445.178-.954.3-1.699.335-.747.035-.985.043-2.886.043-1.901 0-2.14-.008-2.886-.043-.745-.035-1.254-.157-1.7-.335-.46-.185-.85-.431-1.24-.832-.388-.4-.628-.803-.807-1.277-.173-.459-.29-.983-.325-1.75-.034-.77-.042-1.015-.042-2.973s.008-2.204.042-2.973c.034-.767.152-1.291.325-1.75.18-.474.419-.876.808-1.277.389-.4.78-.647 1.24-.831.445-.179.954-.3 1.699-.336.747-.035.985-.043 2.886-.043zm0 1.3c-1.87 0-2.09.006-2.829.041-.682.032-1.053.15-1.3.248-.326.131-.56.287-.804.54a2.242 2.242 0 0 0-.524.829c-.096.254-.21.636-.241 1.339-.034.76-.04.988-.04 2.913 0 1.925.006 2.153.04 2.914.031.703.145 1.084.241 1.338.127.337.279.577.524.83.245.252.478.408.805.539.246.098.617.216 1.3.248.737.035.959.042 2.828.042 1.87 0 2.09-.007 2.829-.042.682-.032 1.053-.15 1.3-.248.326-.131.56-.287.804-.54.245-.252.397-.492.524-.829.096-.254.21-.635.24-1.338.035-.76.042-.989.042-2.914 0-1.925-.007-2.153-.041-2.913-.031-.703-.145-1.085-.241-1.34a2.242 2.242 0 0 0-.524-.828 2.164 2.164 0 0 0-.805-.54c-.246-.098-.617-.216-1.3-.248-.738-.035-.959-.042-2.828-.042zm-.174 8.014c1.29 0 2.334-1.077 2.334-2.404s-1.045-2.403-2.334-2.403c-1.288 0-2.333 1.076-2.333 2.403s1.045 2.404 2.333 2.404zm0-6.106c1.986 0 3.595 1.657 3.595 3.702s-1.61 3.703-3.595 3.703-3.594-1.658-3.594-3.703 1.61-3.702 3.594-3.702zm4.55-.212a.853.853 0 0 1-.84.865.853.853 0 0 1-.84-.865c0-.478.375-.866.84-.866.463 0 .84.388.84.866z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
                                        </div>
                                  </a>
                                  <a href="/" className="mr-2">
                                      <div>
                                      <svg><g fill="none" fill-rule="evenodd"><circle fill="#221F1F" cx="17" cy="17" r="17"></circle><path d="M14.403 23.346c5.283 0 8.172-4.557 8.172-8.509 0-.129-.002-.258-.008-.386A5.983 5.983 0 0 0 24 12.902a5.56 5.56 0 0 1-1.65.471 2.983 2.983 0 0 0 1.264-1.654 5.62 5.62 0 0 1-1.824.726 2.818 2.818 0 0 0-2.097-.945c-1.586 0-2.873 1.34-2.873 2.99 0 .235.026.463.075.682-2.387-.125-4.504-1.315-5.92-3.124a3.075 3.075 0 0 0-.39 1.503c0 1.037.508 1.953 1.279 2.489a2.766 2.766 0 0 1-1.301-.374v.038c0 1.449.99 2.658 2.303 2.932a2.774 2.774 0 0 1-1.297.051c.366 1.188 1.426 2.053 2.684 2.077A5.62 5.62 0 0 1 10 22.003a7.9 7.9 0 0 0 4.403 1.343" fill="#FFF" fill-rule="nonzero"></path></g></svg>
                                      </div>
                                  </a>
                                  <a href="/" className="mr-2">
                                      <div>
                                      <svg><circle fill="#221F1F" cx="17" cy="17" r="17"></circle><path d="M16.77 11c.23 0-5.091 0-6.432.462a1.626 1.626 0 0 0-1.379 1.384C8.5 14.22 8.5 17 8.5 17s0 2.795.46 4.154c.086.702.66 1.281 1.378 1.384C11.693 23 17 23 16.77 23c.23 0 5.551 0 6.892-.462a1.597 1.597 0 0 0 1.379-1.384c.459-1.359.459-4.14.459-4.154 0 .014.014-2.781-.46-4.154-.086-.702-.66-1.281-1.378-1.384C22.321 11 17 11 16.77 11zm-1.378 3.692l4.135 2.539-4.135 2.538v-5.077z" fill="#FFF" fill-rule="nonzero"></path></svg>
                                      </div>
                                  </a>
                                  <a href="/" className="mr-2">
                                      <div>
                                      <svg><g fill="none" fill-rule="evenodd"><circle fill="#221F1F" cx="17" cy="17" r="17"></circle><path d="M21.345 21.226h-1.798V18.44c0-.665-.014-1.519-.936-1.519-.937 0-1.08.724-1.08 1.47v2.834h-1.8v-5.727h1.727v.782h.025c.24-.45.828-.925 1.704-.925 1.822 0 2.158 1.186 2.158 2.728v3.142zm-7.645-6.51a1.038 1.038 0 0 1-1.043-1.032c0-.57.466-1.032 1.043-1.032.576 0 1.044.463 1.044 1.032 0 .57-.468 1.032-1.044 1.032zm-.9 6.51v-5.727H14.6v5.727H12.8zM22.242 11H11.896c-.494 0-.896.388-.896.865v10.27c0 .477.402.865.896.865h10.346c.495 0 .9-.388.9-.866v-10.27c0-.476-.405-.864-.9-.864z" fill="#FFF" fillrule="nonzero"></path></g></svg>
                                      </div>
                                  </a>
                                  <a href="/" className="mr-2">
                                  <div>
                                  <svg><g fill="none" fill-rule="evenodd"><circle fill="#221F1F" cx="17" cy="17" r="17"></circle><path d="M19.363 23.644h.135c1.35-.453 2.499-1.23 3.377-2.33 1.418-1.746 1.958-3.752 1.553-5.887-.338-1.747-1.283-3.17-2.701-4.335a7.36 7.36 0 0 0-3.917-1.553c-.878-.065-1.689-.065-2.5.13-1.755.387-3.173 1.293-4.254 2.652-.81 1.035-1.35 2.2-1.486 3.494-.135.841-.067 1.682.135 2.523.406 1.683 1.283 3.041 2.702 4.141.608.453 1.35.841 2.093 1.1.135.065.203 0 .203-.13 0-.129 0-.258-.068-.387-.067-.195 0-.389-.27-.453a6.122 6.122 0 0 1-2.634-1.941c-1.283-1.553-1.688-3.365-1.283-5.306.338-1.424 1.148-2.588 2.364-3.559 1.553-1.164 3.377-1.617 5.335-1.294 1.486.259 2.77.906 3.782 2.006 1.418 1.553 1.959 3.43 1.553 5.435-.405 2.07-1.62 3.559-3.579 4.464-.27.13-.473.26-.473.583 0 .259-.067.453-.067.647zm-4.12-1.359c.068.712.203 1.424.338 2.2.067.259.135.518.338.712a1.663 1.663 0 0 0 1.553.194c.54-.13.675-.518.743-.97.135-.712.202-1.489.337-2.2.135-.777.203-1.618.135-2.395a.933.933 0 0 0-.472-.84c-.743-.518-1.959-.518-2.702-.065-.337.194-.54.452-.54.84v.583l.27 1.941zm6.821-5.564c0-.194 0-.453-.067-.647-.203-1.294-.81-2.33-1.891-3.106-1.216-.906-2.567-1.23-4.12-.97-1.216.194-2.229.776-2.971 1.682-1.013 1.164-1.351 2.523-1.081 4.011.27 1.294.945 2.33 2.094 3.041.067 0 .135 0 .135.065 0-.065.067-.13.067-.194v-.647c0-.13-.067-.259-.135-.388-.81-.777-1.216-1.683-1.216-2.718 0-1.1.406-2.07 1.149-2.847.945-.906 2.16-1.294 3.511-1.164a3.988 3.988 0 0 1 2.567 1.358c.81.906 1.08 2.006.945 3.17a3.633 3.633 0 0 1-1.215 2.2.483.483 0 0 0-.136.26v.711c0 .065 0 .13.068.194.068 0 .135-.064.203-.064 1.35-.906 2.026-2.265 2.093-3.947zM17 14.52c-.878-.065-1.756.647-1.756 1.682 0 .97.81 1.682 1.756 1.682s1.756-.647 1.824-1.682c-.068-1.035-.946-1.682-1.824-1.682z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
                                  </div>
                              </a>
                              </div>                  
                          </div>            
                      </div>
                  </Row>
              </Col>
            </Row>
          </div>
        </footer>
    );
}

export default Footer;

