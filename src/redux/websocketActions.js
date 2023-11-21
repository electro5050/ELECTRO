// Action Types
// Action Types
export const UPDATE_WEBSOCKET_GAME_DATA = 'UPDATE_WEBSOCKET_GAME_DATA';

// Action Creator
export const updateWebSocketData = (data) => ({
  type: UPDATE_WEBSOCKET_GAME_DATA,
  payload: data,
});

