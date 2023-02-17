import React, { useEffect } from 'react';

import Api from '../../services/api';

export default function Home() {
  useEffect(() => {
    async function loadM() {
      const response = await Api.get();
      console.log(response);
    }

    loadM();
  }, []);

  return (
    <div className="container">
      {/*  <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div> */}
      marvel
    </div>
  );
}
