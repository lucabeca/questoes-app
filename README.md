![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# Sistema de Consulta de Questões da OBI

## Visão Geral

Este projeto é um sistema de consulta de questões das provas da OBI (Olimpiada Brasileira de Informática), com base em características como dificuldade, tipo e ano. O sistema é dividido em duas partes:

- Back-End: Desenvolvido com Node.js e Express, o servidor lida com as requisições HTTP e se conecta a um banco de dados PostgreSQL para armazenar e recuperar questões.
- Front-End: Desenvolvido com React, a interface de usuário permite a interação com o sistema, permitindo consultar e visualizar questões de forma dinâmica.

## Tecnologias Utilizadas

### Back-End
- Node.js
- Express
- PostgreSQL
- pg
- dotenv

### Front-End
- React
- React Router DOM

## Dependências

### Back-End (Node.js)
As principais dependências do servidor Node.js são:

- express: Framework para criar o servidor HTTP e gerenciar rotas.
- pg: Biblioteca para conectar e interagir com o banco de dados PostgreSQL.
- dotenv: Gerenciador de variáveis de ambiente para armazenar informações sensíveis.

### Front-End (React)
As dependências do front-end React incluem:

- react: Biblioteca principal 
para construir a interface de usuário.
- react-router-dom: Biblioteca para o gerenciamento de rotas no React.

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Requisitos funcionais e não funcionais do sistema
## Requisitos funcionais

RF01 - Consulta de Questões:
- O sistema deve permitir que os usuários consultem questões baseadas em critérios como dificuldade, tipo e ano.

RF02 - Visualização de Questões:
- O sistema deve permitir que os usuários visualizem os detalhes de uma questão específica, incluindo a pergunta, dificuldade, tipo e ano.

RF03 - Filtro de Questões:
- O sistema deve permitir que os usuários filtrem as questões por dificuldade, tipo, e ano.

## Requisitos não funcionais

RNF01 - Usabilidade:
- O sistema deve ser intuitivo e fácil de usar, com uma interface responsiva que funcione bem em dispositivos móveis e desktops.

RNF02 - Manutenibilidade:
- O código do sistema deve ser modular e bem documentado, facilitando a manutenção e a adição de novas funcionalidades.

RNF03 - Compatibilidade:
- O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Edge, Safari) e funcionar corretamente em diferentes resoluções de tela.

### Modelo Físico do Banco de Dados
![Lógico_6](https://github.com/user-attachments/assets/1a224e8c-e49d-4310-822a-dff967c935cd)

### Relações do Banco de Dados
# provas
Representa as provas de cada edição da OBI.
- Relações:
1. modalidade: Cada prova está associada a uma modalidade, como "iniciação" ou "programação", através de modalidade_id.
2. arquivo: Relaciona-se com um arquivo específico, contendo o diretório físico, através de arquivo_id.

# modalidades
- Relações:
1. Cada modalidade está associada a um nível através de nivel_id.

# niveis
Relações:
1. Referenciada pela tabela modalidade, indicando o nível de cada modalidade.

# arquivos
Relações:
1. Referenciada pelas tabelas provas e questoes.

# dificuldades
Relações:
1. Referenciada pela tabela questoes, que associa cada questão a um nível de dificuldade através de dificuldade_id.

# questoes
- Relações:
1. Uma prova, através de prova_id.
2. Um nível de dificuldade, através de dificuldade_id.
3. As questões também têm relação de muitos-para-muitos com categorias, representada pela tabela associativa questoes_categorias.

# categorias
Relações:
1. Relaciona-se com questões através da tabela associativa questoes_categorias.

# questoes_categorias
Relações:
1. Cada linha nesta tabela relaciona uma questão a uma categoria.

# solucoes
Relações:
1. Cada solução está associada a uma questão através de id_questao.

# subcategorias
Relações:
1. Cada subcategoria está associada a uma categoria através de categoria_id.

# topicos
Relações:
1. Cada tópico está associado a uma subcategoria através de subcategoria_id.
#

### Script de criação do Banco de Dados PostGree SQL

```
-- Tabela níveis
CREATE TABLE niveis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255)
);

-- Tabela modalidades
CREATE TABLE modalidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    nivel_id INT,
    FOREIGN KEY (nivel_id) REFERENCES niveis(id)
);

-- Tabela Arquivos
CREATE TABLE arquivos (
    id SERIAL PRIMARY KEY,
    diretorio VARCHAR(510)
);

-- Tabela provas
CREATE TABLE provas (
    id SERIAL PRIMARY KEY,
    ano DATE,
    modalidade_id INT,
    arquivo_id INT,
    fase VARCHAR(255),
    turno VARCHAR(255),
    FOREIGN KEY (modalidade_id) REFERENCES modalidades(id),
    FOREIGN KEY (arquivo_id) REFERENCES arquivos(id)
);

-- Tabela dificuldades
CREATE TABLE dificuldades (
    id SERIAL PRIMARY KEY,
    nivel VARCHAR(255)
);

-- Tabela questões
CREATE TABLE questoes (
    id SERIAL PRIMARY KEY,
    prova_id INT,
    titulo VARCHAR(1000),
    enunciado TEXT,
    dificuldade_id INT,
    arquivo_id INT,
    FOREIGN KEY (prova_id) REFERENCES provas(id),
    FOREIGN KEY (dificuldade_id) REFERENCES dificuldades(id),
    FOREIGN KEY (arquivo_id) REFERENCES arquivos(id)
);

-- Tabela categorias
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255)
);

-- Tabela subcategorias
CREATE TABLE subcategorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela tópicos
CREATE TABLE topicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    subcategoria_id INT,
    FOREIGN KEY (subcategoria_id) REFERENCES subcategorias(id)
);

-- Tabela questões_categorias (N:N)
CREATE TABLE questoes_categorias (
    questao_id INT,
    categoria_id INT,
    PRIMARY KEY (questao_id, categoria_id),
    FOREIGN KEY (questao_id) REFERENCES questoes(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela soluções
CREATE TABLE solucoes (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255),
    id_questao INT,
    FOREIGN KEY (id_questao) REFERENCES questoes(id)
);
```
