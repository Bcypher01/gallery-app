import { auth } from "../../firebase";
import {
  REGISTER_SUCCESS,
  LOADING,
  AUTH_FAIL,
  LOGIN_SUCCESS,
} from "./authType";

export const load = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });
  };
};

export const loginSuccess = (userCredential) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_SUCCESS, payload: userCredential });
  };
};

export const loginFail = () => {
  return (dispatch) => {
    dispatch({ type: AUTH_FAIL });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: LOGIN_SUCCESS });
    } catch {
      // Handle Errors here.
      dispatch({
        type: AUTH_FAIL,
        message: "Invalid credentials Try again!",
      });
    }
  };
};
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         dispatch({ type: LOGIN_SUCCESS });
//         // history.push("/chat")
//       })
//       .catch((error) => {
//         dispatch({
//           type: AUTH_FAIL,
//           message: error.message,
//         });
//       });
//   };
// };

export const firebaseSignup = (email, password) => {
  return async (dispatch) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      dispatch({ type: REGISTER_SUCCESS });
    } catch {
      dispatch({ type: AUTH_FAIL });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
    } catch {
      dispatch({ type: AUTH_FAIL });
    }
  };
  // return auth
  //   .signOut()
  //   .then(function () {
  //     // Sign-out successful.
  //     Navigate("/");
  //     localStorage.removeItem("user");
  //   })
  //   .catch(function (error) {
  //     // An error happened.
  //   });
};
