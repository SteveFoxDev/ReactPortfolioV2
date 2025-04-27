import { useState } from 'react';
import NavMenu from './NavMenu';
import '../scss/components/CollapsedNav.scss';

const CollapsedNav = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  }; 

  const closeSidebar = () => {
    setIsChecked(false);
  };

  return (
    <div className='collapsed-nav'>
      <label htmlFor='hamburger' className='hamburger-menu'>
        <input
          type='checkbox'
          id='hamburger'
          onChange={handleChange}
          checked={isChecked}
        />
      </label>

      <aside className='sidebar'>
        <NavMenu onClick={closeSidebar} type='col'/>
      </aside>
    </div>
  );
};

export default CollapsedNav;
