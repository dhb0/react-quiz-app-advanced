import React from "react";
import LottieSuccess from "../Components/Lottie-Success";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  increaseQuestionIndex,
  timeReset,
  jokerActive,
} from "../Actions/Actions";

const RightAnswer = () => {
  const { point } = useSelector((state) => state.quizData);
  const dispatch = useDispatch();
  const history = useHistory();

  const nextEvent = () => {
    dispatch(increaseQuestionIndex());
    dispatch(timeReset());
    dispatch(jokerActive(false));
    history.push("/question");
  };
  return (
    <div className="container right-answer d-flex align-items-center flex-column justify-content-center py-4">
      <h1 className="display-2">TRUE!</h1>
      <LottieSuccess />
      <h1>
        POINT:
        <span>{point}</span>
      </h1>

      <button className="btn next-btn mt-4" onClick={nextEvent}>
        NEXT QUESTION
      </button>
    </div>
  );
};

export default RightAnswer;
