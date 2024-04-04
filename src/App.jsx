import { useContext } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import Header from "@/components/Header/header.jsx";
import Footer from "@/components/Footer/Footer.jsx";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
