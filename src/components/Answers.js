import { useState } from 'react';
const Answers = (props) => {
  const [option, setOption] = useState('');

  const handleOption = (ev) => {
    setOption(ev.target.value);
  };

  let optionAnswerTotal = [];
  const generateAnswers = () => {
    //  debugger;
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
      optionAnswerTotal.push(subArray);
    }
  };
  generateAnswers();
  console.log(optionAnswerTotal);
  return (
    <>
      <h3>{props.item.names}</h3>
      <section>
        <form>
          <label htmlFor='option'>Opciones:</label>
          <label htmlFor='optionA'>a</label>
          <input
            type='radio'
            id='optionA'
            name='option'
            value={props.optionA}
            onChange={handleOption}
          />
          <label htmlFor='optionB'>b</label>
          <input
            type='radio'
            id='optionB'
            name='option'
            value={props.optionB}
            onChange={handleOption}
          />
          <label htmlFor='optionC'>c</label>
          <input
            type='radio'
            id='optionC'
            name='option'
            value={props.optionC}
            onChange={handleOption}
          />
          <label htmlFor='optionD'>d</label>
          <input
            type='radio'
            id='optionD'
            name='option'
            value={props.optionD}
            onChange={handleOption}
          />
        </form>
        <p>Tu opcion es {option}</p>
      </section>
    </>
  );
};
export default Answers;
