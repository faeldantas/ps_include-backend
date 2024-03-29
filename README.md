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

## Configurar o Arquivo .env

1. Dentro do diretório `ps_include-backend`, localize o arquivo `.env.example`.
2. Faça uma cópia deste arquivo e renomeie para `.env`.
3. Abra o arquivo `.env` em um editor de texto.
4. Preencha as variáveis de ambiente com os dados do seu banco de dados. Por exemplo:

```plaintext
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=seu_banco_de_dados
```

## Executar a API

1. Após clonar o repositório, instalar as dependências e configurar o arquivo `.env`, você pode executar a API com o seguinte comando:

```bash
npm start
```