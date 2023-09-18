import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAz8NXBKkY2y_8A_HeVej94NHCd-Ir6jb0",
  authDomain: "chat-app-77733.firebaseapp.com",
  projectId: "chat-app-77733",
  storageBucket: "chat-app-77733.appspot.com",
  messagingSenderId: "842599586123",
  appId: "1:842599586123:web:816fd9382793bad243b0ce",
});

export const auth = app.auth();
export default app;
