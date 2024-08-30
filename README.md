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

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v12 ou superior)

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

### Modelo Lógico do Banco de Dados
![Lógico_3](https://github.com/user-attachments/assets/56625222-aa4e-4889-b6e1-407946b395bb)

### Script de criação do Banco de Dados

```
-- Criação da tabela "niveis"
CREATE TABLE niveis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela "categorias"
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela "dificuldade"
CREATE TABLE dificuldade (
    id SERIAL PRIMARY KEY,
    nivel VARCHAR(255) NOT NULL
);

-- Criação da tabela "modalidades"
CREATE TABLE modalidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    nivel_id INT REFERENCES niveis(id)
);

-- Criação da tabela "provas"
CREATE TABLE provas (
    id SERIAL PRIMARY KEY,
    ano DATE NOT NULL,
    modalidade_id INT REFERENCES modalidades(id),
    pdf VARCHAR(255)
);

-- Criação da tabela "arquivo"
CREATE TABLE arquivo (
    id SERIAL PRIMARY KEY,
    diretorio VARCHAR(255) NOT NULL
);

-- Criação da tabela "subcategorias"
CREATE TABLE subcategorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria_id INT REFERENCES categorias(id)
);

-- Criação da tabela "topicos"
CREATE TABLE topicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    subcategoria_id INT REFERENCES subcategorias(id)
);

-- Criação da tabela "solucoes"
CREATE TABLE solucoes (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

-- Criação da tabela "questoes"
CREATE TABLE questoes (
    id SERIAL PRIMARY KEY,
    prova_id INT REFERENCES provas(id),
    titulo VARCHAR(255) NOT NULL,
    enunciado VARCHAR(255) NOT NULL,
    categoria_id INT REFERENCES categorias(id),
    dificuldade_id INT REFERENCES dificuldade(id),
    solucao_id INT REFERENCES solucoes(id)
);
```
