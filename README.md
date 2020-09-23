# Sansung Ocean - Trilha Back-end com NodeJs e Express e Laboratório de Banco de Dados com MongoDB

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

TÓPICOS ABORDADOS:

- Sistemas Distribuídos

- Arquiteturas Distribuídas

- Integração de Sistemas

- Web Services

- Computação na Nuvem

- BD: Mongo DB

## Aplicação 

Realizada aplicação no VSCODE 

## Deploy



## Libs Node.js

- Express

- Body-parser

## Introdução a BD 

![introdução a BD ](https://github.com/Fabicaneyu/Ocean_Backend_MongoDB_23_09_2020/blob/master/dbs/dbs.PNG)

## SQL

SQL - Structured Query Language
Query -> Escreve um comando que vai realizar uma consulta no banco de dados

**Tabelas**
<p>
Tabela: participantes
id: 1
nome: João

id: 2
nome: Paula

Tabela: cursos
id: 1
nome: Banco de Dados com MongoDB
professor: 1
link_sala: 1

Tabela: professores
id: 1
nome: Paulo Salvatore
materias:
disponibilidade:

Tabela: links_sala
id: 1
url: https://...
provedor:
senha:

um curso pode ter uma sala (ONE)
uma sala pode ter um curso (ONE)

um curso pode ter um professor (ONE)
um professor pode participar de vários cursos (MANY)

um participante pode participar de vários cursos (MANY)
um curso pode ter vários participantes (MANY)

RELACIONAL -> Quando eu relaciono as entidades
OneToOne
OneToMany
ManyToMany
ManyToOne
</p>
