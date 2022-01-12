import '../styles/layout/start.scss';

const Start = (props) => {
  console.log(props);
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
    props.setHiddenStart('hidden');
    props.setHiddenGame('');
  };

  return (
    <section className={`landing ${props.hiddenStart}`}>
      <h1 className='landing--title'>Tri-vi-al</h1>
      <form className='landing--form'>
        <input
          className='landing--form__button'
          type='button'
          value='Comenzar juego'
          onClick={createAnswers}
        />
      </form>
    </section>
  );
};
export default Start;