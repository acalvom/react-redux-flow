import React from 'react';
import './App.css';
import { accountCreators, usersCreators } from './../redux/index';
import { useState } from 'react';

// To access to the data in the store in a component useSelector hook is required
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  // The state of the store. Returns a callback fucntion with state from all the reducers. To select a single reducers access like an object
  const accountState = useSelector(state => state.account);
  const usersState = useSelector(state => state.users);

  const [age, setAge] = useState(null);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <p>Store state is: {accountState} </p>
        <button onClick={() => dispatch(accountCreators.depositMoney(10))}>Deposit</button>
        <button onClick={() => dispatch(accountCreators.withdrawMoney(10))}>Withdraw</button>
      </div>
      <div>
        <p>User role is: {usersState.role} </p>
        <input type="checkbox" id="toggleRole" onClick={() => dispatch(usersCreators.toogleRole())} />
        <label htmlFor="toggleRole">Set Admin</label>
        <p>User age is: {usersState.age} </p>
        <label htmlFor="age">User age</label>
        <input id="age" onChange={(evt) => setAge(parseInt(evt.target.value))} /> <br />
        <button onClick={() => dispatch(usersCreators.setAge(age))}>Set Age</button>
      </div>
    </div>
  );
};

export default App;


