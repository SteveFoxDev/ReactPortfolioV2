import Header from './components/Header';
import Hero from './components/Hero';
import ThemeButton from './components/ThemeButton';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Button from './components/Button';
import { useTheme } from './hooks/useTheme';
import { useShowOnScroll } from './hooks/useShowOnScroll';

import './scss/main.scss';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [showBackToTop] = useShowOnScroll(.6);

  return (
    <div className='app-container' data-theme={theme}>
      <div className='hello'>
        <Header toggleTheme={toggleTheme} />
        <Hero />
      </div>
      <ThemeButton toggleTheme={toggleTheme} theme={theme}/>

      {showBackToTop && (
        <Button href='#top' type='anchor' className='btn btn-blue btn-to-top'>
          &uarr; back to top
        </Button>
      )}

      <About />

      <Projects />

      <Skills />

      <Contact />
    </div>
  );
}

export default App;
