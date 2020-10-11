import React from "react";
import { useHistory } from "react-router-dom";
import LottieTimeisUp from "./Lottie-TimeisUp";

const TimeisUp = () => {
    const history = useHistory()
  return (
    <div
      className=" timeisup py-4 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="display-4">YOUR TIME IS <span>UP</span></h1>
      <LottieTimeisUp />
      <button className="btn home-btn" onClick={()=>history.push('/')}>
        HOME
      </button>
    </div>
  );
};

export default TimeisUp;
