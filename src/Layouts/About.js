import React from "react";
import Anupriya1 from "../Assets/img/anuPriya1.png";
const About = () => {
  return (
    <>
      <div className="homeAbout">
        <div className="homeAboutLeft">
          <p className="homeAboutLeftTop">/Actor, Dancer</p>
          <h2>
            <span>"Encompassing Art</span> <span>from one to </span>{" "}
            <span>another" ~Anupriya</span>
          </h2>
          <p className="anuDesc">
            <span>Hello, I'm Anupriya,</span> born and Brought up from Delhi,
            India. Myjourney into the world of entertainment began with a
            childhood love for storytelling. I honed my passion of acting during
            my studies in Miranda House College and also pursued the art of
            dancing as a hobby. College theater ignited my spark, and now, I
            embrace every role, from web series to TV commercials, cherishing
            the moments of connecting through the power of stories.
          </p>
          <a className="readMoreAbout">Read More</a>
        </div>
        <div className="homeAboutRight">
          <img src={Anupriya1} />
        </div>
      </div>
    </>
  );
};

export default About;
