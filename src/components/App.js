import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callToApi from './services/callToApi';
import Instructions from './Instructions';
//import ls from './services/localStorage';
import Start from './Start';
import Game from './Game';
import Footer from './Footer';

const App = () => {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  const [optionAnswerTotal, setOptionAnswerTotal] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  //const [localStorage, setLocalStorage] = useState(ls.get('localStorage'));
  console.log(localStorage);
  //ls.set('localStorage', localStorage);
  const loadNextQuestionAndAnswers = () => {
    if (counter < data.length) {
      const titleQuestion = data[counter].questions;
      const answersOption = optionAnswerTotal[counter];
      setQuestion(titleQuestion);
      setAnswer(answersOption);
      setCounter(counter + 1);
    }
  };
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  console.log(data);
  const createAnswers = () => {
    for (let i = 0; i < data.length; i++) {
      const subArrayAux = [];
      for (let j = 0; j < data[i].incorrectAnswers.length; j++) {
        subArrayAux.push(data[i].incorrectAnswers[j]);
      }
      subArrayAux.push(data[i].correctAnswer);
      subArrayAux.sort(function () {
        return Math.random() - 0.5;
      });
      optionAnswerTotal.push(subArrayAux);
    }

    loadNextQuestionAndAnswers();
  };
  return (
    <div className='body'>
      <Routes>
        <Route
          path='/'
          element={
            <Start
              createAnswers={createAnswers}
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
              createAnswers={createAnswers}
              data={data}
              optionAnswerTotal={optionAnswerTotal}
              loadNextQuestionAndAnswers={loadNextQuestionAndAnswers}
              question={question}
              setQuestion={setQuestion}
              answer={answer}
              setAnswer={setAnswer}
              counter={counter}
              setCounter={setCounter}
            />
          }
        />
        <Route path='instructions' element={<Instructions />} />
        <Route path='*' element={<>Página no encontrada</>} />
      </Routes>{' '}
      <Footer />{' '}
    </div>
  );
};

export default App;
