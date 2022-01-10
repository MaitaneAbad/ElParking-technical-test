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
  const [a, setA] = useState('');
  // const [localStorage, setLocalStorage] = useState(ls.get('localStorage'));

  // ls.set('localStorage', localStorage);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  const loadNextQuestionAndAnswers = () => {
    const a = data[counter].questions;
    const b = optionAnswerTotal[counter];
    setA(a);
    console.log(a);
    console.log(b);
    setCounter(counter + 1);
  };
  //  console.log(localStorage);
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
              a={a}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
