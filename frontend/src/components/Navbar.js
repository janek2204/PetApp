import React from "react";
import { Menu, Button, Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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
        <Header onClick={() => navigate("/")}>PetApp</Header>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
