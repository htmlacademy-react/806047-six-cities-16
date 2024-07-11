import { Header } from '../../components/ui';
import { LocationsItem } from '../../components/ui/locations-item';
import { LocationList } from '../../components/ui/locations-list';
import { CITIES } from '../../shared/lib/conts';

export function MainEmpty() {
  return (
    <div className="page page--gray page--main">
      <Header isAuthorized />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList>
              {CITIES.map((city) => (
                <LocationsItem
                  key={city}
                  location={city}
                  path="#"
                  active={city === 'Dusseldorf'}
                />
              ))}
            </LocationList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in
                  Dusseldorf
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
