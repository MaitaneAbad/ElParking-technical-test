import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callToApi from './services/callToApi';
import Start from './Start';
import Game from './Game';
const App = () => {
  const [answerData, setAnswerData] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setAnswerData(response);
    });
  }, []);
  console.log(answerData);

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/game' element={<Game answerData={answerData} />} />
      </Routes>
    </div>
  );
};

export default App;
