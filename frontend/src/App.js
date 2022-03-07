import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AllAdverts from "./components/AllAdverts.js";
import Footer from "./components/Footer.js";
import ProfilePage from "./components/ProfilePage.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllAdverts />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
