// Action creators dispatch actions 
// Actions have two parameters: type and payload. They are dispatched by the action creators and executed by the reducers

const toogleRole = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'toogleRole'
        });
    }
}

const setAge = (age) => {
    return (dispatch) => {
        dispatch({ 
            type: 'setAge', 
            payload: age 
        });
    }
}

export { toogleRole, setAge }