import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const initialState = {
  count: 0
}

// initialState created above is set as a default argument if state is not provided
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      state.count = state.count + action.payload;
      console.log('ADD');
      break;
    case 'SUBTRACT':
      console.log('SUBTRACT');
      state.count = state.count - action.payload;
      break;
    default:
      return state;
  }
  return state;
}

// a secondary argument can be used to pass in an initialState
const store = createStore(reducer);

store.subscribe(() => {
  console.log('Store updated!', store.getState());
});

for (let i = 0; i <= 9; i++) {
  store.dispatch({
    type: 'ADD',
    payload: 1
  });
}

for (let i = 0; i <= 2; i++) {
  store.dispatch({
    type: 'SUBTRACT',
    payload: 1
  });
}