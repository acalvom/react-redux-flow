// Action creators dispatch actions 
// Actions have two parameters: type and payload. They are dispatched by the action creators and executed by the reducers

const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({ 
            type: 'deposit', 
            payload: amount 
        });
    }
}

const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({ 
            type: 'withdraw', 
            payload: amount 
        });
    }
}

export { depositMoney, withdrawMoney }