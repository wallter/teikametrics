import React from 'react';
import PropTypes from 'prop-types';

import {
  Col, Row,
  Card, CardHeader, CardBody,
  CardTitle, CardSubtitle, CardText,
  Button
  } from 'reactstrap'

import TeirConfig from './config/teirConfig'

const TeirSelection = (props) => {
  const { planIsYearly } = props;

  return (
    <Row className="pricing-cards text-center">
      { TeirConfig.map( (tier, i) => (
        <Col md="3" className="pricing-card p-0 m-0 mb-3" key={i}>
          <Card className={'border-0'}>
            <CardHeader className={'text-white ' + (planIsYearly ? 'bg-secondary' : 'bg-primary')}>
              {tier.title}
            </CardHeader>
            <CardBody>
              <CardTitle className="display-4">${ (planIsYearly) ? tier.price.yearly : tier.price.monthly}</CardTitle>
              <CardSubtitle>per {planIsYearly ? 'year' : 'month'}</CardSubtitle>
              <hr />
              <CardText>
                {tier.spend.verb}{' '}
                ${tier.spend.spend}{' '}
                a {planIsYearly ? 'year' : 'month'}{' '}
                in advertising spend.
              </CardText>
              <Button outline
                className="mx-3"
                color={planIsYearly ? 'secondary' : 'primary'}
                onClick={() => props.handleSelectPlan(tier)}>
                Select Plan
              </Button>
            </CardBody>
          </Card>
        </Col>
      ) ) }
    </Row>
  )
}

TeirSelection.propTypes = {
  planIsYearly: PropTypes.bool.isRequired,
  handleSelectPlan: PropTypes.func.isRequired
}

export default TeirSelection;
