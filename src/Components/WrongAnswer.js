import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import LottieFail from './Lottie-Fail'

const WrongAnswer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clickEvent = () => {
    history.push("/");
  };
  return (
    <div
      className="wrong-answer py-4 d-flex flex-column text-center align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1 className="display-3">YOU FAILED</h1>
      <LottieFail />
      <button onClick={clickEvent} className="btn">
        HOMEPAGE
      </button>
    </div>
  );
};

export default WrongAnswer;
