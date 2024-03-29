# Instruções para Configurar a API PS Include Backend

Este repositório contém a API backend para o projeto PS Include. Siga as instruções abaixo para baixar, configurar e executar a API em sua máquina local.

## Clonar o Repositório

1. Abra seu terminal ou prompt de comando.
2. Navegue até o diretório onde você deseja clonar o repositório.
3. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/faeldantas/ps_include-backend.git

```

## Instalar Dependências

1. Navegue até o diretório recém-clonado `ps_include-backend`.
2. Execute o seguinte comando para instalar todas as dependências do projeto:

```bash
npm install

```

## Rodar Migrations

1. Você deve rodar as migrations com o seguinte comando:

```bash
npx sequelize db:migrate

```
## Rodar Seeds

1. Você deve rodar os seeds após as migrations com o seguinte comando:

```bash
npx sequelize db:seed:all

```

## Configurar o Arquivo .env

1. Dentro do diretório `ps_include-backend`, localize o arquivo `.env.`.
2. Preencha as variáveis de ambiente com os dados do seu banco de dados. Por exemplo:

```plaintext
DATABASE= seu_banco_de_dados
DATABASE_HOST= seu_host
DATABASE_PORT= sua_senha
DATABASE_USERNAME= seu_usuario
DATABASE_PASSWORD= sua_senha

```

## Executar a API

1. Após clonar o repositório, instalar as dependências e configurar o arquivo `.env`, você pode executar a API com o seguinte comando:

```bash
npm start

```