import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Style } from "./Style.js";
import { LoginSchema } from "./Schema.js";
import { load, loginFail, loginSuccess } from "../../redux/auth/authAction";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { loading } = useSelector((state) => ({
    loading: state.user.loading,
  }));
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        auth
          .signInWithEmailAndPassword(values.email, values.password)
          .then((userCredential) => {
            navigate("/gallery");
            dispatch(loginSuccess(userCredential.user));
          })
          .catch((error) => {
            setErrorMessage(error.message);
            dispatch(loginFail());
          });
        dispatch(load());
      }}>
      <Form>
        <div style={Style} className="h-screen">
          <div className="container mx-auto h-full flex justify-center content-center">
            <div className="sm:w-3/3 lg:w-1/3 mt-20">
              <h1 className="font-semibold text-black text-3xl mb-6 text-center">
                Login to The Gallery
              </h1>
              <div className="p-8 bg-white mb-6 rounded-lg shadow-lg">
                <div className="px-5 pb-2">
                  {errorMessage ? (
                    <p className="text-xs font-semibold text-red-500">
                      {errorMessage}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-grey-600 block mb-2">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow"
                    placeholder="Your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-sm font-semibold text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold text-grey-600 block mb-2">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow"
                    placeholder="Your Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-sm font-semibold text-red-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className={
                      loading
                        ? "bg-gray-300 text-white font-bold py-2 px-4 rounded"
                        : "bg-[#afbed3] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    }
                    // onClick={() => dispatch(load())}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>

                  <a
                    className="no-underline inline-block align-baseline font-semibold text-sm text-blue-400 hover:text-blue-600 float-right"
                    href="/">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center mt-5">
                  <p className="text-grey-100 hover:text-black text-md">
                    Don't have an account? &nbsp;
                    <Link
                      to="/sign-up"
                      className="no-underline text-blue-400 font-semibold">
                      Create an Account
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default Login;
