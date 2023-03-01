import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../../services/api';

export default function Quadros() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [quadros, setQuadros] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(name);

  useEffect(() => {
    async function loadQuadros() {
      await Api.get(`&name=${name}`)
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

  function salvarQuadrose() {
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
        <h1>{quadros.title}</h1>
        <img
          src={`${quadros.thumbnail.path}.${quadros.thumbnail.extension}`}
          alt={quadros.title}
        />
        <h3>Sinopse</h3>
        <span>{quadros.overview}</span>

        <div className="area-buttons">
          <button onClick={salvarQuadrose}>Salvar</button>
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
