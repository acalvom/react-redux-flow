// Reducer simply returns an updated state
// Input paramenters are the current state and the action


const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;

        case "withdraw":
            return state - action.payload;

        default:
            // throw new Error('Invalid Action');
            return state;
    }
};

export default reducer;