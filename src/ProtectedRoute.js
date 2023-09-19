import React from "react";
// import { BrowserRouter as Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/" replace="true" />;
  }
  return children;
}
// function ProtectedRoute({ component: Component, ...rest }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user && user.uid ? (
//           <Component {...props} />
//         ) : (
//           <Navigate
//             to={{
//               pathname: "/",
//             }}
//             replace="true"
//           />
//         )
//       }
//     />
//   );
// }

export default ProtectedRoute;
