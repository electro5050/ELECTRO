// Action Types
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// Action Creators
export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    payload: message,
});

