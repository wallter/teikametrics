import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TeikametricsIndexPage from './components/teikametricsIndexPage';
import TeikametricsConfirmPage from './components/teikametricsConfirmPage';

import './styles/app.scss'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={TeikametricsIndexPage} />
        <Route exact path="/confirm/:planIsYearly/:teirId" component={TeikametricsConfirmPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
