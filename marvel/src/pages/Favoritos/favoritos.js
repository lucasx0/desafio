import './favoritos.css';
import { useEffect, useState } from 'react';

export default function Favoritos() {
  const [quadros, setQuadros] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@QuadrosMarvel');
    setQuadros(JSON.parse(minhaLista) || []);
    console.log(minhaLista);
    console.log(setQuadros);
  }, []);

  function excluirQuadro(name) {
    let filtroQuadros = quadros.filter((item) => {
      return item.name !== name;
    });

    setQuadros(filtroQuadros);
    localStorage.setItem('@QuadrosMarvel', JSON.stringify(filtroQuadros));
    alert('Filme removido com Sucesso');
  }

  return (
    <div className="meus-quadros">
      <h1>Meus Quadros</h1>
      {quadros.length === 0 && (
        <span>Você não possui nenhum quadro Salvo.</span>
      )}
      <ul>
        {quadros.map((quadro) => {
          return (
            <li key={quadro.id}>
              <span>{quadro.name}</span>

              <div>
                <button onClick={() => excluirQuadro(quadro.name)}>
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
