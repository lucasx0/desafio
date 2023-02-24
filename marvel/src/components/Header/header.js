import { Link } from 'react-router-dom';
import './header.css';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';

export default function Header() {
  const [url, setUrl] = useState(
    'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a',
  );
  const [search, setSearch] = useState('');

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`,
    );
  };

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
          <input
            type="search"
            placeholder="Buscar"
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchMarvel}
          />
        </div>
      </div>
    </header>
  );
}
