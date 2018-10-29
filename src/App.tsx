import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store  } from 'redux'; 
import reduxThunk from 'redux-thunk';

import { IState, state } from 'services/reducer';

import './App.css';

import StaticApp from './StaticApp';


const store:Store<IState> = createStore(
  state,
  compose(
      applyMiddleware(reduxThunk)
  )
)

const App: React.StatelessComponent<{}> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StaticApp />
    </BrowserRouter>
  </Provider>
);

export default App;
