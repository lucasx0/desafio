import React, { useEffect } from 'react';
import Api from '../../services/api';

export default function Home() {
  useEffect(() => {
    Api.get(
      `http://gateway.marvel.com/v1/public/characters?ts=&apikey${Api.public}`,
    );
  }, []);
  return <div></div>;
}
