import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const initialState = {
  count: 0,
  isBoolean: false
}

// initialState created above is set as a default argument if state is not provided
const countReducer = (state = initialState, action) => {
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

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE':
    state.isBoolean = !state.isBoolean;
    console.log('TOGGLE', state.isBoolean);
    break;
    default:
      return state;
  }
  return state;
}

const myLogger = (store) => (next) => (action) => {
  console.log(`Logged Action: ${action.type}`);
  next(action);
}

// a secondary argument can be used to pass in an initialState
const store = createStore(
  combineReducers({countReducer, uiReducer}),
  {},
  applyMiddleware(myLogger)
);

store.subscribe(() => {
  console.log('Store updated!', store.getState());
});

function exampleReduxStateUpdate () {
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

  for (let i = 0; i <= 2; i++) {  
    store.dispatch({
      type: 'TOGGLE',
      payload: 1
    });
  }
}

exampleReduxStateUpdate();