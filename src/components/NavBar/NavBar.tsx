import { useSelector, useDispatch } from 'react-redux';
import { NavBarMain } from './NavBarMain';
import { NavBarSub } from './NavBarSub';

import { MenuReduxType } from '../../types/MenuRedux.types';

import styles from './css/NavBar.module.css';

export const NavBar = () => {
  const menuReduxState = useSelector((state: MenuReduxType) => state.menu);
  const reduxMenuDispatch = useDispatch();

  return (
    <div className={styles['navbar']} onMouseEnter={() => {
      reduxMenuDispatch({ type: 'MOUSE_ENTER_WRAPPER' });
    }}
    onMouseLeave={() => {
      reduxMenuDispatch({ type: 'MOUSE_LEAV_WRAPPER' });
    }}>
      <div
        className={styles['navbar__wrapper']}
        
      >
        <NavBarMain />
        {menuReduxState.active && menuReduxState.submenu  && <NavBarSub />}
      </div>
    </div>
  );
};
