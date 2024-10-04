import { useEffect, useState } from 'react';
import { get } from '../utils/methods';
import { Button, Card, CardBody, CardHeader, Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';

const dificuldadeOptions = [
  { value: '1', label: 'Fácil' },
  { value: '2', label: 'Médio' },
  { value: '3', label: 'Difícil' },
]

function HomePage() {

  const [loading, setLoading] = useState(false);
  const [anosProvasOptions, setAnosProvasOptions] = useState([]);
  const [modalidadeOptions, setModalidadeOptions] = useState([]);
  const [nivelOptions, setNivelOptions] = useState([]);
  const [categoriaOptions, setCategoriaOptions] = useState([]);
  const [subcategoriaOptions, setSubcategoriaOptions] = useState([]);
  const [topicoOptions, setTopicoOptions] = useState([]);
  const [faseOptions, setFaseOptions] = useState([]);

  const [selectedAnoProva, setSelectedAnoProva] = useState([]);
  const [selectedModalidade, setSelectedModalidade] = useState([]);
  const [selectedNivel, setSelectedNivel] = useState([]);
  const [selectedDificuldade, setSelectedDificuldade] = useState([]);
  const [selectedFase, setSelectedFase] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [valorTitulo, setValorTitulo] = useState([]);
  const [valorEnunciado, setValorEnunciado] = useState([]);

  // const [filtros, setFiltos] = useState({
  //   selectedAnoProva: []
  // });

  // const oncChange = (campo, valor) => {
  //   setFiltros((prev) => {
  //     return {
  //       ...prev,
  //       [campo]: valor
  //     }
  //   })
  // };
  
  useEffect(() => {
    get("/subcategoria", {
      categorias: selectedCategories
    }).then((data) => {
      setSubcategoriaOptions(data);
    })
  }, [selectedCategories]);

  useEffect(() => {
    get("/topico", {
      subcategorias: selectedSubCategories
    }).then((data) => {
      setTopicoOptions(data);
    })
  }, [selectedSubCategories]);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      get("/anoProva"),
      get("/modalidade"),
      get("/nivel"),
      get("/categoria"),
      get("/fase"),
    ])
      .then(
        ([
          dataAnoProva,
          dataModalidade,
          dataNivel,
          dataCategoria,
          dataFase,
        ]) => {
          setCategoriaOptions(dataCategoria);
          setAnosProvasOptions(dataAnoProva);
          setModalidadeOptions(dataModalidade);
          setNivelOptions(dataNivel);
          setFaseOptions(dataFase);
          setLoading(false);
        }
      )
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        setLoading(false); // Para garantir que o loading seja desativado mesmo em caso de erro
      });
  }, []);

  console.log(valorTitulo);
  return (
    <>
      <div>
        <Container className="my-5">
          <Row>
            <Col lg={{ size: 8, offset: 2 }} md={{ size: 10, offset: 1 }} sm="12">
              <Card>
                <CardHeader>Buscar questões</CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label for="titulo">Título</Label>
                          <Input
                            onChange={(event) => {
                              setValorTitulo(event.target.value);
                            }}
                            placeholder="Digite o título" 
                            id="titulo" 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label for="enunciado">Enunciado</Label>
                          <Input 
                            placeholder="Digite o enunciado" 
                            id="enunciado"
                            onChange={(event) => {
                              setValorEnunciado(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="ano">Ano da prova</Label>
                          <Select onChange={(vl) => { 
                            setSelectedAnoProva(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={anosProvasOptions} id="anoprova" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="nivel">Nível</Label>
                          <Select onChange={(vl) => { 
                            setSelectedNivel(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={nivelOptions} id="nivel" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="modalidade">Modalidade</Label>
                          <Select onChange={(vl) => { 
                            setSelectedModalidade(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={modalidadeOptions} id="modalidade" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="fase">Fase</Label>
                          <Select onChange={(vl) => { 
                            setSelectedFase(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={faseOptions} id="fase" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="categoria">Categoria</Label>
                          <Select onChange={(vl) => { 
                            setSelectedCategories(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={categoriaOptions} id="categoria" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="subcategoria">Subcategoria</Label>
                          <Select onChange={(vl) => { 
                            setSelectedSubCategories(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={subcategoriaOptions} id="subcategoria" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="topico">Tópico</Label>
                          <Select onChange={(vl) => { 
                            setSelectedTopics(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={topicoOptions} id="topico" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="dificuldade">Dificuldade</Label>
                          <Select onChange={(vl) => { 
                            setSelectedDificuldade(vl.map(({ value }) => value)) }
                          } isMulti placeholder="Selecione..." options={dificuldadeOptions} id="dificuldade" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" className="text-center">
                        <Button color="success" className="mr-2">Buscar questões</Button>
                        <Button color="danger">Limpar filtro</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );

}

export default HomePage;
