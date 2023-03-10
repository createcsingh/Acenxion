import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom"
import { Button,Modal,Container,Row,Col,Card } from 'react-bootstrap';
import Media from '../../../assets/index';

function ReaderStatus(){
    useEffect(() => {
        document.title = "Reader Status"
     }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="layout-right-side">
        <Container>
            <h2 className="main-title text-center mb-5 text-light-blue">Rack 1</h2>
            
                <Row className="home-card mx-auto">
                    <Col>
                        <Card onClick={handleShow}>
                            <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>

                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

            
            </Container>
            </div>
            </>
            )
        }

export default ReaderStatus;