import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import store from "./redux/store";
import { AuthProvider } from "./contexts/AuthContext";
// import ProtectedRoute from "./ProtectedRoute";
import { auth } from "./firebase";
import Gallery from "./components/Gallery";

function App() {
  auth.onAuthStateChanged((user) => {
    localStorage.setItem("user", JSON.stringify(user));
  });
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
