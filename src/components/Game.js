import Answers from './Answers';
const Game = (props) => {
  let optionAnswerTotal = [];
  console.log(props.answerData);
  const createNumbers = () => {
    let numberOption = 3;
    // for (let i = 0; i < 3 * props.answerData.length; i++) {
    //   const random = Math.ceil(Math.random() * 1000);
    //   const pushArray = optionAnswerRandom.push(random);
    // }
    // console.log(optionAnswer);
  };
  const subArray = () => {};
  createNumbers();
  const listAnswer = props.answerData.map((answerData, i) => {
    return (
      <li key={i}>
        <Answers answerData={answerData}></Answers>
      </li>
    );
  });
  return <ul>{listAnswer}</ul>;
};
export default Game;
