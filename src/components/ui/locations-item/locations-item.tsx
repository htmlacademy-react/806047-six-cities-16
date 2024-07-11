import { Locations } from '../../../shared/types';

type OwnProps = Locations & {
  active: boolean;
};

export function LocationsItem({ location, path, active }: OwnProps) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item${
          active ? ' tabs__item--active' : ''
        }`}
        href={path}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}
