
import { faClock, faLock, faTruckPickup, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  Col, Row, Container } from "react-bootstrap";
// import Row from 'react-bootstrap/Row';
export default function Banner() {
    return (
        <Container fluid className='bg-white'>
            <Row className='p-5'>
                <Col md={3} sm={2} className="d-flex flex-column">
                    <div>
                <FontAwesomeIcon icon={faTruckPickup} size="lg" style={{margin: "2px 25%", width: "50%"}}/>
                    </div>
                    <h5 className='text-center mt-4'>Fast & Free Delivery</h5>
                    <div className='text-center'>Free delivery on all orders</div>
                </Col>

                <Col md={3} sm={2} className="d-flex flex-column">
                    <div>
                        <FontAwesomeIcon icon={faLock} size="lg" style={{ margin: "2px 25%", width: "50%" }} />
                    </div>
                    <h5 className='text-center mt-4'>Secure Payment</h5>
                    <div className='text-center'>Free delivery on all orders</div>
                </Col>
                <Col md={3} sm={2} className="d-flex flex-column">
                    <div>
                        <FontAwesomeIcon icon={faWallet} size="lg" style={{ margin: "2px 25%", width: "50%" }} />
                    </div>
                    <h5 className='text-center mt-4'>Money Back Guarantee</h5>
                    <div className='text-center '>Free delivery on all orders</div>
                </Col>
                <Col md={3} sm={2} className="d-flex flex-column">
                    <div>
                        <FontAwesomeIcon icon={faClock} size="lg" style={{ margin: "2px 25%", width: "50%" }} />
                    </div>
                    <h5 className='text-center mt-4'>Online Support</h5>
                    <div className='text-center'>Free delivery on all orders</div>
                </Col>

            </Row>

        </Container>
    )
}