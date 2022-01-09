import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callToApi from './services/callToApi';
//import ls from './services/localStorage';
import Start from './Start';
import Game from './Game';
const App = () => {
  const [data, setData] = useState({});

  // const [localStorage, setLocalStorage] = useState(ls.get('localStorage'));

  // ls.set('localStorage', localStorage);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  //  console.log(localStorage);
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/game' element={<Game data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
