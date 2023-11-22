// Action Types
// Action Types
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// Action Creator
export const updateUserData = (data) => ({
  type: UPDATE_USER_DATA,
  payload: data,
});

