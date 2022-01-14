import { NavLink } from 'react-router-dom';
import ResumenQuestion from './ResumenQuestion';
const ResumenGame = (props) => {
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
              data={props.data}
            />
          </ul>
          <p className='main__sectionAnswers--resumen__score'>
            Número de respuestas correctas:
            <span className='main__sectionAnswers--resumen__score--span'>
              {' ' + props.score}
            </span>
          </p>
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
