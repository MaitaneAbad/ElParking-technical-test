import { NavLink } from 'react-router-dom';
import '../styles/layout/pageNotFound.scss';
const PageNotFound = () => {
  return (
    <div className='notFound'>
      <p className='notFound__title'>Página no encontrada</p>
      <div className='notFound__link'>
        <NavLink to='/'> Vuelve por donde has venido</NavLink>
      </div>
    </div>
  );
};
export default PageNotFound;
