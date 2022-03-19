import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './css/NavBarLink.module.css';

interface NavBarLinkProps {
  menuItem: string;
  type: 'main' | 'sub';
}

export const NavBarLink = ({ menuItem, type }: NavBarLinkProps) => {
  const reduxMenuDispatch = useDispatch();

  return (
    <li>
      <button
        className={classNames(
          styles['navbar__link'],
          styles[`navbar__link--${type}`]
        )}
        onMouseEnter={() => {
          type === 'main' &&
            reduxMenuDispatch({ type: 'MOUSE_ENTER_LINK', menuItem });
        }}
  
      >
        {menuItem}
      </button>
    </li>
  );
};
