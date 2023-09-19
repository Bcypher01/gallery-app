import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { addImage } from "../redux/gallery/galleryAction";

function ImageForm() {
  const dispatch = useDispatch();
  const validate = Yup.object().shape({
    title: Yup.string().required("Required"),
    img: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{
        id: uuidv4(),
        title: "",
        img: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(addImage(values));
        resetForm({ values: "" });
      }}>
      <Form>
        <div className="space-y-2">
          <Field
            id="title"
            name="title"
            placeholder="Name of photo"
            className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow-sm"
          />
          <Field
            id="img"
            name="img"
            placeholder="Image URL"
            className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow-sm"
          />
          <button
            type="submit"
            className="flex items-center content-center bg-black
                    text-center justify-center text-white
                    text-sm px-2 rounded font-semibold">
            Send
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ImageForm;
