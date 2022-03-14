const initialState = {
    role: 'viewer',
    age: 0
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case "toogleRole":
            return { ...state, role: state.role === 'admin' ? 'viewer' : 'admin' };

        case "setAge":
            return { ...state, age: action.payload.age };

        default:
            return state;
    }
}

export default users;