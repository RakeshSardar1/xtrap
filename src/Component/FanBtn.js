import React, { useState } from "react";

const FanBtn = () => {
  const [mode, setMode] = useState(1);
  return (
    <ul className="fanBtn">
      {["Fans", "Brands"].map((item, i) => {
        return (
          i + 1 === mode && (
            <>
              <li key={i} className={`mode mode${i + 1}`}>
                <span className="modeBlue"></span>
                <span className="modeType"> {item}</span>
              </li>
            </>
          )
        );
      })}
    </ul>
  );
};

export default FanBtn;
