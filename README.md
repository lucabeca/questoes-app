![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# Sistema de Consulta de Questões de Informática

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

- react: Biblioteca principal para construir a interface de usuário.
- react-router-dom: Biblioteca para o gerenciamento de rotas no React.

## Instruções de Instalação e Uso

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v12 ou superior)
