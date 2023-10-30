import React from "react";
import BottomImg from "../Assets/img/bottomImg.png";
import LoveMessage from "../Assets/img/loveMessage.png";
const AboutBottom = () => {
  return (
    <>
      <div className="bottomPage">
        <div className="bottomPageLeft">
          <h2>#CLUBCAROLI</h2>
          <p>
            Join #CLUBCAROLI for behind-the-scenes magic, captivating photos,
            and handpicked product and book recommendations. Be the first to
            know about upcoming projects and embark on an inspiring journey
            together. Subscribe today and delve into the world of storytelling,
            both on and off the camera!
          </p>
          <div className="bottomPageBottom">
            <div className="bottomPageBottomForm">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="bottomPageBottomForm">
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="bottomPageBottomForm">
              <button>Join Now</button>
            </div>
          </div>
        </div>
        <div className="bottomPageRight">
          <img src={LoveMessage} className="loveMessage" />
          <img src={BottomImg} />
        </div>
      </div>
    </>
  );
};

export default AboutBottom;
