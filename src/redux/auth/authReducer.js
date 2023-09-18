// import { auth } from "../../firebase";
import {
  REGISTER_SUCCESS,
  AUTH_FAIL,
  LOGIN_SUCCESS,
  LOADING,
} from "./authType";

// const user = JSON.parse(localStorage.getItem("user"));
// auth.onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
const user = localStorage.getItem("user");
const INITIAL_STATE = user
  ? { isLoggedIn: true, details: JSON.parse(user), loading: false }
  : { isLoggedIn: false, details: null, loading: false };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };

    case AUTH_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        details: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
