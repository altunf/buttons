import React from "react";
import "./style.css";

import Footer from "@/components/footer";
import ButtonList from "@/components/button-list";

const HomePage = () => {
  return (
    <>
      <h2 className="buttons">Buttons</h2>
      <ButtonList />
      <Footer />
    </>
  );
};

export default HomePage;
