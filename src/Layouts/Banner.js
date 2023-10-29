import React from "react";
import BannerImg from "../Assets/img/Banenr.png";
import FanBtn from "../Component/FanBtn";
const Banner = () => {
  return (
    <div className="heroBanner">
      <div className="mainHeroBanner">
        <div className="heroBannerImg">
          <FanBtn />
          <img src={BannerImg} alt={BannerImg} />
          <div className="bannerHeroallTexts">
            <div className="bannerHeroName">Anupriya Caroli</div>
            <p>Indian Actress</p>
            <div className="joinBtn">Join #Clubcaroli</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
