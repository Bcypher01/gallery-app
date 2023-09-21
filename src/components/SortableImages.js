import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Image } from "./Image";

export const SortableImages = (props) => {
  const sortable = useSortable({ id: props.url });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Image
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
