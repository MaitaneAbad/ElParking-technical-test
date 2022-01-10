//import Answers from './Answers';
import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
const Game = (props) => {
  const [option, setOption] = useState('');
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

  // const handleOption = (ev) => {
  //   setOption(ev.target.id);
  // };
  // const loadNextQuestionAndAnswers = () => {
  //   setCounter(counter + 1);
  //   const a = props.data[counter].questions;

  //   console.log(a);
  // };
  const handleNextQuestion = (ev) => {
    console.log(ev);
    ev.preventDefault();

    switch (ev.target.id) {
      case 'first':
        setFirst('hidden');
        setSecond('');
        props.loadNextQuestionAndAnswers();
        break;
      case 'second':
        setSecond('hidden');
        setThird('');
        props.loadNextQuestionAndAnswers();
        break;
      case 'third':
        setThird('hidden');
        setFourth('');
        props.loadNextQuestionAndAnswers();
        break;
      case 'fourth':
        setFourth('hidden');
        setFifth('');
        //loadNextQuestionAndAnswers();
        break;
      case 'fifth':
        setFifth('hidden');
        setSixth('');
        //loadNextQuestionAndAnswers();
        break;
      case 'sixth':
        setSixth('hidden');
        setSeventh('');
        //  loadNextQuestionAndAnswers();
        break;
      case 'seventh':
        setSeventh('hidden');
        setEighth('');
        //  loadNextQuestionAndAnswers();
        break;
      case 'eighth':
        setEighth('hidden');
        setNinth('');
        //  loadNextQuestionAndAnswers();
        break;
      case 'ninth':
        setNinth('hidden');
        setTenth('');
        //  loadNextQuestionAndAnswers();
        break;
      case 'tenth':
        setTenth('hidden');
        setResumen('');
        //  loadNextQuestionAndAnswers();
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
  // const answers = props.optionAnswerTotal.map((answers, i) => {
  //   console.log(i);
  //   console.log(answers);
  //   return (
  //     <div>
  //       <label htmlFor='firstAnswer'>{props.optionAnswerTotal[i][0]}</label>
  //       {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
  //       <input
  //         type='radio'
  //         name='FirstAnswer'
  //         id='firstAnswer'
  //         value='firstAnswer'
  //         //  checked={paymentType === 'creditCard'}
  //         //  onChange={handlePaymentType}
  //       />
  //     </div>
  //   );
  // });
  return (
    <>
      <ul className='list'>
        <li className={first}>
          {props.a}
          <form>
            {' '}
            <div>
              <label htmlFor='firstAnswer'>
                {/* {props.optionAnswerTotal[0][0]} */}
              </label>
              {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
              <input
                type='radio'
                name='FirstAnswer'
                id='firstAnswer'
                value='firstAnswer'
                //  checked={paymentType === 'creditCard'}
                //  onChange={handlePaymentType}
              />
            </div>
          </form>
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
