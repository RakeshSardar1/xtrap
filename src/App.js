import React from "react";
import "./Styles/style.css";
import { About, Banner } from "./Layouts";

import LogoIcon from "./Assets/img/logo.png";

function App() {
  return (
    <div className="portFolio">
      <div className="topLogo">
        <img src={LogoIcon} alt={LogoIcon} />
      </div>
      <Banner />
      <About />
    </div>
  );
}

export default App;
