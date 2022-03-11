import React from 'react';
import './App.css';
import { actionCreators } from './../redux/index';

// To access to the data in the store in a component useSelector hook is required
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  // The state of the store. Returns a callback fucntion with state from all the reducers. To select a single reducers access like an object
  const accountState = useSelector(state => state.account);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      App Component
      <p>Store state is: {accountState} </p>
      <button onClick={() => dispatch(actionCreators.depositMoney(10))}>Deposit</button>
      <button onClick={() => dispatch(actionCreators.withdrawMoney(10))}>Withdraw</button>
    </div>
  );
};

export default App;


