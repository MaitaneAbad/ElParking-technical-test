import '../styles/layout/start.scss';
import { NavLink } from 'react-router-dom';

const Start = (props) => {
  const createAnswers = () => {
    for (let i = 0; i < props.data.length; i++) {
      const subArrayAux = [];
      for (let j = 0; j < props.data[i].incorrectAnswers.length; j++) {
        subArrayAux.push(props.data[i].incorrectAnswers[j]);
      }
      subArrayAux.push(props.data[i].correctAnswer);
      subArrayAux.sort(function () {
        return Math.random() - 0.5;
      });
      props.optionAnswerTotal.push(subArrayAux);
    }

    props.loadNextQuestionAndAnswers();
  };

  return (
    <section className='landing'>
      <h1 className='landing--title'>Tri-vi-al</h1>
      <form className='landing--form'>
        <div className='landing--form__containerButtons'>
          <NavLink to='game'>
            <input
              className='landing--form__containerButtons--button'
              type='button'
              value='Comenzar juego'
              onClick={createAnswers}
            />
          </NavLink>
          <NavLink to='instructions'>
            <input
              className='landing--form__containerButtons--button'
              type='button'
              value='¿Cómo se juega?'
            />
          </NavLink>
        </div>
      </form>
    </section>
  );
};
export default Start;
