import React from 'react';
import './App.css';

// To access to the data in the store in a component useSelector hook is required
import { useSelector } from 'react-redux';

const App = () => {

  // The state of the store. Returns a callback fucntion with state from all the reducers. To select a single reducers access like an object
  const accountState = useSelector(state => state.account)

  return (
    <div className='App'>
      App Component
      <p>Store state is: {accountState} </p>

    </div>
  );
};

export default App;


