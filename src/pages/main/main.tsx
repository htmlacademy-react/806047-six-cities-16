import { CITIES } from '../../shared/lib/conts';
import { OfferCard } from '../../shared/ui';
import { Dropdown } from '../../shared/ui/dropdown';
import { LocationsItem } from '../../shared/ui/locations-item';
import { LocationList } from '../../shared/ui/locations-list';

type OwnProps = {
  offerCount?: number;
};

export function Main({ offerCount }: OwnProps) {
  const OfferList = Array(offerCount)
    .fill(null)
    .map((_, i) => <OfferCard key={i++} />);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList>
            {CITIES.map((city) => (
              <LocationsItem
                key={city}
                active={city === 'Paris'}
                location={city}
                path="#"
              />
            ))}
          </LocationList>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <Dropdown />
            </form>
            <div className="cities__places-list places__list tabs__content">
              {OfferList}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}
