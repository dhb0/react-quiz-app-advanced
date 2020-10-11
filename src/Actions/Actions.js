import axios from "axios";

export const setLevel = (level) => {
  return {
    type: "SET_LEVEL",
    payload: level,
  };
};

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category
  }
}

export const increaseQuestionIndex = () => {
  return {
    type: "INDEX_INCREMENT",
  };
};

export const resetQuestionIndex = () => {
  return {
    type: "RESET",
  };
};

export const fetchQuestionData = (level,category) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&difficulty=${level}&${category}&type=multiple`
    ).catch(err=>console.log(err));
    dispatch({
      type: "FETCH_QUESTION_DATA",
      payload: response.data.results,
    });
  };
};

export const questionsLoaded = () => {
  return {
    type: "SET_LOADING_FALSE",
  };
};

export const timeReduce = () => {
  return {
    type: "TIME_REDUCE"
  }
}

export const timeReset = () => {
  return {
    type: "TIME_RESET"
  }
}

export const jokerActive = (condition) => {
  return {
    type: "JOKER_INUSE",
    payload: condition
  }
}

export const jokerUsed = () => {
  return {
    type:'JOKER_USED'
  }
}

export const pointIncrement = (point) => {
  return {
    type: 'POINT_INCREMENT',
    payload: point
  }
}

export const resetAll = () => {
  return {
    type:"RESET_ALL"
  }
}