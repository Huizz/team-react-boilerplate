import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Form from 'pages/Form';
import Home from 'pages/Home';

const App: React.StatelessComponent<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/form" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default App;
