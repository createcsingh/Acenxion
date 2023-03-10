import React,{useEffect} from "react";
import {Link} from "react-router-dom"
import { Container,Card,Button,Row } from "react-bootstrap";

function CassetteResult(){
    useEffect(() => {
        document.title = "Cassette Result"
     }, []);

    return (
        <>
        <div className="layout-right-side">
            <Container className="text-center">
            <Row className="justify-content-md-center align-items-center  manually-card ">
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title className="mt-4 text-light-blue main-title text-center mb-4">PLEASE PROCEED TO READER</Card.Title>
                        
                        <div className="casette-result my-2"><Card.Text>14-A</Card.Text></div>                                       

                        <Button variant="warning" type="submit" className="mt-4">
                            <Link to={`${process.env.PUBLIC_URL}/cassette/result`}>Run</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </Row>
            </Container>
            </div>
        </>
    )
}

export default CassetteResult;