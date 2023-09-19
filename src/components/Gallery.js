import React, { useCallback, useState } from "react";
import galleryList from "../data.js";
import "./styles/styles.css";
import { Card } from "./Card.js";
import { signOut } from "../redux/auth/authAction.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Gallery = () => {
  const [images, setImages] = useState(galleryList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  const logOut = () => {
    dispatch(signOut()).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl md:text-6xl tracking-wide text-center font-bold text-gray-700">
          Welcome to The Gallery
        </h1>
        <p className="text-md md:text-xl tracking-wide font-extralight text-center py-3">
          Feel free to shuffle images to your taste
        </p>
        <p
          className="text-blue-400 text-center cursor-pointer"
          onClick={() => logOut()}>
          Logout
        </p>
      </div>
      <main className="mx-12">
        {React.Children.toArray(
          images.map((image, index) => (
            <Card
              src={image.img}
              title={image.title}
              id={image.id}
              index={index}
              moveImage={moveImage}
            />
          ))
        )}
      </main>
    </>
  );
};

export default Gallery;
