import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <NavLink to='/'>
      <h1 className='landing--title'>Tri-vi-al</h1>
    </NavLink>
  );
};
export default Header;
