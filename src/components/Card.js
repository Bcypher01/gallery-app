// import React, { useRef } from "react";
// import { useDrag, useDrop } from "react-dnd";

import { useDroppable } from "@dnd-kit/core";

export const Card = ({ src, title, id, index, moveImage }) => {
  //   const ref = useRef(null);

  //   const [, drop] = useDrop({
  //     accept: "image",
  //     hover: (item, monitor) => {
  //       if (!ref.current) {
  //         return;
  //       }
  //       const dragIndex = item.index;
  //       const hoverIndex = index;

  //       if (dragIndex === hoverIndex) {
  //         return;
  //       }

  //       const hoverBoundingRect = ref.current?.getBoundingClientRect();

  //       const hoverMiddleY =
  //         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

  //       const clientOffset = monitor.getClientOffset();
  //       const hoverClientY = clientOffset.y - hoverBoundingRect.top;

  //       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //         return;
  //       }

  //       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //         return;
  //       }

  //       moveImage(dragIndex, hoverIndex);

  //       item.index = hoverIndex;
  //     },
  //   });

  //   const [{ isDragging }, drag] = useDrag({
  //     type: "image",
  //     item: () => {
  //       return { id, index };
  //     },
  //     collect: (monitor) => {
  //       return {
  //         isDragging: monitor.isDragging(),
  //       };
  //     },
  //   });

  //   const opacity = isDragging ? 0 : 1;
  //   drag(drop(ref));

  function Droppable(props) {
    const { setNodeRef } = useDroppable({
      id: props.id,
    });

    return <div ref={setNodeRef}>{props.children}</div>;
  }

  return (
    <div className="card">
      <img src={src} alt={title} />
    </div>
  );
};
