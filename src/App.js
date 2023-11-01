import React from "react";
import "./Styles/style.css";
import {
  About,
  AboutBottom,
  AwardWinning,
  Banner,
  Featured,
  Genres,
  Staticstics,
  UpComingProject,
  Youtube,
} from "./Layouts";

import LogoIcon from "./Assets/img/logo.png";

function App() {
  return (
    <div className="portFolio">
      <div className="homeLanding">
        <div className="topBannerHero">
          <div className="topLogo">
            <img src={LogoIcon} alt={LogoIcon} />
          </div>
          <Banner />
        </div>
        <div className="homeOthers">
          <About />
          <Featured />
          <Youtube />
          <Staticstics />
          <Genres />
          <AwardWinning />
          <UpComingProject />
        </div>
        <AboutBottom />
      </div>
    </div>
  );
}

export default App;
