import { CITIES } from '../lib/conts';

type CityNames = (typeof CITIES)[number];

export type Locations = {
  location: CityNames;
  path: string;
};

export type RouteKey = 'Root' | 'Login' | 'Favorites' | 'Offer' | 'NotFound';
