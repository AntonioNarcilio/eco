
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

<img alt="Happy" src="./.github/template.png"/>


<br/>


### 🚀 **Atualmente na aplicação da para fazer o que ❓**
✅ Visualizar os eco pontos ou empresas cadastradas na aplicação;

✅ Visualizar os dados como: nome, endereço, whatsapp ...

✅ Cadastrar uma eco ponto;



<br/>

### 🚧 **Portas utilizadas**

Servidor 🌐 | Porta 🚪
---------:|:--------
web |  3000


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

> Então basta executar o comando abaixo para instalar as dependências do projeto

~~~bash
npm install
~~~

> Com isso após ter finalizado a instalação de todas as dependências do projeto basta rodar o comando abaixo 👇 para iniciar a aplicação

~~~bash
npm start
~~~

---

> Pronto 🎊 a aplicação já esta funcionando, agora basta ir no navegador de sua preferência e digitar na barra de endereço
`localhost:3000` e pronto :).

<br/>


### ⬇️ **Rodando o **Eco** com docker** 🐳

> ⚠ **Atenção**: Antes de seguir o passo a passo abaixo lembre-se de instalar o [docker](https://docs.docker.com)

> Para executar o projeto através de um container no docker é bem fácil basta executar o comando

~~~bash
docker pull antonionarcilio/eco:1.0
~~~

> Esse comando irá baixar uma image referente ao projeto armazenada em meu repositório. Para visualizar a image basta executar:

~~~bash
docker images
~~~
> Que ira aparecer algo como
![](./.github/docker-images.png)

> Com isso precisamos criar um container para rodar a aplicação, então execute:

~~~bash
docker run --name eco -p 3000:3000 -d antonionarcilio/eco:1.0 
~~~

> De forma bem direta esse comando irá criar um container chamado **eco** que rodará na porta 3000. Para vermos se ele realmente esta rodando basta executar o comando abaixo:

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

Created by antonionarcilio 🤓