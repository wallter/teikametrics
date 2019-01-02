import React from 'react';
import { Col, Row } from 'reactstrap'

import FeaturedAmazonSellers from './config/featuredAmazonSellers'

const FeaturedSellers = () => {
  return (
    <React.Fragment>
      <Row>
        <h2 className="mx-auto text-center">
          <small className="text-primary">MEET OUR CUSTOMERS</small> <br />
          A few of our growing list of successful Amazon sellers
        </h2>
      </Row>
      <Row>
        <Col md="2" className="mx-auto"><hr className="bg-primary" /></Col>
      </Row>
      <Row className="flex-row align-items-stretch">
        { FeaturedAmazonSellers.map( (highlight, i) => {
          return (
            <Col md="3" className="py-3 py-md-5 px-4 align-self-center" key={i}>
              <img className="d-block mx-auto img-fluid" src={highlight.src} alt={highlight.alt} />
            </Col>
          )
        }) }
      </Row>
    </React.Fragment>
  )
}

export default FeaturedSellers;
