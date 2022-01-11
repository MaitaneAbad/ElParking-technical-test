//import Answers from './Answers';
import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
import { Link, Route, Routes } from 'react-router-dom';

const Game = (props) => {
  const [optionFirst, setOptionFirst] = useState('');
  const [resumen, setResumen] = useState('hidden');
  const [quiz, setQuiz] = useState('');
  const [viewQuestions, setViewQuestions] = useState('');
  const [checkedValid, setCheckedValid] = useState(false);
  const [questionAnswerPack, setQuestionAnswerPack] = useState([]);
  const [error, setError] = useState('');
  const [answerValid, setAnswerValid] = useState('');

  const handleOptionInputs = (ev) => {
    setError('');
    setOptionFirst(ev.target.value);
    setCheckedValid(ev.target.checked);
    validAswers(ev.target.value);
  };
  //
  const validAswers = () => {
    console.log(props.data[props.counter - 1].correctAnswer);
    if (optionFirst === props.data[props.counter - 1].correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  const handleNextQuestion = (ev) => {
    const arrayAux = [];
    if (checkedValid !== true) {
      setError('Tienes que seleccionar alguna respuesta');
      console.log('error');
    } else {
      console.log(props.question);
      arrayAux.push(props.question);
      arrayAux.push(optionFirst);
      arrayAux.push(validAswers(ev.target.value));
      console.log(arrayAux);
      questionAnswerPack.push(arrayAux);
      console.log(questionAnswerPack);
      handleOptionInputs(ev);
      props.loadNextQuestionAndAnswers();
    }

    if (ev.target.id === '10') {
      setResumen('');
      setViewQuestions('hidden');
      setQuiz('hidden');
    }
    // Cogeme la pregunta y la respuesta y muestramelá más abajo
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
              checked={optionFirst === props.answer[0]}
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
              checked={optionFirst === props.answer[1]}
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
              checked={optionFirst === props.answer[2]}
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
              checked={optionFirst === props.answer[3]}
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
      </div>
    </>
  );
};
export default Game;
