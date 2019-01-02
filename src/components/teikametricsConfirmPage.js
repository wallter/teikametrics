import React from 'react';

import { Button, Container, Alert } from 'reactstrap';

import TeirConfig from './config/teirConfig'

class TeikametricsConfirmPage extends React.Component {
  state = {
    planIsYearly: false,

    teir: null,
    error: false
  }

  componentDidMount () {
    let { planIsYearly, teirId } = this.props.match.params;
    // @NOTE: both are strings ...

    planIsYearly = ((+planIsYearly) === 1)
    teirId       = (+teirId)

    const [teir] = TeirConfig.filter( t => t.id === teirId );

    console.log('confirm page', { planIsYearly, teirId, teir })

    if (!teir) {
      return this.setState({
        error: 'Error: Could not determine the selected plan teir'
      })
    }

    return this.setState({
      teir,
      planIsYearly
    })
  }


  render() {
    const { error, teir, planIsYearly } = this.state;

    if (!!error) {
      return (
        <Container className="p-5 text-center">
          <Alert color="danger">
            <h1 className="display-4">{error}</h1>
          </Alert>
        </Container>
      )
    } else if (teir === null) {
      return (
        <div className="spinner-border mx-auto p-5" role="status"> </div>
      )
    }

    return (
      <Container className="py-5 text-center">
        <h1 className="display-1">Confirmed</h1>
        <Alert color="success" className="mx-auto">
          <h2 className="m-0">
            {planIsYearly ? 'Yearly' : 'Monthly'}{' '}
            <strong>{teir.title}</strong> plan at{' '}
            <strong>${planIsYearly ? teir.price.yearly : teir.price.monthly}</strong>
          </h2>
        </Alert>
        <Button href="/" block outline color={planIsYearly ? 'secondary' : 'primary'}> {'<'} Pick a New Plan</Button>
      </Container>
    )
  }
}

export default TeikametricsConfirmPage;
