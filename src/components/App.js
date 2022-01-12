//import '../styles/main.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './Game.js';
import Start from './Start.js';
import callToApi from './services/callToApi';

import Footer from './Footer';

function App() {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  const [optionAnswerTotal, setOptionAnswerTotal] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [hidden, setHidden] = useState('hidden');
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
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={
            <Start
              setHidden={setHidden}
              hidden={hidden}
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
            >
              {' '}
              Página principal
            </Game>
          }
        />
        <Route path='/instrucciones' element={<> Instrucciones</>} />
        <Route path='*' element={<>Página no encontrada</>} />
      </Routes>
      <Footer setHidden={setHidden} hidden={hidden}></Footer>
    </div>
  );
}

export default App;
