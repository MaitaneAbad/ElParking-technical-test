import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <p>Página no encontrada</p>
      <NavLink to='/'> Vuelve por donde has venido</NavLink>
    </>
  );
};
export default PageNotFound;
