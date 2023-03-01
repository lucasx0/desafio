import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter } from '../../services/characterAPI';

export default function Quadros() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [quadros, setQuadros] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuadros() {
      await getCharacter(name)
        .then((response) => {
          setQuadros(response.data.data);
          setLoading(false);
        })
        .catch(() => {
          navigate('/', { replace: true });
          return;
        });
    }
    loadQuadros();

    return () => {
      console.log('componente desmontado');
    };
  }, [navigate, name]);

  function salvarQuadros() {
    const meusQuadros = localStorage.get('@QuadrosMarvel');

    let quadrosSalvos = JSON.parse(meusQuadros) || [];

    const hasQuadros = quadrosSalvos.some(
      (quadrosSalvos) => quadrosSalvos.id === quadros.id,
    );
    if (hasQuadros) {
      alert('esse quadro está na sua lista!');
      return;
    }
    quadrosSalvos.push(quadros);
    localStorage.setItem('QuadrosMarvel', JSON.stringify(quadrosSalvos));
    alert('quadrinhos salvos com sucesso.');

    if (loading) {
      return (
        <div className="quadros-info">
          <h1>Carregando detalhes..</h1>
        </div>
      );
    }
    return (
      <div className="quadros-info">
        <h1>oiiiiiiiiiiiiii</h1>
        <img
          src={`${quadros.thumbnail.path}.${quadros.thumbnail.extension}`}
          alt={quadros.title}
        />
        <h3>Sinopse</h3>
        <span>{quadros.overview}</span>

        <div className="area-buttons">
          <button onClick={salvarQuadros}>Salvar</button>
          <button>
            <a
              target="blank"
              rel="external"
              href={`https://youtube.com/results?search_query=${quadros.title} Trailer`}
            >
              Trailer
            </a>
          </button>
        </div>
      </div>
    );
  }
}
