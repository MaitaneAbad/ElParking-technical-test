import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callToApi from './services/callToApi';
//import ls from './services/localStorage';
import Start from './Start';
import Game from './Game';

const App = () => {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  const [optionAnswerTotal, setOptionAnswerTotal] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  // const [localStorage, setLocalStorage] = useState(ls.get('localStorage'));

  // ls.set('localStorage', localStorage);
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  const loadNextQuestionAndAnswers = () => {
    if (counter < data.length) {
      const titleQuestion = data[counter].questions;
      const firstAnswers = optionAnswerTotal[counter];
      for (let i = 0; i < firstAnswers.length; i++) {}
      setQuestion(titleQuestion);
      setAnswer(firstAnswers);
      setCounter(counter + 1);
    }
  };
  return (
    <div className='body'>
      <Routes>
        <Route
          path='/'
          element={
            <Start
              data={data}
              optionAnswerTotal={optionAnswerTotal}
              setOptionAnswerTotal={setOptionAnswerTotal}
              loadNextQuestionAndAnswers={loadNextQuestionAndAnswers}
            />
          }
        />
        <Route
          path='/game'
          element={
            <Game
              data={data}
              optionAnswerTotal={optionAnswerTotal}
              loadNextQuestionAndAnswers={loadNextQuestionAndAnswers}
              question={question}
              setQuestion={setQuestion}
              answer={answer}
              setAnswer={setAnswer}
              counter={counter}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
