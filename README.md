<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EvandroSilvaProgrammer/blog-with-external-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EvandroSilvaProgrammer/blog-with-external-api">

  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EvandroSilvaProgrammer/blog-with-external-api">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <img alt="" src="https://img.shields.io/badge/Feito por-Evandro Silva AKA SkeBug-blueviolet">
</p>
<h1 align="center" style="font-weight: bold"> 📰 Povoado API 📰</h1>
<h1 align="center">
    <img alt="Blog" title="#Blog" src="src/assets/images/readMe/banner.gif" />
</h1>

<h4 align="center"> 
	🚧 Desenvolvimento 🚧
</h4>

<!-- <h3 align="center"> <a href="https://admiring-lalande-c76a7f.netlify.app/">Acessar a demonstração</a> </h3> -->

---
## 💻 Sobre o projeto

<p>
  Povoado-api é uma API REST para gerenciar pessoas (nome, data de nascimento) e seus respectivos contactos pessoais e/ou corpotativos (telemóvel, email e endereço)

  A API permite:
  <li>O registo de novo contacto, uma pessoa pode ter contactos pessoais ou
corporativos.</li>
  <li>Pesquisa de um contacto;</li>
  <li>Listagem de vários contactos;</li>
  <li>Edição e/ou bloqueio de contacto;</li>

  Num cenário a longo prazo é esperado que se tenha uma API de que possa prover as informações de contactos dos angolanos, tal como tinhamos nas antigas listas amarelas. 
</p>

---
## 🛠 Tecnologias
<p>As seguintes ferramentas foram usadas na construção do projecto:</p>

<ul>
  <li><a href="https://adonisjs.com/">AdonisJS</a></li>
  <li><a href="https://www.postgresql.org/">Postgres</a></li>
  <li><a href="https://www.docker.com/">Docker</a></li>
  <li><a href="https://docs.docker.com/compose/">Docker-compose</a></li>
</ul>


---
## 🚀 Como executar o projeto
---
### ✅ Pré-requisitos:

<li><a href="https://www.docker.com/">Docker</a></li>
<li><a href="https://docs.docker.com/compose/">Docker-compose</a></li>

---
### 🎲 Rodando o projecto
</br>

#### Clone o repositório
```bash
git clone https://github.com/EvandroSilvaProgrammer/povoado-api.git
```
#### Instale as dependências
```bash
npm install
```

#### ou
```bash
yarn
```

#### Variáveis de ambiente
```bash
cp .env.example .env
```

#### Gerar APP_KEY
```bash
node ace generate:key 
```

#### Rodar container em modo de desenvolvimento
```bash
docker-compose up -d -V --build 
```

#### Rodar migrations
```bash
node ace migration:run 
```

#### O projecto estará rodando na porta:3333

---
### end-points
localhost:3333/api/person - Criar pessoa 

localhost:3333/api/person - Buscar todas as pessoas

localhost:3333/api/person/:id - Buscar uma pessoa (id)

localhost:3333/api/personid - Actualizar uma pessoa (id)

localhost:3333/api/person/:id - Deletar uma pessoa (id)

localhost:3333/api/contact/:id - Criar um contacto para uma pessoa (id)

localhost:3333/api/contact - Mostrar todos os contactos

localhost:3333/api/contact/name/:name - Mostrar contactos por nome

localhost:3333/api/contact/phone/:phone - Mostrar contactos por número de telefone

localhost:3333/api/contact/email/:email - Mostrar contacto por email

localhost:3333/api/contact/:id - Actualizar contacto (id)

localhost:3333/api/user/register - Registar usuário

localhost:3333/api/user/login - Login de usuário

localhost:3333/api/user/logout - Logout de usuário
---

---
### Modelo conceitual da Base de Dados
* [PDF](database/Entity-Relationship-Diagram.pdf)

---
### O que precisa ser feito
Testes;
Sistema de autorização eficaz  (administradores, guest)

## 🦸 Autor

<a href="https://github.com/EvandroSilvaProgrammer">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/67426023?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Evandro Silva AKA SkeBug</b></sub></a> <a href="https://github.com/EvandroSilvaProgrammer" title="EvandroSilva">🇦🇴</a>
 <br /> <br />

[![Linkedin Badge](https://img.shields.io/badge/-Evandro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/evandrosilva-programmer/)](https://www.linkedin.com/in/evandrosilva-programmer/) 

[![Linkedin Badge](https://img.shields.io/badge/-Evandro-blue?style=flat-square&logo=facebook&logoColor=white&link=https://www.facebook.com/evandrosilva.programmer)](https://www.facebook.com/evandrosilva.programmer)

[![Gmail Badge](https://img.shields.io/badge/-evandrosilva.programmer@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:evandrosilva.programmer@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Evandro Silva AKA SkeBug 👋🏽 [Entre em contato!](https://www.linkedin.com/in/evandrosilva-programmer/)

---
