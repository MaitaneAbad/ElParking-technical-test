import { NavLink } from 'react-router-dom';
const Footer = (props) => {
  const handlehidden = () => {
    console.log('clicado');
    props.setHidden('');
  };
  console.log(props.setHidden);
  return (
    <footer className='footer'>
      <nav>
        <ul className='footer__menu'>
          <li className='footer__menu-item'>
            <NavLink to='/' onClick={handlehidden}>
              Jugar
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              className={(navData) => {
                return navData.isActive
                  ? 'footer__menu-link active'
                  : 'footer__menu-link ';
              }}
              to='/instrucciones'
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className='footer__copy'>© Adalab</small>
    </footer>
  );
};
export default Footer;
