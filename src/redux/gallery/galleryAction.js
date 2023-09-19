import { ADD_IMAGE } from "./galleryType";

export const addImage = (image) => {
  return (dispatch) => {
    dispatch({ ADD_IMAGE, payload: image });
  };
};
