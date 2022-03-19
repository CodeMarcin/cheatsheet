import { MainMenuArray } from '../../arrays/MainMenuArray';

import { NavBarLink } from './NavBarLink';

import styles from './css/NavBarMain.module.css';

interface NavBarMainProps {

}

export const NavBarMain = () => {
  
  const navBarLinkHandler = () => {

    
  }

  return (
    <ul className={styles['navbar__main']}>
      {MainMenuArray.map((mainMenuItem, mainMenuIndex) => {
        return (
          <NavBarLink key={mainMenuIndex} menuItem={mainMenuItem} type="main"  />
        );
      })}
    </ul>
  );
};
