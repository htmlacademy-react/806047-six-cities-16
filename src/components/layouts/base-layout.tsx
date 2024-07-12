import { Outlet, useLocation } from 'react-router-dom';
import { RootClassName } from '../../shared/lib/conts';
import { withFooter } from './lib/with-footer';
import { Header, UserNotLogged, UserProfile } from '../../shared/ui';
import { Footer } from '../../shared/ui/footer';

import { isAuthorized } from '../guards/mock';
export function BaseLayout() {
  const { pathname } = useLocation();

  return (
    <div className={`page ${RootClassName[pathname]}`}>
      <Header>{isAuthorized ? <UserProfile /> : <UserNotLogged />}</Header>
      <Outlet />

      {withFooter(pathname) && <Footer />}
    </div>
  );
}
