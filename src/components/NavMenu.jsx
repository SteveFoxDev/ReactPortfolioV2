import '../scss/components/NavMenu.scss';

const NavMenu = ({ type, onClick }) => {
  // default is row, unless col is specified
  return <nav className='nav'>
  <ul className={`nav-list nav-list--${type}`}>
    <a onClick={onClick} className={`nav-list__link nav-list__link--${type}`} href='#about'>
      <li className={`nav-list__item nav-list__item--${type}`}>About</li>
    </a>
    <a onClick={onClick} className={`nav-list__link nav-list__link--${type}`} href='#projects'>
      <li className={`nav-list__item nav-list__item--${type}`}>Projects</li>
    </a>
    <a onClick={onClick} className={`nav-list__link nav-list__link--${type}`} href='#skills'>
      <li className={`nav-list__item nav-list__item--${type}`}>Skills</li>
    </a>
    <a onClick={onClick} className={`nav-list__link nav-list__link--${type}`} href='#contact'>
      <li className={`nav-list__item nav-list__item--${type}`}>Contact</li>
    </a>
  </ul>
  </nav>
}; 

export default NavMenu;
