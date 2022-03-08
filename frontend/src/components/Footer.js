import React from "react";
import { Header, Menu } from "semantic-ui-react";

const Footer = () => {
  return (
    <Menu inverted color="olive" widths={1} fixed="bottom">
      <Menu.Item>
        <Header textAlign="center" style={{ color: "white", fontSize: 20 }}>
          PetApp 2022
        </Header>
      </Menu.Item>
    </Menu>
  );
};
export default Footer;
