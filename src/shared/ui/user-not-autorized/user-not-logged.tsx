import { Link } from 'react-router-dom';
import { AppRoutes } from '../../lib/conts';

export function UserNotLogged() {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoutes.Login}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}