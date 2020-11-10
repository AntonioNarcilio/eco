## Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:14.15-alpine

# criar o subdiretório node_modules em /home/node juntamente com o diretório app. 
# A criação desses diretórios garantirá que eles tenham as permissões que desejamos, 
# o que será importante quando criarmos módulos de node locais no container com npm instal
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Definindo o diretorio de trabalho
WORKDIR /home/node/app

# Copie os arquivos
COPY package*.json ./

# Instale as dependencias do projeto
RUN npm install

# Copie o código da aplicação para o mesmo diretório de trabalho do container:
COPY . .

# Para garantir que os arquivos da aplicação sejam de propriedade do usuário não-root node,
# copie as permissões do diretório da aplicação para o diretório no container
COPY --chown=node:node . .

# Defina o usuário para node:
USER node

# Exponha a porta:
EXPOSE 3000

# Rode o projeto
CMD [ "npm", "start" ]