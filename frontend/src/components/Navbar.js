import React from "react";
import { Menu, Button, Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token"); // remove token from local storage
    navigate("/");
  };

  return (
    <Menu>
      <Menu.Item>
        <Button onClick={() => navigate("/register")} primary>
          Register
        </Button>
      </Menu.Item>

      <Menu.Item>
        <Button onClick={() => navigate("/login")}>Log-in</Button>
      </Menu.Item>

      <Menu.Item>
        <Button onClick={() => navigate("/profile")}>Profile</Button>
      </Menu.Item>
      <Menu.Item position="right">
        <Button onClick={handleLogout}>Log out</Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
