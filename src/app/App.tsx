import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store  } from 'redux'; 
import reduxThunk from 'redux-thunk';

import { IState, state } from 'app/services/reducer';

import Form from 'app/pages/Form';
import Home from 'app/pages/Home';

import './App.css';


const store:Store<IState> = createStore(
  state,
  compose(
      applyMiddleware(reduxThunk)
  )
)

const App: React.StatelessComponent<{}> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
