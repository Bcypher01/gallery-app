import React, { useCallback, useState } from "react";
import galleryList from "../data.js";
import "./styles/styles.css";
import { Card } from "./Card.js";

const Gallery = () => {
  const [images, setImages] = useState(galleryList);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);
  return (
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
  );
};

export default Gallery;
