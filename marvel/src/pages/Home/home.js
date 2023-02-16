import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const publicKey = 'bfd388ba325f5978227228d57ef8c0cc';
const privateKey = 'd3f3b9e0d9b32b5d2cfa8c89065f9eec231e04f6';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export default function Home() {
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
      )
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
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
