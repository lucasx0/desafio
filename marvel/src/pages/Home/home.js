import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCharacter } from '../../services/characterAPI';
import './home.css';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadM() {
      try {
        const response = await getAllCharacter();

        if (response) {
          setCharacters(response.data.results);
          //console.log(response.data.data.results);
          setCharacters(response.data.results.slice(0, 10));
        }
      } catch (err) {
        console.log(err);
      }
    }

    setLoading(false);

    loadM();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando ...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-quadros">
        {characters.map((char) => {
          return (
            <article key={char.id}>
              <strong>{char.name}</strong>
              <img
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={`Foto do ${char.name}`}
              />
              <Link to={`quadros/${char.name}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
