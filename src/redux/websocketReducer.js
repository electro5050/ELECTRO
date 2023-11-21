import { UPDATE_WEBSOCKET_GAME_DATA } from './websocketActions';

// Initial State
const initialState = {
    websocketData: null,
  };
  
  // Reducer
  const websocketReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_WEBSOCKET_GAME_DATA:
        return {
          ...state,
          websocketData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default websocketReducer;
  
