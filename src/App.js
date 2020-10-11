import React from "react";
import Home from "./Components/Home";
import Question from "./Components/Question";
import RightAnswer from './Components/RightAnswer';
import TimeisUp from './Components/TimeisUp'
import WrongAnswer from './Components/WrongAnswer'
import FinalSuccess from './Components/FinalSuccess'
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/question" component={Question} />
        <Route path="/right" component={RightAnswer} />
        <Route path="/timeisup" component={TimeisUp} />
        <Route path="/wrong" component={WrongAnswer} />
        <Route path="/finished" component={FinalSuccess} />
      </BrowserRouter>
    </div>
  );
};

export default App;
