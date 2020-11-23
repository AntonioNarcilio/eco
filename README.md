
<p align="center">
  <img alt="Logo" src="./.github/logo_eco.png" width="20%"/>
  
<br/>  
<br/>

<a href="https://docs.docker.com/engine/install/">
 <img alt="docker" title="docker" src="https://img.shields.io/static/v1?label=docker&message=containerization%20technology&color=3B7F59&labelColor=282a36&style=flat&logo=Docker&logoColor=white" />
</a>
  

<a href="https://nodejs.org/en/">
 <img alt="Node js" title="node js" src="https://img.shields.io/static/v1?label=node%20js&message=javascript%20runtime%20environment&color=3B7F59&labelColor=282a36&style=flat&logo=node.js&logoColor=white" />
</a>


<img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/repo-size/AntonioNarcilio/Eco?color=3B7F59&labelColor=282a36&logo=GitHub&logoColor=white" />

<a href="https://github.com/AntonioNarcilio/eco/blob/master/LICENSE">
 <img src="https://img.shields.io/github/license/AntonioNarcilio/Eco?label=license&color=3B7F59&labelColor=282a36" alt="license"/>
</a>

<img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/last-commit/AntonioNarcilio/Eco?&color=3B7F59&labelColor=282a36" />

<img alt="GitHub language coun" title="GitHub language coun" src="https://img.shields.io/github/languages/count/AntonioNarcilio/Eco?&color=3B7F59&labelColor=282a36" />

<img alt="GitHub top language" title="GitHub top language" src="https://img.shields.io/github/languages/top/AntonioNarcilio/Eco?&color=3B7F59&labelColor=282a36" />


</p>

---

### O que é o ECO ❓

O nome **Eco** ♻ refere-se a uma "abreviação" de ecológico ou ecológica. O Eco é uma *"simples" aplicação web* desenvolvida com o intuito de facilitar a coleta de resíduos/produtos recicláveis na cidade de São Luís ❤, divulgando não só as empresas que trabalham 👔 nesse ramo como também, ajudando a encontrar os eco pontos 🗺 espalhados na cidade.

<a title="Visualizar projeto" href="https://www.figma.com/file/86Th2vaeifrilntBXJZshi/Eco?node-id=0%3A1">
	<img alt="Happy" src="./.github/template.png"/>
</a>
<h6 align="center">Clique na imagem para visualizar o projeto no figma</h6>

<br/>


### 🚀 **Atualmente na aplicação da para fazer o que ❓**
✅ Visualizar os eco pontos ou empresas cadastradas na aplicação;

✅ Visualizar os dados como: nome, endereço, whatsapp ...

✅ Cadastrar um eco ponto;



<br/>

### 🚧 **Portas utilizadas**

Servidor 🌐 | Porta 🚪
---------:|:--------
web |  3000
api |  3333


<br/>

### ⬇️ **Utilizando projeto localmente**

> ⚠ **Atenção**: Antes de seguir o passo a passo abaixo lembre-se de instalar o [node-js](https://nodejs.org/en/)

>No diretório desejado execute no terminal o comando abaixo 👇.

~~~bash
git clone https://github.com/AntonioNarcilio/eco.git
~~~

> Depois entre no diretório `eco`
~~~bash
cd eco
~~~

> Primeiro iremos configurar a API, pois nossa aplicação irá se comunicar com ela. Então entre no diretório `api`
~~~bash
cd api
~~~

> Então basta executar o comando abaixo para instalar as dependências do API

~~~bash
npm install
~~~

> Com isso após ter finalizado a instalação de todas as dependências da API basta rodar o comando abaixo 👇 para iniciar

~~~bash
npm start
~~~


> Pronto 🎊 a API já esta funcionando, você consegue acessar em
`localhost:3333` (opcional)
---

> Agora abra um novo terminal e entre no diretorio `eco` para iniciarmos a aplicação Web. E logo em seguida entre no diretório `front`
~~~bash
cd front
~~~

> Iremos executar o comando abaixo para instalar as dependências da aplicação
~~~bash
npm install
~~~

> Logo após ter finalizado a instalação de todas as dependências da aplicação basta rodar o comando abaixo 👇 para iniciar
~~~bash
npm start
~~~

> Pronto 🎊 a aplicação já esta funcionando, e está consumindo a API que configuramos, agora basta ir no navegador de sua preferência e digitar na barra de endereço
`localhost:3000` e pronto :).
<br/>

### ⬇️ **Rodando o **Eco** com docker** 🐳

> ⚠ **Atenção**: Antes de seguir o passo a passo abaixo lembre-se de instalar o [docker](https://docs.docker.com)

> Para executar o projeto através de um container no docker é bem fácil basta executar os comandos

~~~bash
docker pull joaosipauba/eco:1.0
docker pull joaosipauba/ecoapi:1.0
~~~

> Esses comandos baixarão as imagens referentes ao projeto armazenada em meu repositório. Para visualizar a image basta executar:

~~~bash
docker images
~~~
> Que ira aparecer algo como
![](./.github/docker-images.png)

> Com isso precisamos criar dois containers para rodar a aplicação, primeiro execute:

~~~bash
docker run --name ecoapi -p 3333:3333 -d joaosipauba/ecoapi:1.0
~~~
> Em seguida execute:
~~~bash
docker run --name eco -p 3000:3000 -d joaosipauba/eco:1.0
~~~

> De forma bem direta esse comando irá criar dois containers, o primeiro chamado **ecoapi**, e o segundo chamdo **eco**. Os containers rodarão nas porta 3333 e 3000 respectivamente. Para vermos se eles realmente estão funcionando, basta executar o comando abaixo:

~~~bash
docker ps
~~~
> Que retorná algo como:
![](./.github/docker-ps.png)

---

> Pronto 🎊 a aplicação já esta funcionando, agora basta ir no navegador de sua preferência e digitar na barra de endereço
`0.0.0.0:3000` e pronto :).



<br/>

### 📜 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/AntonioNarcilio/eco/blob/main/LICENSE) para mais detalhes.

<br/>

---

Created by [antonionarcilio](https://github.com/AntonioNarcilio) e [JoaoSipauba](https://github.com/JoaoSipauba) 🤓
