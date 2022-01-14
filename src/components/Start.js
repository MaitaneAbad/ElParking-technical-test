import '../styles/layout/start.scss';
import { NavLink } from 'react-router-dom';

const Start = (props) => {
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
              onClick={props.createAnswers}
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
