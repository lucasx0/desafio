import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Inicio
      </Link>
      <Link className="favoritos" to="favoritos">
        Meus HQs Marvel
      </Link>
      <div className="search-bar"></div>
    </header>
  );
}
