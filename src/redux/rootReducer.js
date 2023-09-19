import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
// import galleryReducer from "./gallery/gelleryReducer";

const rootReducer = combineReducers({
  user: authReducer,
  // gallery: galleryReducer,
});

export default rootReducer;
