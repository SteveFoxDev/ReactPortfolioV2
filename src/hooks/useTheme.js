import useLocalStorage from "use-local-storage";

export function useTheme(){
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage(
      'theme',
      defaultDark ? 'dark' : 'light'
    );
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'; //if theme === light -> switch to dark else switch to light
      setTheme(newTheme);
    };

    return [theme, toggleTheme];
}