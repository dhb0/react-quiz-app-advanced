import React, {useEffect} from "react";
import { setLevel, setCategory, fetchQuestionData, resetAll } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

const Home = () => {
  useEffect(()=>{
    dispatch(resetAll())
  },[])
  const { level, category } = useSelector((state) => state.questionType);
  const dispatch = useDispatch();
  const history = useHistory()
  const submitEvent = async (e) => {
    e.preventDefault();
    await dispatch(fetchQuestionData(level,category));
    history.push('/question')

  };
  return (
    <div className="home container">
      <h1 className="header display-1">
        Quiz<span>APP</span>
      </h1>
      <form onSubmit={submitEvent}>
        <div className="form-group">
          <label htmlFor="select-level">Choose a Level</label>
          <select
            id="select-level"
            className="form-control form-control-lg"
            onChange={(e) => dispatch(setLevel(e.target.value))}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <label htmlFor="select-category">Choose a Category</label>
          <select
          id="select-category"
          className="form-control form-control-lg"
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="">Any</option>
          <option value="category=25">Art</option>
          <option value="category=23">History</option>
          <option value="category=22">Geography</option>
          <option value="category=21">Sports</option>
          <option value="category=17">Science</option>
          <option value="category=12">Music</option>
          <option value="category=11">Cinema</option>
          <option value="category=10">Books</option>
        </select>
        </div>
        <button className="btn" type="submit">
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default Home;
