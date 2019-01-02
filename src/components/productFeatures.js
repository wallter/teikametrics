import React from 'react';
import { Col, Row } from 'reactstrap'

import ProductFeaturesConfig from './config/productFeaturesConfig'

const ProductFeatures = () => {
  return (
    <React.Fragment>
      <Row>
        <h2 className="text-left pb-3">Included in all plans</h2>
      </Row>
      <Row className="text-left">
        { ProductFeaturesConfig.map( (plan, i) => (
            <Col key={i} md="4" className="pt-4">
              <Row>
                <Col md="1">
                  <img className="d-block mx-auto mb-2 mb-md-0" src={plan.icon} alt={plan.title} />
                </Col>
                <Col md="11" className="text-center text-md-left">
                  <h5 className="text-primary mb-2"> {plan.title} </h5>
                  <p>{plan.text}</p>
                </Col>
              </Row>
            </Col>
          ) ) }
      </Row>
    </React.Fragment>
  )
}

export default ProductFeatures;
