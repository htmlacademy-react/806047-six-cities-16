import { RouteKey } from '../types';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const AppRoutes: Record<RouteKey, string> = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '/404',
};

export const RootClassName: Record<string, string> = {
  [AppRoutes.Root]: 'page--gray page--main',
  [AppRoutes.Login]: 'page--gray page--login',
  [AppRoutes.Login]: 'page--gray page--login',
  [AppRoutes.Offer]: '',
  [AppRoutes.NotFound]: '',
};
