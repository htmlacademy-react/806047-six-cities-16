import { Link } from 'react-router-dom';

import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">{children}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}