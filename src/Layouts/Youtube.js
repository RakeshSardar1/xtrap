import React from "react";
import Arrow from "../Assets/img/arrow.png";
import Youtube1 from "../Assets/img/youtube1.png";
import Youtube2 from "../Assets/img/youtube2.png";

const Youtube = () => {
  return (
    <>
      <div className="youtubeChannel">
        <div className="youtubeChannelHeader">
          <h2>Youtube Channels</h2>
          <div className="youtubeHeaderTop">
            <p>
              I also had the incredible opportunity to collaborate with renowned
              YouTube channels, including
            </p>
            <img src={Arrow} />
          </div>
          <div className="youtubeHeaderBottom">
            <div className="youtubeCard">
              <img src={Youtube1} />
              <h3> FilterCopy: </h3>
              <p>
                A platform where I explored heartwarming and relatable stories,
                connecting with audiences on a deeper level.
              </p>
            </div>
            <div className="youtubeCard">
              <img src={Youtube2} />
              <h3> FilterCopy: </h3>
              <p>
                A platform where I explored heartwarming and relatable stories,
                connecting with audiences on a deeper level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
