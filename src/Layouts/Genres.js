import React from "react";
import Details from "../Assets/img/anupriyaDetails.png";

const Genres = () => {
  return (
    <>
      <div className="genres">
        <h2>Genres</h2>
        <ul className="genresUlFirst">
          <li></li>
          <li>
            Girls & Women
            <br /> Empowerment
          </li>
          <li></li>
          <li>Thrillers & Mysteries</li>
        </ul>
        <ul className="genresUlSecond">
          <li></li>
          <li></li>
          <li>
            Heartfelt
            <br /> Romances
          </li>
          <li></li>
        </ul>
        <ul className="genresUlThird">
          <li>
            Humor
            <br /> & Quirks
          </li>
          <li>
            Teenage
            <br /> Drama
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Genres;
