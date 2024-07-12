import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '../layouts/base-layout';
import { Favorites } from '../../pages/favorites/favorites';
import { Offer } from '../../pages/offer/offer';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { AuthGuard, GuestGuard } from '../guards';
import { NotFound } from '../../pages/not-found/not-found';
import { AppRoutes } from '../../shared/lib/conts';

export function appRouter() {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: AppRoutes.Root,
          element: <Main />,
        },
        {
          path: AppRoutes.Favorites,
          element: (
            <GuestGuard>
              <Favorites />
            </GuestGuard>
          ),
        },
        {
          path: `${AppRoutes.Offer}/:offerId`,
          element: (
            <GuestGuard>
              <Offer />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: AppRoutes.Login,
      element: (
        <AuthGuard>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: AppRoutes.NotFound,
      element: <NotFound />,
    },
  ]);
}
