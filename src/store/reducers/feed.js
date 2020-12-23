import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  friends: [],
  loading: false,
};

const fetchFriendsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchFriendsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchFriendsSuccess = (state, action) => {
  return updateObject(state, {
    friends: action.friends,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FRIENDS_START:
      return fetchFriendsStart(state, action);
    case actionTypes.FETCH_FRIENDS_SUCCESS:
      return fetchFriendsSuccess(state, action);
    case actionTypes.FETCH_FRIENDS_FAIL:
      return fetchFriendsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
