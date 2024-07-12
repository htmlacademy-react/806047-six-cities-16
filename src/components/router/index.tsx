import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '../layouts/base-layout';
import { Favorites } from '../../pages/favorites/favorites';
import { Offer } from '../../pages/offer/offer';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { AuthGuard, GuestGuard } from '../guards';
import { NotFound } from '../../pages/not-found/not-found';

export function appRouter() {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/favorites',
          element: (
            <GuestGuard>
              <Favorites />
            </GuestGuard>
          ),
        },
        {
          path: '/offer/:offerId',
          element: (
            <GuestGuard>
              <Offer />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: '/login',
      element: (
        <AuthGuard>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
}
