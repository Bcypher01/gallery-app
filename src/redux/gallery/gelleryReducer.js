import Data from "../../data";
import { ADD_IMAGE } from "./galleryType";

const INITIAL_STATE = Data;

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default galleryReducer;
