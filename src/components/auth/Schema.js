import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  // first_name: Yup.string()
  //   .min(3, "Too short")
  //   .max(20, "Too long")
  //   .required("First Name required"),
  // last_name: Yup.string()
  //   .min(3, "Too short")
  //   .max(20, "Too long")
  //   .required("Last Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  // username: Yup.string()
  //   .min(5, "Too short")
  //   .max(20, "Too long")
  //   .required("Username required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Password required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Password required"),
});
