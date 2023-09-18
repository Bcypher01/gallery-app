import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Style } from "./Style";
import { load, firebaseSignup } from "../../redux/auth/authAction";
import { SignUpSchema } from "./Schema";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => ({ loading: state.user.loading }));
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(firebaseSignup(values.email, values.password)).then(() => {
          navigate("/");
        });
        dispatch(load());
        setSubmitting(false);
      }}>
      {(props) => (
        <Form>
          <div style={Style} className="h-screen">
            <div className="container mx-auto h-full flex justify-center align-middle content-center">
              <div className="sm:w-3/3 lg:w-1/3 mt-10">
                <h1 className="font-semibold text-black text-3xl mb-6 text-center">
                  Sign up for The Gallery
                </h1>
                <div className="p-8 bg-white mb-6 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label className="font-semibold text-grey-600 block mb-2">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
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

                  <div className="mb-4">
                    <label className="font-semibold text-grey-600 block mb-2">
                      Confirm Password
                    </label>
                    <Field
                      name="passwordConfirmation"
                      type="password"
                      className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage
                      name="passwordConfirmation"
                      component="span"
                      className="text-sm font-semibold text-red-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-[#afbed3] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                      disabled={
                        Object.values(props.values).length === 0 ||
                        Object.values(props.errors).length > 0 ||
                        props.isSubmitting
                      }
                      onClick={() => dispatch(load())}>
                      {loading ? "Signing up..." : "Sign Up"}
                    </button>

                    <a
                      className="no-underline inline-block align-baseline font-semibold text-sm text-blue-400 hover:text-blue-600 float-right"
                      href="/">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center mt-5">
                    <p className="text-grey-100 hover:text-black text-md">
                      Already have an account?
                      <Link to="/" className="no-underline font-semibold">
                        Sign in
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
