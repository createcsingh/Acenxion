import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom"
import { Container,Card,Button,Form,Row } from "react-bootstrap";

function CassetteManually(){
    useEffect(() => {
        document.title = "Cassette Enter Manually"
     }, []);

    const [validated, setValidated] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            navigate(process.env.PUBLIC_URL+'/cassette/result');
        }

        setValidated(true);
    };

    return (
        <>
        <div className="layout-right-side">
            <Container className="">
            <Row className="justify-content-md-center align-items-center manually-card">
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title className="mt-2 text-light-blue main-title mb-5">CASSETTE BARCODES</Card.Title>
                        <Card.Text className="text-dark info-text border-bottom  pb-4 mb-2">Enter manually information</Card.Text>
                        <Card.Text className="mt-4 pt-1 text-dark">Fill your Cassette Barcode Information</Card.Text>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Control
                                    type="text"
                                    id="inputSampleInfo"
                                    aria-describedby="SampleInfoHelpBlock"
                                    className="mt-3"
                                    placeholder="Sample Information"
                                    required
                            />

                            <Form.Control
                                    type="text"
                                    id="inputConceptInfo"
                                    aria-describedby="ConceptInfoHelpBlock"
                                    className="mt-3"
                                    placeholder="Concept Information"
                                    required
                            />

                            <Form.Control
                                    type="text"
                                    id="inputIDandBatch"
                                    aria-describedby="IDandBatchHelpBlock"
                                    className="mt-3"
                                    placeholder="Person's ID and Batch"
                                    required
                            />                                               

                            <Button variant="warning" type="submit" className="mt-3">Submit
                            </Button>
                        </Form> 
                    </Card.Body>
                </Card>
            </Row>
            </Container>
            </div>
        </>
    )
}

export default CassetteManually;