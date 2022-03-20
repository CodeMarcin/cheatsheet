import { useSelector } from 'react-redux';
import { MenuReduxType } from '../../types/MenuRedux.types';

import { SubMenuArray } from '../../arrays/SubMenuArray';

import { NavBarLink } from './NavBarLink';

import styles from './css/NavBarSub.module.css';

export const NavBarSub = () => {
  const menuReduxState = useSelector((state: MenuReduxType) => state.menu);

  const subMenu = SubMenuArray.find(
    (item) => item.parent === menuReduxState.submenu
  );

  return (
    <div className={styles['navbar__sub']}>
      {subMenu?.submenu.map((item) => {
        return (
          <ul>
            <li className={styles['navbar__sub-mainTitle']}>
              {item.mainTitle}
              <ul>
                {item.links.map((link) => {
                  return (
                    <li className={styles["navbar__sub-link"]}>
                      <NavBarLink key={link} menuItem={link} type="sub" />
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
