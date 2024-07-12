import { PropsWithChildren } from 'react';

export function LocationList({ children }: PropsWithChildren) {
  return <ul className="locations__list tabs__list">{children}</ul>;
}
