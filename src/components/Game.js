//import Answers from './Answers';
//import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
import { Link, Route, Routes } from 'react-router-dom';
//import Header from './components/Header';

const Game = (props) => {
  const [answers, setAnswers] = useState('');
  const [resumen, setResumen] = useState('hidden');
  const [sectionHidden, setSectionHidden] = useState('hidden');
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
      setSectionHidden('');
      setError('Tienes que seleccionar alguna respuesta');
    } else {
      setSectionHidden('hidden');
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

  const resumenQuestion = questionAnswerPack.map((item, i) => {
    console.log(props);

    return (
      <li className='main__sectionQuestions--viewQuestion__list--item' key={i}>
        <p className='main__sectionQuestions--viewQuestion__list--item__question'>
          {item[0]}
        </p>
        <div className='main__sectionQuestions--viewQuestion__list--item__answer'>
          <div className='main__sectionQuestions--viewQuestion__list--item__answer--iconSection'>
            {item[2] === true ? (
              <i className=' main__sectionQuestions--viewQuestion__list--item__answer--iconSection__correct fas fa-check-circle'></i>
            ) : (
              <i className='main__sectionQuestions--viewQuestion__list--item__answer--iconSection__error fas fa-times-circle'></i>
            )}
            <p className='main__sectionQuestions--viewQuestion__list--item__answer--iconSection__answerClick'>
              {item[1]}
            </p>
          </div>
          {item[2] === false ? (
            <p className='main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer'>
              Correct:
              <span className='main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer__span'>
                {props.data[i].correctAnswer}{' '}
              </span>
            </p>
          ) : (
            ''
          )}
        </div>
      </li>
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
      return (
        <div className='main__sectionQuestions--list__containerButton'>
          <button
            className='main__sectionQuestions--list__containerButton--button'
            onClick={handleNextQuestion}
          >
            Siguiente
          </button>
        </div>
      );
    } else {
      return (
        <div className='main__sectionQuestions--list__containerButton'>
          <button
            className='main__sectionQuestions--list__containerButton--button'
            id={props.data.length}
            onClick={handleNextQuestion}
          >
            Finalizar
          </button>
        </div>
      );
    }
  }

  return (
    <main className='main'>
      {/* <Header /> */}
      <section className='main__sectionQuestions'>
        <ul className={quiz}>
          <li
            className='main__sectionQuestions--list'
            key={props.counter}
            id={props.counter}
          >
            <p className='main__sectionQuestions--list__question'>
              {props.question}
            </p>
            <form
              onSubmit={handleSubmit}
              className='main__sectionQuestions--list__form'
            >
              {' '}
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='firstOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='firstOption'
                  id={props.answer[0]}
                  value={props.answer[0]}
                  checked={answers === props.answer[0]}
                  onChange={handleOptionInputs}
                />
                {props.answer[0]}
              </label>
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='secondOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='secondOption'
                  id={props.answer[1]}
                  value={props.answer[1]}
                  checked={answers === props.answer[1]}
                  onChange={handleOptionInputs}
                />
                {props.answer[1]}
              </label>{' '}
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='thirdthOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='thirdthOption'
                  id={props.answer[2]}
                  value={props.answer[2]}
                  checked={answers === props.answer[2]}
                  onChange={handleOptionInputs}
                />
                {props.answer[2]}
              </label>
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='fourthOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='fourthOption'
                  id={props.answer[3]}
                  value={props.answer[3]}
                  checked={answers === props.answer[3]}
                  onChange={handleOptionInputs}
                />
                {props.answer[3]}
              </label>
            </form>
            {button()}
          </li>
        </ul>
        <article className={`main__error ${sectionHidden}`}>
          <p className='main__error--title'>{error}</p>
        </article>
        <article className='main__sectionQuestions--viewQuestion'>
          <ul
            className={`main__sectionQuestions--viewQuestion__list ${viewQuestions}`}
          >
            {resumenQuestion}
          </ul>
        </article>
      </section>
      <section className='main__sectionAnswers'>
        <div className={resumen}>
          <h2>Resumen del Tri-vi-al</h2>
          <ul>{resumenQuestion}</ul>
          <Link to='/'>
            <button>Reset</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Game;
