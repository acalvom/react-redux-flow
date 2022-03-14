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
      <div style={{ width: "300px", margin: "10px auto", padding: "5px", border: "2px solid black" }}>
        User requirements
        <p>Current user is <strong>{usersState.role}</strong> and {usersState.age > 17 ? <strong>is</strong> : <strong>is not</strong>} an adult</p>
        <input type="checkbox" id="toggleRole" onClick={() => dispatch(usersCreators.toogleRole())} />
        <label htmlFor="toggleRole">Admin</label> <br />
        <label htmlFor="age">User age: </label>
        <input id="age" onChange={(evt) => setAge(parseInt(evt.target.value))} style={{ margin: "auto 5px", width: "50px" }} />
        <button onClick={() => dispatch(usersCreators.setAge(age))}>Set Age</button>
      </div>

      <div>
        {
          usersState.role === 'admin' && usersState.age > 17 ?
            <div>
              <p>Store state is: {accountState} </p>
              <button onClick={() => dispatch(accountCreators.depositMoney(10))}>Deposit</button>
              <button onClick={() => dispatch(accountCreators.withdrawMoney(10))}>Withdraw</button>
            </div>
            : usersState.role === 'admin' ?
              <p>Store state is: {accountState} </p>
              : <p>You cannot see the account</p>
        }
      </div>
      <div>

      </div>
    </div>
  );
};

export default App;


