//import Answers from './Answers';
import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
const Game = (props) => {
  const [optionFirst, setOptionFirst] = useState('');
  const [askedAnswers, setAskedAnswers] = useState([]);
  const [resumen, setResumen] = useState('hidden');
  const [checkedValid, setCheckedValid] = useState(false);
  //const [askedQuestions, setAskedQuestions] = useState([]);
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
  const validAswers = (val) => {
    if (val === props.data[props.counter - 1].correctAnswer) {
      const correct = <i className='fas fa-check-circle'></i>;
      console.log('respuesta correcta');
      setAnswerValid(correct);
      return true;
    } else {
      console.log('respuesta Incorrecta');
      <i className='fas fa-times-circle'></i>;
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
      questionAnswerPack.push(arrayAux);
      console.log(questionAnswerPack);
      handleOptionInputs(ev);
      props.loadNextQuestionAndAnswers();
    }
    // Cogeme la pregunta y la respuesta y muestramelá más abajo
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  // const resumenQuestion = props.map((question, i) => {
  //   console.log(question);
  //   return (
  //     <li key={i}>
  //       <p>{question.questions}</p>
  //     </li>
  //   );
  // });

  return (
    <>
      <ul className='list'>
        <li key={props.counter}>
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
          <button onClick={handleNextQuestion}>Siguiente</button>
        </li>
      </ul>
      {error}
      {optionFirst}
      <div className={resumen}>
        Resumen del Tri-vi-al
        <ul></ul>
      </div>
    </>
  );
};
export default Game;
