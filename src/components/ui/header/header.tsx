import { UserNotLogged } from '../user-not-autorized';
import { UserProfile } from '../user-profile';

type OwnProps = {
  isAuthorized: boolean;
};

export function Header({ isAuthorized = false }: OwnProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized ? <UserProfile /> : <UserNotLogged />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
