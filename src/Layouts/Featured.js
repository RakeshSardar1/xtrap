import React from "react";
import Arrow from "../Assets/img/arrow.png";
import Featurred1 from "../Assets/img/featured1.png";
import Featurred2 from "../Assets/img/featured2.png";
import Featurred3 from "../Assets/img/featured3.png";

const Featured = () => {
  return (
    <>
      <div className="featuredIn">
        <div className="featureHead">
          <h2>
            Featured <span>in</span>
          </h2>
          <div className="blueBar"></div>
        </div>
        <div className="featuredBody">
          <div className="featuredBodyTop">
            <h3>Past Web series</h3>
          </div>
          <div className="featuredBodyRight">
            <p>
              Feels like ishq- A heartfelt anthology series that allowed me to
              dive into a soul-stirring love story, leaving viewers with a warm
              afterglow.
            </p>
            <img src={Arrow} />
          </div>
          <div className="featuredImages">
            <div>
              {" "}
              <img src={Featurred1} />{" "}
            </div>
            <div>
              {" "}
              <img src={Featurred2} />{" "}
            </div>
            <div>
              {" "}
              <img src={Featurred3} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
