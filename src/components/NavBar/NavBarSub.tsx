import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuReduxType } from '../../types/MenuRedux.types';

import { SubMenuArray } from '../../arrays/SubMenuArray';

import { NavBarLink } from './NavBarLink';

import styles from './css/NavBarSub.module.css';

export const NavBarSub = () => {
  const menuReduxState = useSelector((state: MenuReduxType) => state.menu);

  const subMenu = SubMenuArray.find(
    (item) => item.parent === menuReduxState.submenu
  );

  const createURL = (string: string) => {
    return string.split(' ').join('_').toLowerCase();
  }

  return (
    <div className={styles['navbar__sub']}>
      {subMenu?.submenu.map((item) => {
        const { mainTitle, links } = item;
        return (
          <ul>
            <li className={styles['navbar__sub-mainTitle']}>
              {mainTitle}
              <ul>
                {links.map((link) => {
                  return (
                    <Link
                      to={`/${subMenu.parent}/${mainTitle}/${createURL(link)}`}
                    >
                      <li className={styles['navbar__sub-link']}>
                        <NavBarLink key={link} menuItem={link} type="sub" />
                      </li>
                    </Link>
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
