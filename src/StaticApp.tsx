import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from 'pages/Form';
import Home from 'pages/Home';

const StaticApp: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/form" component={Form} />
  </Switch>
)

export default StaticApp;
