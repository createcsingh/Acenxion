import React from "react";
import { Card,Container,Row,Form,Button } from 'react-bootstrap'

function Login(){

    return (
        <>
        <div className="layout-right-side">
        <Container>
        <Row className="justify-content-md-center align-items-center manually-card">
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                <Card.Title className="mt-2 text-light-blue main-title mb-4 text-uppercase justify-content-center login-title">LAB LOG IN </Card.Title>
                
                <Form noValidate validated="" onSubmit="">
                            <Form.Control
                            type="text"
                            id="uname"
                            aria-describedby="usernameHelpBlock"
                            className="mt-3"
                            placeholder="Username"
                            required
                    />   
                    <Form.Control
                            type="password"
                            id="inputPinPassword"
                            aria-describedby="PinPasswordHelpBlock"
                            className="mt-3"
                            placeholder="Password"
                            required
                    />                                               
                <div class="d-flex mx-auto justify-content-center">  
               
                <Button  type="submit" className="mt-2 d-flex justify-content-center cancel-btn ">Cancel
                </Button>
                <Button variant="warning" type="submit" className="mt-2 d-flex justify-content-center  mx-2">Ok
                </Button>
                </div>  
                </Form> 
            </Card.Body>
        </Card>
    </Row>
            </Container>
            </div>
        </>
    )
}

export default Login;