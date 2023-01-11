import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';


function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>0</h1>
      <button>Deposit</button>
      <button>Withdraw</button>
      <button>Bankrupt</button>
    </div>
  );
}

export default App;
