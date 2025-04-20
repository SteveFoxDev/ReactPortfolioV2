import { useShowOnScroll } from '../hooks/useShowOnScroll';
import '../scss/components/ThemeButton.scss';

const ThemeButton = ({ toggleTheme, theme }) => {
  const [showThemeBtn] = useShowOnScroll(.1);
  return (
    <div onClick={toggleTheme} className={`theme theme-${theme} ${showThemeBtn && 'theme-display'}`}>
      <img className='theme-img' src='themeButton.png' alt='Sun and Moon image for dark mode toggle'/>
    </div>
  );
};

export default ThemeButton;
