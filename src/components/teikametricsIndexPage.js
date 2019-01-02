import React from 'react';
import { withRouter } from 'react-router-dom'
import Switch from 'react-toggle-switch'

import TeirSelection from './teirSelection';
import FeaturedSellers from './featuredSellers';
import ProductFeatures from './productFeatures'
import PageFooter from './pageFooter';

import { Container, Row, Col, Button } from 'reactstrap'

class TeikametricsIndexPage extends React.Component {
  state = {
    planIsYearly: false
  }

  togglePlan(e) {
    this.setState({ planIsYearly: !this.state.planIsYearly })
  }

  render() {
    const { planIsYearly } = this.state;

    return (
      <Container fluid className="pb-4">
        <section>
          <Row>
            <img className=" mx-auto" src="/assets/teikametrics/logo.svg" alt="teikametrics logo" />
          </Row>
        </section>

        <section>
          <Row>
            <Col md={{ size: 5, offset: 2 }}>
              <h1 className="h4 text-center text-md-left">
                <small className={'text-uppercase ' + (planIsYearly ? 'text-secondary' : 'text-primary')}>Our Simple Pricing Structure</small> <br />
                <span className="display-4">Select the plan that  matches your business</span>
              </h1>
            </Col>
            <Col md={{ size: 4, offset: 1}} className="d-flex align-items-end justify-content-center">
              <div className="d-flex align-items-center">
                <span>Monthly Plan</span>
                <Switch
                  className="mx-2"
                  onClick={(e) => this.togglePlan(e)} on={this.state.planIsYearly} />
                <span className={planIsYearly ? 'text-secondary' : 'text-muted'}>
                  Yearly Plan - save 20%
                </span>
              </div>
            </Col>
          </Row>
        </section>

        <section>
          <TeirSelection
            planIsYearly={planIsYearly}
            handleSelectPlan={(teir) => this.handleSelectPlan(teir)}>
          </TeirSelection>
        </section>

        <section>
          <Row>
            <h2 className="mx-auto display-4 pb-3">Are you an Agency?</h2>
          </Row>
          <Row>
            <p className="mx-auto pb-3">
              We’d love to talk with you about your Sponsored Products needs!
            </p>
          </Row>
          <Row>
            <Button
              outline
              color={planIsYearly ? 'secondary' : 'primary'}
              className="mx-auto">
              Contact us{' '}
              <img
                src={'/assets/teikametrics/arrows/' + (planIsYearly ? 'purple' : 'blue') + '_arrow.svg'}
                alt=""/>
          </Button>
          </Row>
        </section>

        <section>
          <ProductFeatures></ProductFeatures>
        </section>

        <section>
          <FeaturedSellers></FeaturedSellers>
        </section>

        <section>
          <PageFooter planIsYearly={planIsYearly}></PageFooter>
        </section>

      </Container>
    )
  }

  handleSelectPlan(teir) {
    const teirId = teir.id,
          planIsYearly = this.state.planIsYearly ? '1' : '0';

    this.props.history.push(`/confirm/${planIsYearly}/${teirId}`)
  }
}



export default withRouter(TeikametricsIndexPage);
