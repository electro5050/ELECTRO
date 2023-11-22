import { UPDATE_USER_DATA } from './userActionActions';

// Initial State
const initialState = {
    userData: null,
  };
  
  // Reducer
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER_DATA:
        return {
          ...state,
          userData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
