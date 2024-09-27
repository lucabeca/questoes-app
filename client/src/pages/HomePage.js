import { useState } from 'react';
import { Button } from 'reactstrap';
import { get } from '../utils/methods';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function HomePage() {

  const [questoes, setQuestoes] = useState([]);

  const getQuestoes = () => {
    get('/questoes', { oi: [] }).then((questao) => {
      setQuestoes(questao);
    }).catch((e) => {
      console.error(e);
    })
  }

  return (
    <>
        <div>
          <Button className="btn" color="primary" onClick={getQuestoes}>opa</Button>
          {questoes.length > 0 ? (questoes.map(({ id, titulo, enunciado }) => {
            return (
              <div key={id}>
                <h1> Título eh {titulo}, enunciado eh {enunciado} </h1>
              </div>
            );
          })) : <div> Nenhum dado teste extraído </div>}
        </div>
    </>
  );

}

export default HomePage;
