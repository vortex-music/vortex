import { combineReducers } from 'redux';

// Example reducers
const counterReducer = (state = 0, action: { type: any; }) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const userReducer = (state = {}, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export default rootReducer;
