//import Answers from './Answers';
import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
const Game = (props) => {
  const [option, setOption] = useState('');
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('hidden');
  const [third, setThird] = useState('hidden');
  const [fourth, setFourth] = useState('hidden');
  const [fifth, setFifth] = useState('hidden');
  const [sixth, setSixth] = useState('hidden');
  const [seventh, setSeventh] = useState('hidden');
  const [eighth, setEighth] = useState('hidden');
  const [ninth, setNinth] = useState('hidden');
  const [tenth, setTenth] = useState('hidden');
  const [resumen, setResumen] = useState('hidden');
  console.log(props.optionAnswerTotal);

  // const handleOption = (ev) => {
  //   setOption(ev.target.id);
  // };

  const handleNextQuestion = (ev) => {
    console.log(ev);
    ev.preventDefault();

    switch (ev.target.id) {
      case 'first':
        setFirst('hidden');
        setSecond('');
        break;
      case 'second':
        setSecond('hidden');
        setThird('');
        break;
      case 'third':
        setThird('hidden');
        setFourth('');
        break;
      case 'fourth':
        setFourth('hidden');
        setFifth('');
        break;
      case 'fifth':
        setFifth('hidden');
        setSixth('');
        break;
      case 'sixth':
        setSixth('hidden');
        setSeventh('');
        break;
      case 'seventh':
        setSeventh('hidden');
        setEighth('');
        break;
      case 'eighth':
        setEighth('hidden');
        setNinth('');
        break;
      case 'ninth':
        setNinth('hidden');
        setTenth('');
        break;
      case 'tenth':
        setTenth('hidden');
        setResumen('');
        break;
      default:
        break;
    }
  };
  const resumenQuestion = props.data.map((question, i) => {
    return (
      <li key={i}>
        <p>{question.questions}</p>
      </li>
    );
  });
  return (
    <>
      <ul className='list'>
        <li className={first}>
          {props.data[0].questions}
          <form></form>
          <button onClick={handleNextQuestion} id='first'>
            Siguiente
          </button>
        </li>

        <li className={second}>
          {props.data[1].questions}
          <button onClick={handleNextQuestion} id='second'>
            Siguiente
          </button>
        </li>
        <li className={third}>
          {props.data[2].questions}
          <button onClick={handleNextQuestion} id='third'>
            Siguiente
          </button>
        </li>
        <li className={fourth}>
          {props.data[3].questions}
          <button onClick={handleNextQuestion} id='fourth'>
            Siguiente
          </button>
        </li>
        <li className={fifth}>
          {props.data[4].questions}
          <button onClick={handleNextQuestion} id='fifth'>
            Siguiente
          </button>
        </li>
        <li className={sixth}>
          {props.data[5].questions}
          <button onClick={handleNextQuestion} id='sixth'>
            Siguiente
          </button>
        </li>
        <li className={seventh}>
          {props.data[6].questions}
          <button onClick={handleNextQuestion} id='seventh'>
            Siguiente
          </button>
        </li>
        <li className={eighth}>
          {props.data[7].questions}
          <button onClick={handleNextQuestion} id='eighth'>
            Siguiente
          </button>
        </li>
        <li className={ninth}>
          {props.data[8].questions}
          <button onClick={handleNextQuestion} id='ninth'>
            Siguiente
          </button>
        </li>
        <li className={tenth}>
          {props.data[9].questions}
          <button onClick={handleNextQuestion} id='tenth'>
            Resumen
          </button>
        </li>
      </ul>
      <div className={resumen}>
        Resumen del Tri-vi-al
        <ul>{resumenQuestion}</ul>
      </div>
    </>
  );
};
export default Game;
