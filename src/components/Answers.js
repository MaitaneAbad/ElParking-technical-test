import { useState } from 'react';

const Answers = (props) => {
  const [option, setOption] = useState('');
  console.log(props);
  const handleOption = (ev) => {
    setOption(ev.target.value);
  };
  //{props.optionAnswerTotal[props.i][0]}
  return (
    <>
      <h3>{props.item.names}</h3>
      <section>
        <form>
          <label htmlFor='option'>Opciones:</label>
          <label htmlFor='optionA'></label>
          <input
            type='radio'
            id='optionA'
            name='option'
            value={''}
            onChange={handleOption}
          />
          <label htmlFor='optionB'>{}</label>
          <input
            type='radio'
            id='optionB'
            name='option'
            value={''}
            onChange={handleOption}
          />
          <label htmlFor='optionC'>{}</label>
          <input
            type='radio'
            id='optionC'
            name='option'
            value={''}
            onChange={handleOption}
          />
          <label htmlFor='optionD'>{}</label>
          <input
            type='radio'
            id='optionD'
            name='option'
            value={''}
            onChange={handleOption}
          />
        </form>
        <p>Tu opcion es {option}</p>
      </section>
    </>
  );
};
export default Answers;
