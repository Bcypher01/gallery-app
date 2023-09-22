import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { Grid } from "./Grid";
import { SortableImages } from "./SortableImages";
import { Image } from "./Image";
import data from "../data";

const UploadGallery = () => {
  const [items, setItems] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["title"]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}>
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="py-12 px-8 grid place-items-center">
          <h1 className="text-3xl md:text-5xl">Welcome to The Gallery</h1>
          <p className="py-4 px-4 md:text-xl">
            Feel free to shuffle images as you please
          </p>
          <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search for..."
            className="w-[50vw] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={query}
            /*
            // set the value of our useState q
            //  anytime the user types in the search box
            */
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Grid columns={4}>
          {search(items).map((url, index) => (
            <SortableImages key={url.id} url={url.img} index={index} />
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Image url={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.img === active.id);
        const newIndex = items.findIndex((item) => item.img === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default UploadGallery;
