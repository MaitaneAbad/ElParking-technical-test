import { NavLink } from 'react-router-dom';
import ResumenQuestion from './ResumenQuestion';
const ResumenGame = (props) => {
  console.log(props);
  const handleReset = () => {
    props.setCounter(0);
  };
  return (
    <>
      {' '}
      <section className='main__sectionAnswers'>
        <div className={`main__sectionAnswers--resumen ${props.resumen}`}>
          <h2 className='main__sectionAnswers--resumen__title'>
            Resumen del juego
          </h2>
          <ul className='main__sectionAnswers--resumen__list'>
            <ResumenQuestion
              questionAnswerPack={props.questionAnswerPack}
              setQuestionAnswerPack={props.setQuestionAnswerPack}
              data={props.data}
              optionAnswerTotal={props.optionAnswerTotal}
              loadNextQuestionAndAnswers={props.loadNextQuestionAndAnswers}
              question={props.question}
              setQuestion={props.setQuestion}
              answer={props.answer}
              setAnswer={props.setAnswer}
              counter={props.counter}
              setCounter={props.setCounter}
            />
          </ul>
          <p>Número de respuestas correctas:{' ' + props.score}</p>
          <NavLink to='/'>
            <button
              className='main__sectionAnswers--resumen__buttonReset'
              onClick={handleReset}
            >
              Reset
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};
export default ResumenGame;
