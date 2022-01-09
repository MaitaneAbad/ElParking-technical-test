import '../styles/layout/start.scss';
import { Link } from 'react-router-dom';
const Start = () => {
  return (
    <section className='landing'>
      <h1 className='landing--title'>Numerobis</h1>
      <form className='landing--form'>
        <Link to='game'>
          <input
            className='landing--form__button'
            type='button'
            value='Comenzar juego'
          />
        </Link>
      </form>
    </section>
  );
};
export default Start;
