import React, { useContext } from "react"
import styled from "styled-components";
// import axios from "axios"
// import swal from "sweetalert"
import { Container, Row, Col, Form, FormGroup, Label} from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { Button } from "../../components/Button"
import background from "../../assets/images/register-bg.webp"
import './Login.css';

const Wrapper = styled.section`
    height: 100vh;
    margin: 50px 0;
`

const Title = styled.h1`
    color: #F6FFF8;
`

const Login = () => {

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
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <Col style={styles.colStyleLeft} className="d-none d-lg-block"><img src={background} style={{ width: "100%", height: "100vh", borderRadius: "25px 0px 0px 25px", objectFit: "cover" }} alt="register" /></Col>
                        <Col style={styles.colStyleRight} className="d-sm-block">
                            <Row style={styles.rowStyleRight}>
                                <Title>Login Account</Title>
                                {/* <Row style={{ marginBottom: "100px" }}>
                                    <Col><i className="fab fa-google fa-2x" style={{ color: "#353535" }}></i></Col>
                                    <Col><i className="fab fa-facebook fa-2x" style={{ color: "#353535" }}></i></Col>
                                    <a href="/oAuth/google/login">
                                        <GoogleButton>Google</GoogleButton>
                                    </a>
                                    <div>
                                        <GoogleLogin
                                            clientId={"GOOGLE_CLIENT_ID"}
                                            buttonText="Register"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={"single_host_origin"}
                                        />
                                    </div>
                                </Row> */}
                                <Form>
                                    <AvForm>
                                        <Label for="exampleEmail" sm={6} style={styles.labelAv}>Email address</Label>
                                        <AvField name="emailProp" placeholder="Your email" type="text" validate={{ email: true }}/>
                                    </AvForm>
                                    <AvForm>
                                        <Label for="examplePassword" sm={6} style={styles.labelAv}>Password</Label>
                                        <AvField name="password" type="password" placeholder="Your password" validate={{
                                            required: { value: true, errorMessage: 'Please enter a password' },
                                            pattern: { value: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])', errorMessage: 'Must be contain at least 1 lowercase, 1 uppercase, 1 numberic, 1 special character' },
                                            minLength: { value: 10, errorMessage: 'Must be 10 characters or longer' }
                                        }}/>
                                    </AvForm>
                                    <FormGroup check row>
                                        <Col sm={{ size: 2, offset: 2 }}>
                                            <Button Primary>Sign in</Button>
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

export default Login