//import Answers from './Answers';
import '../styles/layout/game.scss';
import { useState } from 'react/cjs/react.development';
const Game = (props) => {
  const [option, setOption] = useState('');
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('hidden');
  const [questionThree, setQuestionThree] = useState('hidden');
  const [questionFour, setQuestionFour] = useState('hidden');
  const [questionFive, setQuestionFive] = useState('hidden');
  const [questionSix, setQuestionSix] = useState('hidden');
  const [questionSeven, setQuestionSeven] = useState('hidden');
  const [questionEight, setQuestionEight] = useState('hidden');
  const [questionNine, setQuestionNine] = useState('hidden');
  const [questionTen, setQuestionTen] = useState('hidden');

  const generateAnswers = () => {
    let numberOptions = 3;
    for (let i = 0; i < props.data.length; i++) {
      let subArray = [];
      // Este es el subArray auxiliar que contendrá 3
      //respuestas aleatorias y la 4º será la correcta
      for (let j = 0; j < numberOptions; j++) {
        const random = Math.ceil(Math.random() * 1000);
        subArray.push(random.toString());
      }
      const correctOption = props.data[i].correctAnswer;
      subArray.push(correctOption);
      //Reordenar de forma aleatoria los elementos
      //(Para que no siempre sea la ultima correcta).

      // La función Math.random() nos devuelve un número
      //aleatorio entre 0 y 0.9999..., lo que conseguimos al restarle 0.5
      //es que nos genere números negativos y positivos para que la función
      // sort() nos re-ordene el array de forma aleatoria colocando un
      // elemento delante otro detrás.
      subArray.sort(function () {
        return Math.random() - 0.5;
      });
      //Añadir los subArrays a un array de respuestas globales
      props.optionAnswerTotal.push(subArray);
    }
  };

  // const a = () => {
  //   if (props.data.names === 0) {
  //     console.log('pp');
  //   }
  // };

  generateAnswers();

  const handleOption = (ev) => {
    setOption(ev.currentTarget.value);
  };

  // const switchOption = (k) => {
  //   switch (k) {
  //     case 0:
  //       console.log(props.optionAnswerTotal[k][0].toString());
  //       return props.optionAnswerTotal[k][0].toString();
  //     case 1:
  //       console.log(props.optionAnswerTotal[k][1].toString());
  //       return props.optionAnswerTotal[k][1].toString();
  //     case 2:
  //       console.log(props.optionAnswerTotal[k][2].toString());
  //       return props.optionAnswerTotal[k][2].toString();
  //     case 3:
  //       console.log(props.optionAnswerTotal[k][3].toString());
  //       return props.optionAnswerTotal[k][3].toString();

  //     default:
  //       break;
  //   }
  // };

  const nextQuestion = (ev) => {
    console.log(ev.isTrusted);
    ev.preventDefault();
    switch (ev.target.id) {
      case '-1':
        console.log(' i = -1');

        break;
      case 'formLi_0':
        console.log(' i = 0');
        setQuestionTwo('hidden');

        break;
      case 'formLi_1':
        console.log(' i = 1');
        setQuestionOne('');
        setQuestionTwo('');
        setQuestionThree('');
        break;
      case 'formLi_2':
        console.log(' i = 2');
        setQuestionTwo('hidden');
        break;
      case 'formLi_3':
        console.log(' i = 3');
        break;
      case 'formLi_4':
        console.log(' i = 4');
        break;
      case 'formLi_5':
        console.log(' i = 5');
        break;
      case 'formLi_6':
        console.log(' i = 6');
        break;
      case 'formLi_7':
        console.log(' i = 7');
        break;
      case 'formLi_8':
        console.log(' i = 8');
        break;
      case 'formLi_9':
        console.log(' i = 9');

        break;
      default:
        break;
    }
  };
  console.log(props.data[0]);
  const listAnswer = props.data.map((item, i) => {
    return (
      <>
        <li key={i} className='list__li'>
          {/* <Answers
          item={item}
          data={props.data}
          generateAnswers={generateAnswers}
        ></Answers> */}
          <h3>{item.names}</h3>
          <form
            id={`formLi_${i}`}
            onSubmit={nextQuestion}
            className='list__li--form'
          >
            <label htmlFor='option' className='list__li--form__labels'>
              <label
                htmlFor='optionA'
                className='list__li--form__labels--labelFirst'
              >
                {props.optionAnswerTotal[i][0]}
                <input
                  type='radio'
                  id='optionA'
                  name='option'
                  value='A'
                  checked={option === 'A' ? true : false}
                  onChange={handleOption}
                />
              </label>
              <label
                htmlFor='optionB'
                className='list__li--form__labels--labelSecond'
              >
                {props.optionAnswerTotal[i][1]}
                <input
                  type='radio'
                  id='optionB'
                  name='option'
                  value='B'
                  checked={option === 'B' ? true : false}
                  onChange={handleOption}
                />
              </label>
              <label
                htmlFor='optionC'
                className='list__li--form__labels--labelThird'
              >
                {props.optionAnswerTotal[i][2]}
                <input
                  type='radio'
                  id='optionC'
                  name='option'
                  value='C'
                  checked={option === 'C' ? true : false}
                  onChange={handleOption}
                />
              </label>
              <label
                htmlFor='optionD'
                className='list__li--form__labels--labelFourth'
              >
                {props.optionAnswerTotal[i][3]}
                <input
                  type='radio'
                  id='optionD'
                  name='option'
                  value='D'
                  checked={option === 'D' ? true : false}
                  onChange={handleOption}
                />{' '}
              </label>

              {/* <input type='submit' value='Siguiente pregunta' /> */}
            </label>
          </form>
          <p>Tu opcion es {option}</p>{' '}
        </li>
      </>
    );
  });
  return <ul className='list'>{listAnswer}</ul>;
};
export default Game;
