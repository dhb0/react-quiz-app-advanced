import { combineReducers } from "redux";

const questionTypeReducer = (
  state = {
    level: "easy",
    category: "",
  },
  { type, payload }
) => {
  switch (type) {
    case "SET_LEVEL":
      return { ...state, level: payload };
    case "SET_CATEGORY":
      return { ...state, category: payload };
    case "RESET_ALL": return {level:"easy", category:""}
    default:
      return state;
  }
};

const quizReducer = (
  state = {
    index: 0,
    isFinished: false,
    jokerInUse: false,
    point:0,
    jokerNum: 1,
    time: 15,
    questionsLoading: true,
    questions: [],
  },
  { type, payload }
) => {
  switch (type) {
    case "INDEX_INCREMENT": {
      if (state.index == 9) {
        return { ...state, isFinished: true };
      }
      return { ...state, index: state.index + 1 };
    }
    case "RESET": {
      return { ...state, index: 0 };
    }
    case "FETCH_QUESTION_DATA":
      return { ...state, questions: payload };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        questionsLoading: false,
      };
    case "TIME_REDUCE": {
      return {
        ...state,
        time: state.time - 1,
      };
    }
    case "TIME_RESET": {
      return {
        ...state,
        time: 15,
      };
    }
    case "JOKER_USED": {
      return {
        ...state,
        jokerNum: 0,
      };
    }
    case "JOKER_INUSE": {
      return {
        ...state,
        jokerInUse:payload
      }
    }
    case "POINT_INCREMENT":{
      return {
        ...state,
        point: state.point + payload
      }
    }
    case "RESET_ALL":{
      return {
        index: 0,
        isFinished: false,
        jokerInUse: false,
        point:0,
        jokerNum: 1,
        time: 15,
        questionsLoading: true,
        questions: [],
      }
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  questionType: questionTypeReducer,
  quizData: quizReducer,
});
