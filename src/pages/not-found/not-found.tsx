import { Link } from 'react-router-dom';
import { style } from './lib/style';

export function NotFound() {
  return (
    <main style={style}>
      <div>
        <h1>Page not found</h1>
        <Link to="/">To Main Page</Link>
      </div>
    </main>
  );
}
