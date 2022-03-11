// Action creators dispatch actions 
// Actions have two parameters: type and payload. They are dispatched by the action creators and executed by the reducers

const depositMoney = (amount) => {
    return { type: 'deposit', payload: amount }
}

const withdrawMoney = (amount) => {
    return { type: 'withdraw', payload: amount }
}

export { depositMoney, withdrawMoney }