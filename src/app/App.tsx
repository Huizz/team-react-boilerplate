import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store } from 'redux'; 
import reduxThunk from 'redux-thunk';

import { IState, state } from 'app/services/reducer';

// import Form from 'app/pages/Form';
// import Home from 'app/pages/Home';
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
