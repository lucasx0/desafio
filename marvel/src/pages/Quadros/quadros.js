import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter } from '../../services/characterAPI';
import { toast } from 'react-toastify';
import './quadros.css';

export default function Quadros() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [quadros, setQuadros] = useState({});

  useEffect(() => {
    async function loadQuadros() {
      await getCharacter(name)
        .then((response) => {
          setQuadros(response.data.results[0]);
        })
        .catch(() => {
          navigate('/', { replace: true });
          return;
        });
    }
    loadQuadros();
  }, [name, navigate]);

  function salvarQuadros() {
    const meusQuadros = localStorage.getItem('@QuadrosMarvel');

    let quadrosSalvos = JSON.parse(meusQuadros) || [];

    const hasQuadros = quadrosSalvos.some(
      (quadrosSalvos) => quadrosSalvos.name === quadros.name,
    );
    if (hasQuadros) {
      toast.warn('Esse HQ já está na sua lista!');
      return;
    }
    quadrosSalvos.push(quadros);
    localStorage.setItem('@QuadrosMarvel', JSON.stringify(quadrosSalvos));
    toast.success('Filme salvo com Sucesso!');
  }

  return (
    <div className="quadros-info">
      <h1>{quadros.name}</h1>

      <div className="area-buttons">
        <img
          src={`${quadros?.thumbnail?.path}.${quadros?.thumbnail?.extension}`}
          alt=""
        />
        <button onClick={salvarQuadros}>Salvar</button>

        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${quadros.name} Marvel`}
          >
            Veja no Youtube
          </a>
        </button>
      </div>
    </div>
  );
}
