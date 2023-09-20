import React, { useRef, useState } from "react";
import galleryList from "../data.js";
import "./styles/styles.css";
// import { Card } from "./Card.js";
import { signOut } from "../redux/auth/authAction.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Gallery = () => {
  const [images, setImages] = useState(galleryList);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...images];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setImages(copyListItems);
  };

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
      <div className="grid place-items-center py-2">
        <input
          className="shadow appearance-none border border-gray-500 w-[50vw] rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <main className="mx-12">
        {React.Children.toArray(
          images
            .filter((asd) => asd.title.toLowerCase().includes(query))
            .map((image, index) => (
              <div
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                draggable>
                <img src={image.img} alt={index} />
              </div>
            ))
        )}
      </main>
    </>
  );
};

export default Gallery;
