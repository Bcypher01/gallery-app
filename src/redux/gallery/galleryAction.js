import { ADD_IMAGE, SET_IMAGE } from "./galleryType";

export const addImage = (image) => {
  return (dispatch) => {
    dispatch({ type: ADD_IMAGE, payload: image });
  };
};

export const setImage = (image) => {
  return (dispatch) => {
    dispatch({ type: SET_IMAGE, payload: image });
  };
};
