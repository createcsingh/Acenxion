import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom"
import { Card,Form,Row,Col,Button,Container } from 'react-bootstrap';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

function Cassette(){
    useEffect(() => {
        document.title = "Cassette"
     }, []);

     const [fields, setFields] = useState([{ value: null }]);
     const [fieldstwo, setFieldsTwo] = useState([{ value: null }]);

     function handleAdd(which){
        if(which === 'first'){
            const values = [...fields];
            values.push({ value: null });
            setFields(values);
        }else{
            const values = [...fieldstwo];
            values.push({ value: null });
            setFieldsTwo(values);           
        }
    }

     function handleRemove(i,which){
        if(which === 'first'){
            const values = [...fields];
            values.splice(i, 1);
            setFields(values);
        }else{
            const values = [...fieldstwo];
            values.splice(i, 1);
            setFieldsTwo(values);
        }
     }

    return (
        <>
        <div className="layout-right-side">
            <Container>
                <Row className="home-card mt-0">
                    <Col>
                        <Card className="border-0">
                            <Card.Body className="mobile-padding-0">
                                <Card.Title className="mt-0 text-light-blue main-title">SCAN CASSETTE BARCODE</Card.Title>

                                <Form.Label htmlFor="inputCassetteBarcode" className="mt-4 ">Fill Your Cassette Barcode</Form.Label>
                                {fields.map((field, idx) => {
                                    return (
                                    <div key={`${field}-${idx}`} className="cassette-barcode-input">
                                        <Form.Control
                                            type="text"
                                            id="inputCassetteBarcode"
                                            aria-describedby="CassetteBarcodeHelpBlock"
                                            className="mt-1"
                                            placeholder="Cassette Barcode"
                                        />
                                        {idx === 0 ? '' : <p onClick={() => handleRemove(idx,'first')}><IoIcons.IoIosClose /></p>}
                                    </div>
                                    )
                                })}

                                <div className="add-more-barcode mt-0" onClick={() => handleAdd('first')}><IoIcons.IoMdAddCircleOutline className="color-yellow"/><p className="bold-corbel text-dark mb-0">Scan Another Barcode</p></div>

                                <Button variant="warning" type="submit" className="mt-4">
                                        Scan
                                </Button>

                                <div className="add-more-barcode mt-4 border-top border-dark py-3"><Link to={`${process.env.PUBLIC_URL}/cassette/manually`}><FaIcons.FaEdit className="color-yellow" /><p className="mb-0 bold-corbel text-dark">Scanner not working, Enter manually</p></Link></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body className="mobile-padding-0">
                                <Card.Title className="mt-0 text-light-blue main-title">SCAN SAMPLE BARCODE</Card.Title>

                                <Form.Label htmlFor="inputCassetteBarcode" className="mt-4">Fill Your Cassette Barcode</Form.Label>
                                {fieldstwo.map((field, idx) => {
                                    return (
                                        <div key={`${field}-${idx}`} className="cassette-barcode-input">
                                            <Form.Control
                                                type="text"
                                                id="inputCassetteBarcode"
                                                aria-describedby="CassetteBarcodeHelpBlock"
                                                className="mt-1"
                                                placeholder="Cassette Barcode"
                                            />
                                            {idx === 0 ? '' : <p onClick={() => handleRemove(idx,'second')}><IoIcons.IoIosClose /></p>}
                                        </div>
                                    )
                                })}

                                <div className="add-more-barcode mt-0" onClick={() => handleAdd('second')}><IoIcons.IoMdAddCircleOutline className="color-yellow" /><p className="bold-corbel text-dark mb-0">Scan Another Barcode</p></div>

                                <Button variant="warning" type="submit" className="mt-4">
                                    Scan
                                </Button>

                                <div className="add-more-barcode mt-4 border-top border-dark py-3"><Link to={`${process.env.PUBLIC_URL}/cassette/manually`}><FaIcons.FaEdit className="color-yellow" /><p className="mb-0 bold-corbel text-dark">Scanner not working, Enter manually</p></Link></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button variant="primary" type="submit" className="mt-4 mobile">
                        <Link to={`${process.env.PUBLIC_URL}/cassette/result`}>Submit</Link>
                    </Button>
                </div>
            </Container>
            </div>
        </>
    )
}

export default Cassette;