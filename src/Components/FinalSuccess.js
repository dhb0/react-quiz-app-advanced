import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LottieWin from "./LottieWin";

const FinalSuccess = () => {
  const { point } = useSelector((state) => state.quizData);
  const history = useHistory();
  return (
    <div
      className="final-success py-4 d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h3>
        You did it! You <span>crazy son of a bitch</span>, you did it!
      </h3>
      <LottieWin />
      <h3>
        Your Score: <span>{point}</span>
      </h3>
      <button onClick={() => history.push("/")} className="btn">
        DO IT AGAIN
      </button>
    </div>
  );
};

export default FinalSuccess;
