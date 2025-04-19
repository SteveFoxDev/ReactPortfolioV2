import NavMenu from './NavMenu';
import CollapsedNav from './CollapsedNav';
import SVGIcon from '../assets/foxLogo.svg?react';
import '../scss/components/Header.scss';


const Header = () => {
  return (
    <header className='header' id='top'>
      <div className='logo__box'><SVGIcon className='logo' /> <p className='header__name'>Steve Fox</p></div>
        <div className="header__nav-top">
        <NavMenu />
        </div>

        <div className="header__nav-btn">
          <CollapsedNav />
        </div>
    </header>
  );
};

export default Header;
