import { NavLink } from 'react-router-dom';
import '../styles/layout/instructions.scss';
const Instructions = () => {
  return (
    <div className='instructions'>
      <NavLink to='/'>
        <button className='instructions__button'>Volver</button>
      </NavLink>
      <section className='instructions__section'>
        <p className='instructions__section--paragraph'>
          Bienvenido a Tri-vi-al, este juego consiste en responder 10 preguntas
          basadas en matemáticas y ver el resultado de las preguntas una vez
          contestadas.
        </p>
      </section>
    </div>
  );
};
export default Instructions;
