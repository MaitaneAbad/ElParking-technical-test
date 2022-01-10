import '../styles/layout/start.scss';
import { Link } from 'react-router-dom';
const Start = (props) => {
  console.log(props.data.length);

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
    console.log(props.optionAnswerTotal);
  };

  return (
    <section className='landing'>
      <h1 className='landing--title'>Tri-vi-al</h1>
      <form className='landing--form'>
        <Link to='game'>
          <input
            className='landing--form__button'
            type='button'
            value='Comenzar juego'
            onClick={createAnswers}
          />
        </Link>
      </form>
    </section>
  );
};
export default Start;
