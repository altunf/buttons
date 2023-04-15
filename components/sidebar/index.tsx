import React from "react";
import Logo from "../logo";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar2">
      <Logo />
      <div className="colors">Color</div>
      <div className="typography">Typography</div>
      <div className="spaces">Spaces</div>
      <div className="button2">Buttons</div>
      <div className="inputs">Inputs</div>
      <div className="grid">Grid</div>
    </div>
  );
};

export default Sidebar;
