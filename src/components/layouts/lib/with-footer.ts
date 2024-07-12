import { AppRoutes } from '../../../shared/lib/conts';
import { invert } from '../../../shared/lib/object-utils';

export function withFooter(pathname: string) {
  const path = invert(AppRoutes, (key) => key.toLowerCase())[
    pathname.toLowerCase()
  ];
  return path === 'favorites';
}
