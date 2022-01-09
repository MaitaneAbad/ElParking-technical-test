import { useState } from 'react';
const Answers = (props) => {
  const [option, setOption] = useState('');
  console.log(props);
  const handleOption = (ev) => {
    setOption(ev.target.value);
  };

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
