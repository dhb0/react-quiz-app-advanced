import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {
  timeReduce,
  jokerUsed,
  jokerActive,
  pointIncrement
} from "../Actions/Actions";

const Question = () => {
  const {
    index,
    isFinished,
    jokerInUse,
    jokerNum,
    questionsLoading,
    questions,
    time,
  } = useSelector((state) => state.quizData);

  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(timeReduce());
      if (time === 0) {
        clearTimeout(timeout);
        history.push("/timeisup");
        return
      }
    }, 1000);
  }, [time]);

  useEffect(() => {
    const allOptions = [
      questions[index].correct_answer,
      ...questions[index].incorrect_answers,
    ];
    const filteredOptions = [
      questions[index].correct_answer,
      questions[index].incorrect_answers[Math.floor(Math.random() * 2)],
    ];

    jokerInUse
      ? setOptions(shuffle(filteredOptions))
      : setOptions(shuffle(allOptions));
      console.log(questions[index].correct_answer);
  }, [jokerInUse]);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      history.push("/");
    });
  }, []);

  const controlEvent = (e) => {
    if (e.currentTarget.value === questions[index].correct_answer) {
      let defactor;
      switch (questions[index].difficulty) {
        case "easy": {
          defactor = 20;
        }
        case "medium": {
          defactor = 30;
        }
        case "hard": {
          defactor = 40;
        }
        default:
          defactor = 30
      }
      dispatch(pointIncrement(time * defactor));
      if(index==9){
        history.push('/finished')
      }else{
        history.push('/right')
      }
      
    } else {
      history.push('/wrong')
    }
  };

  const jokerClickEvent = () => {
    dispatch(jokerUsed());
    dispatch(jokerActive(true));
  };

  return (
    <div className="container question">
      <header className="top-info d-flex align-content-center justify-content-between flex-wrap">
        <h3>
          Category: <span>{questions[index].category}</span>
        </h3>
        <h3>
          Question Number: <span>{index + 1}</span>
        </h3>
        <h3>
          Time: <span>{time}</span>
        </h3>
      </header>
      <div className="questionarea">
        <p className="lead">
          {questions[index].question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&ldquo;/g, "``")}
        </p>
        <div className="options">
          {options.map((item) => {
            return (
              <button
                key={uuidv4()}
                className="btn btn-lg w-100"
                value={item}
                onClick={controlEvent}
              >
                {item}
              </button>
            );
          })}
        </div>
        {jokerNum === 0 ? null : jokerInUse ? null : (
          <button className="btn joker-btn mt-4" onClick={jokerClickEvent}>
            USE 50:50 JOKER
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
