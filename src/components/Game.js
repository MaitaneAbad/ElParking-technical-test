import Answers from './Answers';
const Game = (props) => {
  console.log(props.data.length);
  // let optionAnswerTotal = [];
  // const generateAnswers = () => {
  //   let numberOptions = 3;
  //   for (let i = 0; i < props.data.length; i++) {
  //     let subArray = [];
  //     // Este es el subArray auxiliar que contendrá 3
  //     //respuestas aleatorias y la 4º será la correcta
  //     for (let j = 0; j < numberOptions; j++) {
  //       const random = Math.ceil(Math.random() * 1000);
  //       subArray.push(random.toString());
  //     }
  //     const correctOption = props.data[i].correctAnswer;
  //     subArray.push(correctOption);
  //     //Reordenar de forma aleatoria los elementos
  //     //(Para que no siempre sea la ultima correcta).

  //     // La función Math.random() nos devuelve un número
  //     //aleatorio entre 0 y 0.9999..., lo que conseguimos al restarle 0.5
  //     //es que nos genere números negativos y positivos para que la función
  //     // sort() nos re-ordene el array de forma aleatoria colocando un
  //     // elemento delante otro detrás.
  //     subArray.sort(function () {
  //       return Math.random() - 0.5;
  //     });
  //     //Añadir los subArrays a un arrray de respuestas globales
  //     optionAnswerTotal.push(subArray);
  //   }
  // };

  //  generateAnswers();
  const listAnswer = props.data.map((item, i) => {
    return (
      <li key={i}>
        <Answers item={item} data={props.data}>
          {' '}
        </Answers>
      </li>
    );
  });
  return <ul>{listAnswer}</ul>;
};
export default Game;
