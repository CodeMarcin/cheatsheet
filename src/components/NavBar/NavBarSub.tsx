import { useSelector } from 'react-redux';
import { MenuReduxType } from '../../types/MenuRedux.types';

import { SubMenuArray } from '../../arrays/SubMenuArray';

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
          <div>
            <ul>
              <li>
                {item.mainTitle}
                <ul>
                  {item.links.map(item => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
