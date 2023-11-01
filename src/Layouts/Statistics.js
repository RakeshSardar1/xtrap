import React from "react";
import Details from "../Assets/img/anupriyaDetails.png";

const Staticstics = () => {
  return (
    <>
      <div className="staticstics">
        <img src={Details} />
        <div className="staticsticsDetails">
          <div className="div1">
            <h2>25</h2>
            <p>Age</p>
          </div>
          <div className="div2">
            <h2>5'4</h2>
            <p>Height</p>
          </div>
          <div className="div3">
            <h2>New Delhi</h2>
            <p>Hometown</p>
          </div>
          <div className="div4">
            <h2>3.2K+</h2>
            <p>Total Following</p>
          </div>
          <div className="div5">
            <h2>2021</h2>
            <p>Started Acting</p>
          </div>
          <div className="div6">
            <h2>
              29
              <br /> Aug
            </h2>
            <p>Birthday</p>
          </div>
          <div className="div7">
            <h2>
              Novels
              <br /> reading,
              <br /> Dancing,
              <br /> Painting,
              <br /> Traveling
            </h2>
            <p>Hobbies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staticstics;
