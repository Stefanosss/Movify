import * as actionTypes from "./actionTypes";
import firebase from "../../firebase";

export const fetchFriendsSuccess = (friends) => {
  return {
    type: actionTypes.FETCH_FRIENDS_SUCCESS,
    friends: friends,
  };
};

export const fetchFriendsFail = (error) => {
  return {
    type: actionTypes.FETCH_FRIENDS_FAIL,
    error: error,
  };
};

export const fetchFriendsStart = () => {
  return {
    type: actionTypes.FETCH_FRIENDS_START,
  };
};

export const fetchFriends = () => {
  return (dispatch) => {
    dispatch(fetchFriendsStart());
    const db = firebase.firestore();
    db.collection("users")
      .get()
      .then((el) => {
        const fetchedFriends = [];
        let data = el.docs.map((doc) => doc.data());
        // console.log(data);
        fetchedFriends.push(...data);
        dispatch(fetchFriendsSuccess(fetchedFriends));
      })
      .catch((error) => {
        dispatch(fetchFriendsFail(error));
      });
  };
};
