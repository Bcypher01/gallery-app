import Data from "../../data";
import { ADD_IMAGE, SET_IMAGE } from "./galleryType";

const INITIAL_STATE = { images: Data };

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case SET_IMAGE:
      return {
        ...state,
        images: [action.payload],
      };
    default:
      return state;
  }
};

export default galleryReducer;
