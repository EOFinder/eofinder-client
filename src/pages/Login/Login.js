import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import swal from "sweetalert"
import { Container, Row, Col, Form, FormGroup, Label} from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { Button } from "../../components/Button"
import background from "../../assets/images/register-bg.webp"
import './Login.css';

import {loginUser} from '../../actions/userAction';

const Wrapper = styled.section`
    height: 100vh;
    margin: 50px 0;
`

const Title = styled.h1`
    color: #F6FFF8;
`

const Login = (props) => {
    console.log(props);
    const styles = {
        rowStyleRight: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
        },
        colStyleLeft: {
            padding: "0px",
            background: "#3C6E71",
            border: "2px solid #C3C6E71",
            borderRadius: "25px 0px 0px 25px",
            boxShadow: "0px 5px 20px #888888"
        },
        colStyleRight: {
            padding: "0px",
            background: "#3C6E71",
            border: "2px solid #3C6E71",
            borderRadius: "0px 25px 25px 0px",
            boxShadow: "0px 5px 20px #888888"
        },
        label: {
            color: "#F6FFF8"
        },
        labelAv: {
            color: "#F6FFF8",
            paddingLeft: "0"
        }
    }

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        errors: {}
    })
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            email: userData.email,
            password: userData.password
        };
        props.loginUser(user, props.history)
    }
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <Col style={styles.colStyleLeft} className="d-none d-lg-block"><img src={background} style={{ width: "100%", height: "100vh", borderRadius: "25px 0px 0px 25px", objectFit: "cover" }} alt="register" /></Col>
                        <Col style={styles.colStyleRight} className="d-sm-block">
                            <Row style={styles.rowStyleRight}>
                                <Title>Login Account</Title>
                                <Form type="submit" onSubmit={handleSubmit}>
                                    <AvForm>
                                        <Label for="exampleEmail" sm={6} style={styles.labelAv}>Email address</Label>
                                        <AvField name="email" placeholder="Your email" type="text" validate={{ email: true }} onChange={handleChange} value={userData.email}/>
                                    </AvForm>
                                    <AvForm>
                                        <Label for="examplePassword" sm={6} style={styles.labelAv}>Password</Label>
                                        <AvField name="password" type="password" placeholder="Your password" value={userData.password} onChange={handleChange}
                                         />
                                    </AvForm>
                                    <FormGroup check row>
                                        <Col sm={{ size: 2, offset: 2 }}>
                                            <Button type="submit" Primary>Sign in</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>

        </>
    )

}
const mstp = (state) => {
    return{
        auth: state.user,
        error: state.error
    }
}


export default connect(mstp, { loginUser })(withRouter(Login))