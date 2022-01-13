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
  // const [localStorage, setLocalStorage] = useState(ls.get('localStorage'));

  // ls.set('localStorage', localStorage);
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
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

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
              setCounter={setCounter}
            />
          }
        />
        <Route path='instructions' element={<Instructions />} />
        <Route path='*' element={<>Página no encontrada</>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
