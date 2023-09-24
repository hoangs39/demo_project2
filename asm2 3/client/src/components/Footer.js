// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import { Footer3 } from './Footer3';
export const Footer = () => {
  return (
    <div className='bg-light'>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-between'>
          <Col md={5}>
            <div className='d-flex mt-5'>
              <h4>Subscribe Newsletter</h4>
              <p>Subscribe newsletter to get 5% on all products.</p>
            </div>

          </Col>

          <Col md={5}>
              <div className='d-flex mt-5'>
              <input className='p-3 border-0' placeholder='Enter Your Email'></input>
                  <button className='p-3 mx-3 bg-danger border-0 text-center text-white'>Subcribe</button>
              </div>
          </Col>
        </Row>

      </Container>
      <Container className=" bg-sky pt-3" >
        <div className="text-md-start mt-2">
          <Row className="mt-3" style={{ backgroundColor: "#e6e9eb" }}>
            <Col sm={12} md={6} className="mx-auto mb-4 mt-2" >
              <h5 className="text-uppercase fw-bold mb-4 ">
                Contact Us
              </h5>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Hotline & Online chat {"(24/7)"}</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Help Center</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>How To Buy</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Shipping and Delivery</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>International Product Policy</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>How To Return</Link></p>
            </Col>

            <Col sm={12} md={6} className="mx-auto mb-4 mt-2">
              <h5 className="text-uppercase fw-bold mb-4">LAZADA VIETNAM</h5>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>All Categories</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>About Lazada</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Sell on Lazada</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Afﬁliate Program</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Careers</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>{"Terms & Conditions"}</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Privacy Policy</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>{"Press & Media"}</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Intellectual Property Protection</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>Operating Regulation</Link></p>
              <p><Link to="/" className="text-reset" style={{ textDecoration: "none" }}>{"Procedure of claim and dispute handling"}</Link></p>
            </Col>

          </Row>
        </div>

        <Footer3 />
      </Container>
    </div>
  )
}
