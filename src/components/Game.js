//import Answers from './Answers';
import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
import { Link, Route, Routes } from 'react-router-dom';

const Game = (props) => {
  const [answers, setAnswers] = useState('');
  const [resumen, setResumen] = useState('hidden');
  const [quiz, setQuiz] = useState('');
  const [viewQuestions, setViewQuestions] = useState('');
  const [checkedValid, setCheckedValid] = useState(false);
  const [questionAnswerPack, setQuestionAnswerPack] = useState([]);
  const [counterFalse, setCounterFalse] = useState(0);
  const [counterTrue, setCounterTrue] = useState(0);

  const [error, setError] = useState('');

  const handleOptionInputs = (ev) => {
    setError('');
    setAnswers(ev.target.value);
    setCheckedValid(ev.target.checked);
    validAswers(ev.target.value);
  };

  const validAswers = () => {
    if (answers === props.data[props.counter - 1].correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  const handleNextQuestion = (ev) => {
    const arrayAux = [];
    if (checkedValid !== true) {
      setError('Tienes que seleccionar alguna respuesta');
    } else {
      arrayAux.push(props.question);
      arrayAux.push(answers);
      arrayAux.push(validAswers(ev.target.value));
      questionAnswerPack.push(arrayAux);
      handleOptionInputs(ev);
      props.loadNextQuestionAndAnswers();
    }

    if (ev.target.id === '10') {
      setResumen('');
      setViewQuestions('hidden');
      setQuiz('hidden');
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  console.log(props.data);
  const resumenQuestion = questionAnswerPack.map((item, i) => {
    return (
      <>
        <li key={i}>
          <p>{item[0]}</p>
          <p>
            {item[2] === true ? (
              <i className='fas fa-check-circle'></i>
            ) : (
              <i className='fas fa-times-circle'></i>
            )}
            {item[1]}
          </p>
        </li>
      </>
    );
  });
  // const p = () => {
  //   questionAnswerPack.map((item) => {
  //     if (item[2] === true) {
  //       setCounterTrue(+1);
  //       console.log(counterTrue);
  //     } else if (item[2] === false) {
  //       setCounterFalse(+1);
  //       console.log(counterFalse);
  //     }
  //   });
  // };

  function button() {
    const changeButton = props.counter;
    if (changeButton < props.data.length) {
      return <button onClick={handleNextQuestion}>Siguiente</button>;
    } else {
      return (
        <>
          <div id={props.data.length} onClick={handleNextQuestion}>
            Finalizar
          </div>
        </>
      );
    }
  }

  return (
    <>
      <ul className={quiz}>
        <li key={props.counter} id={props.counter}>
          {props.question}
          <form onSubmit={handleSubmit}>
            {' '}
            <label className='label-radio' htmlFor='firstOption'>
              {props.answer[0]}
            </label>
            <input
              type='radio'
              name='firstOption'
              id={props.answer[0]}
              value={props.answer[0]}
              checked={answers === props.answer[0]}
              onChange={handleOptionInputs}
            />{' '}
            <label className='label-radio' htmlFor='secondOption'>
              {props.answer[1]}
            </label>
            <input
              type='radio'
              name='secondOption'
              id={props.answer[1]}
              value={props.answer[1]}
              checked={answers === props.answer[1]}
              onChange={handleOptionInputs}
            />{' '}
            <label className='label-radio' htmlFor='thirdthOption'>
              {props.answer[2]}
            </label>
            <input
              type='radio'
              name='thirdthOption'
              id={props.answer[2]}
              value={props.answer[2]}
              checked={answers === props.answer[2]}
              onChange={handleOptionInputs}
            />{' '}
            <label className='label-radio' htmlFor='fourthOption'>
              {props.answer[3]}
            </label>
            <input
              type='radio'
              name='fourthOption'
              id={props.answer[3]}
              value={props.answer[3]}
              checked={answers === props.answer[3]}
              onChange={handleOptionInputs}
            />
          </form>
          {button()}
        </li>
      </ul>
      {error}
      <ul className={viewQuestions}>{resumenQuestion}</ul>
      <div className={resumen}>
        Resumen del Tri-vi-al<div>{resumenQuestion}</div>
        <Link to='/'>
          <button>Reset</button>
        </Link>
      </div>
    </>
  );
};
export default Game;
