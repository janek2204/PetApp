import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AllAdverts from "./components/AllAdverts.js";
import Footer from "./components/Footer.js";
import ProfilePage from "./components/ProfilePage.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { useState } from "react";

function App() {
  const [registeringResponse, setRegisteringResponse] = useState("");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllAdverts />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/login"
          element={<Login registeringResponse={registeringResponse} />}
        ></Route>
        <Route
          path="/register"
          element={<Register setRegisteringResponse={setRegisteringResponse} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
