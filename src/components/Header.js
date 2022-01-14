import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const resetCounter = () => {
    props.setCounter(0);
  };

  return (
    <NavLink to='/'>
      <h1 className='landing--title' onClick={resetCounter}>
        Tri-vi-al
      </h1>
    </NavLink>
  );
};
export default Header;
