import { RECEIVE_MESSAGE } from './websocketActions';

const initialState = {
    messages: [],
    winningMessage: null,  // Add this to handle winning messages
};

const webSocketReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                winningMessage: action.payload.winningMessage, // Update this line
            };
        default:
            return state;
    }
};

export default webSocketReducer;
