import { useState } from 'react';
const Answers = (props) => {
  //console.log(props.answerData);
  const [option, setOption] = useState('');
  const handleOption = (ev) => {
    setOption(ev.target.value);
  };

  return (
    <>
      <h3>{props.answerData.names}</h3>
      <section>
        <form>
          <label htmlFor='option'>Opciones:</label>
          <label htmlFor='optionA'>{props.optionA}</label>
          <input
            type='radio'
            id='optionA'
            name='option'
            value={props.optionA}
            onChange={handleOption}
          />
          <label htmlFor='optionB'>{props.optionB}</label>
          <input
            type='radio'
            id='optionB'
            name='option'
            value={props.optionB}
            onChange={handleOption}
          />
          <label htmlFor='optionC'>{props.optionC}</label>
          <input
            type='radio'
            id='optionC'
            name='option'
            value={props.optionC}
            onChange={handleOption}
          />
          <label htmlFor='optionD'>{props.optionD}</label>
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
