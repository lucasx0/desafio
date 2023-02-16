import { Link } from 'react-router-dom';
import './header.css';
import { FcSearch } from 'react-icons/fc';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Inicio
      </Link>
      <Link className="favoritos" to="favoritos">
        Meus HQs Marvel
      </Link>
      <div className="search-bar">
        <div className="icons">
          <FcSearch size={30} className="bigIcon" />
          <input type="search" placeholder="Buscar" className="search" />
        </div>
      </div>
    </header>
  );
}
