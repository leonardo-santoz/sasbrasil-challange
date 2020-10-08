<h1>SAS BRASIL CHALLANGE</h1>

<h2>Descrição</h2>
<p>Projeto criado para a companhia SAS BRASIL como forma de participamento no processo seletivo para Programador Júnior.</p>


<h2>Pré-requisitos</h2>
<a href="https://www.docker.com/products/docker-desktop">Docker</a>
<a href="https://classic.yarnpkg.com/en/docs/install/#mac-stable">Yarn</a>
<a href="https://git-scm.com/downloads">Gitt</a>
<a href="https://nodejs.org/en/download/">Node</a>

<h2>Como usar</h2>

<h3>Clone este projeto</h3>
<ol>
    <li>git clone </li>
    <li>cd sasbrasil-challange</li>
</ol>

<h3>Instale as dependências</h3>
<ol>
    <li>yarn</li>
</ol>

<h3>Configure o banco de dados</h3>
<ol>
    <li>docker run --name sasbrasil_db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:alpine</li>
    <li>docker exec -it postgres-docker bash</li>
    <li>psql -U postgres</li>
    <li>create database sasbrasil_db</li>
</ol>

<h3>Execute as migrations</h3>
<ol>
    <li>yarn sequelize db:migrate</li>
</ol>

<h2>Para testar as rotas...</h2>
<ol>
    <li>Instale o <a href="https://insomnia.rest/download/">insomnia core</a>, execute-o e importe o arquivo sasbrasil-docs.json</li>
</ol>
