import React from "react";
import Achiver from "../Assets/img/achiver.png";
import Winner from "../Assets/img/winner.png";
import AchiverBottom from "../Assets/img/achiverBottom.png";
import WinnerBottom from "../Assets/img/winnerBottom.png";

const AwardWinning = () => {
  return (
    <>
      <div className="awardWinning">
        <h2>Awards</h2>

        <div className="awardCards">
          <div className="awardCard">
            <div className="awardCardHeader">
              <div className="awardCardHeaderImg">
                <img src={Achiver} />
              </div>
              <p className="awardCardHeaderText">12 Oct 2022</p>
            </div>
            <p className="cardType">Achievers</p>
            <h2>ET Spott Awards</h2>
            <p className="cardShortType">
              Best short film “Sweet sound of wood”
            </p>
            <div className="awardCardBottom">
              <p>Delhi</p>
              <img src={AchiverBottom} />
            </div>
          </div>
          <div className="awardCard">
            <div className="awardCardHeader">
              <div className="awardCardHeaderImg">
                <img src={Winner} />
              </div>
              <p className="awardCardHeaderText">12 Oct 2022</p>
            </div>
            <p className="cardType">Achievers</p>
            <h2>ET Spott Awards</h2>
            <p className="cardShortType">
              Best short film “Sweet sound of wood”
            </p>
            <div className="awardCardBottom">
              <p>Mumbai</p>
              <img src={WinnerBottom} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardWinning;
