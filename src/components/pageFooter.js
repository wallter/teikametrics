import React from 'react';
import PropTypes from 'prop-types';

import {
  Row, Col,
  Button,
  ListGroup, ListGroupItem
  } from 'reactstrap'

const PageFooter = (props) => (
  <footer>
    <Row>
      <Col md="2">
        <ListGroup>
          <ListGroupItem action>Optimize for</ListGroupItem>
          <ListGroupItem action>FBA Insite</ListGroupItem>
          <ListGroupItem action>Sponsored Products</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="2">
        <ListGroup>
          <ListGroupItem action>Sellers</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="2">
        <ListGroup>
          <ListGroupItem action>Agencies</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="2">
        <ListGroup>
          <ListGroupItem action>Resources</ListGroupItem>
          <ListGroupItem action>Webinars & Ebooks</ListGroupItem>
          <ListGroupItem action>Blog</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="2">
        <ListGroup>
          <ListGroupItem action>Company</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="2">
        <Button color={props.planIsYearly ? 'secondary' : 'primary'} className="text-nowrap">Free Demo</Button>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col md="6" className="pt-sm-3">
        <img
          className="img-fluid pt-3 pt-sm-0"
          src='/assets/teikametrics/logo.svg'
          alt="logo" />
        <p className="text-muted pt-2">
          <small>Copyright © 2018 Tyler Wall</small>
        </p>
      </Col>

      <Col md="6" className="pt-sm-3">
        <Row className="pt-3 pt-sm-2 pull-right">
          <Col md={{ size: 3, offset: 1 }}><small>Privacy Policy</small></Col>
          <Col md="4"><small>Terms & Conditions</small></Col>
          <Col md="4">
            <small>
              Made with
              {' '}<img src='/assets/teikametrics/footer/heart.svg' alt="love" />
              {' '}in Boston
            </small>
          </Col>
          <Col md="12">
            <img
              className="float-sm-right p-4"
              src="/assets/teikametrics/footer/socialicons.svg"
              alt="social icons" />
          </Col>
        </Row>
      </Col>

    </Row>
  </footer>
)

PageFooter.propTypes = {
  planIsYearly: PropTypes.bool.isRequired
}

export default PageFooter;
