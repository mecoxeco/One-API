# One Api v2.1

## Documentação da One-API Integrada com One Piece API

## Dependências Utilizadas

### ONE API NestJS

[![NestJS](https://img.shields.io/badge/NestJS-8.0.0-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.4.3-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.17.1-lightgrey.svg)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-6.0.12-green.svg)](https://mongoosejs.com/)
[![Jest](https://img.shields.io/badge/Jest-27.0.6-orange.svg)](https://jestjs.io/)
[![Docker](https://img.shields.io/badge/Docker-20.10.11-blue.svg)](https://www.docker.com/)


## Instalação da One Piece API (GoLang)

Link da API https://github.com/amafoas/one-piece-api"

Para utilizar a API One Piece localmente, certifique-se de ter o Go instalado no seu sistema. Em seguida, siga os passos abaixo:

### Instalação da API

1. Clone o repositório:

   ```bash
   git clone https://github.com/amafoas/one-piece-api
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd one-piece-api
    ```

3. Instale as dependências do projeto:

    ```bash
    go mod download
    Executando a API
    ```

4. Inicie o servidor da API, executando o seguinte comando:

    ```bash
    go run main.go
    ```

O servidor da API estará acessível localmente em: http://localhost:8080.


# Endpoints das entidades na API 

## Data Import (50 itens de cada entidade)
### Endpoint Base: /data-import

1. **POST** `/data-import`
Descrição: Esta rota permite importar dados em massa de uma API externa para a base de dados local e retorna os 50 itens importados de cada entidade (Chapter, Character, Crew, DevilFruit, Episode).

Exemplo de uso:

```bash
curl -X POST "http://localhost:3000/data-import"
```
Retorno:

```
{
  "message": "Importação de dados concluída com sucesso",
  "importedEntities": {
    "chapters": [...], // Array com os 50 capítulos importados
    "characters": [...], // Array com os 50 personagens importados
    "crews": [...], // Array com as 50 tripulações importadas
    "devilFruits": [...], // Array com as 50 frutas do diabo importadas
    "episodes": [...] // Array com os 50 episódios importados
  }
}
```

## Capítulos (Chapters)
### Endpoint Base: /chapter

1. **POST** `/chapter`

Cria um novo capítulo.

Exemplo de uso:
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 1,
  "titulo": "Romance Dawn - The Dawn of the Adventure",
  "volume": 1,
  "capitulo": 1,
  "pgs": 53,
  "lancamento": "1997-07-19"
}' "http://localhost:3000/chapter"
```

Retorno: Retorna os dados do capítulo criado.

2. **GET** `/chapter`
Retorna todos os capítulos.

Exemplo de uso:

```bash
curl "http://localhost:3000/chapter"
```
Retorno: Retorna uma lista de todos os capítulos.

3. **GET** `/chapter/:id`
Retorna um capítulo específico pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/chapter/1"
```
Retorno: Retorna os detalhes do capítulo especificado pelo ID.

4. **PUT** `/chapter/:id`
Atualiza um capítulo existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "titulo": "Romance Dawn - The Dawn of the Adventure (Updated)"
}' "http://localhost:3000/chapter/1"
```
Retorno: Retorna os dados atualizados do capítulo.

5. **DELETE** `/chapter/:id`
Remove um capítulo pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/chapter/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Personagens (Characters)
### Endpoint Base: /character

1. **POST** `/character`
Cria um novo personagem.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 1,
  "nome": "Monkey D. Luffy",
  "idade": 19,
  "status": "Pirata",
  "df": "Gomu Gomu no Mi",
  "dfId": 1,
  "estreia": "1997-07-19",
  "mainAfiliado": "Piratas do Chapéu de Palha",
  "outrasAfiliacoes": "Aliança Ninja-Pirata-Mink-Samurai",
  "ocupacoes": "Capitão",
  "origem": "East Blue",
  "raca": "Humano",
  "recompensa": "1.500.000.000 berries",
  "aniversario": "5 de maio",
  "altura": "1,74 m"
}' "http://localhost:3000/character"
```
Retorno: Retorna os dados do personagem criado.

2. **GET** `/character`
Retorna todos os personagens.

Exemplo de uso:

```bash
curl "http://localhost:3000/character"
```
Retorno: Retorna uma lista de todos os personagens.

3. **GET** `/character/:id`
Retorna um personagem epecífico pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/character/1"
```
Retorno: Retorna os detalhes do personagem especificado pelo ID.

4. **PUT** `/character/:id`
Atualiza um personagem existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Monkey D. Luffy (Updated)"
}' "http://localhost:3000/character/1"
```
Retorno: Retorna os dados atualizados do personagem.

5. **DELETE** `/character/:id`
Remove um personagem pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/character/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Tripulações (Crews)
### Endpoint Base: /crew

1. **POST** `/crew`
Cria uma nova tripulação.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 1,
  "nome": "Piratas do Chapéu de Palha",
  "nomeRomanizado": "Straw Hat Pirates",
  "firstAparicao": "Capítulo 1",
  "capitao": "Monkey D. Luffy",
  "recompensaTotal": "Bilionária",
  "navioPrincipal": "Thousand Sunny",
  "membros": "Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony Tony Chopper, Nico Robin, Franky, Brook, Jinbe",
  "aliados": "Trafalgar D. Water Law, Kin'emon, Heart Pirates, Kozuki Oden"
}' "http://localhost:3000/crew"
```
Retorno: Retorna os dados da tripulação criada.

2. **GET** `/crew`
Retorna todas as tripulações.

Exemplo de uso:

```bash
curl "http://localhost:3000/crew"
```
Retorno: Retorna uma lista de todas as tripulações.

3. **GET** `/crew/:id`
Retorna uma tripulação específica pelo ID/.

Exemplo de uso:

```bash
curl "http://localhost:3000/crew/1"
```
Retorno: Retorna os detalhes da tripulação especificada pelo ID.

4. **PUT** `/crew/:id`
Atualiza uma tripulação existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Piratas do Chapéu de Palha (Atualizado)"
}' "http://localhost:3000/crew/1"
```
Retorno: Retorna os dados atualizados da tripulação.

5. **DELETE** `/crew/:id`
Remove uma tripulação pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/crew/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Frutas do Diabo (Devil Fruits)
### Endpoint Base: /devil-fruit

1. **POST** `/devil-fruit`
Cria uma nova fruta do diabo.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 1,
  "nome": "Gomu Gomu no Mi",
  "tipo": "Paramecia",
  "significado": "Fruta da borracha",
  "firstAparicao": "Capítulo 1",
  "firstUso": "Capítulo 3",
  "usuAtual": "Monkey D. Luffy",
  "usuAnterior": "Portgas D. Ace"
}' "http://localhost:3000/devil-fruit"
```
Retorno: Retorna os dados da fruta do diabo criada.

2. **GET** `/devil-fruit`
Retorna todas as frutas do diabo.

Exemplo de uso:

```bash
curl "http://localhost:3000/devil-fruit"
```
Retorno: Retorna uma lista de todas as frutas do diabo.

3. **GET** `/devil-fruit/:id`
Retorna uma fruta do diabo específica pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/devil-fruit/1"
```
Retorno: Retorna os detalhes da fruta do diabo especificada pelo ID.

4. **PUT** `/devil-fruit/:id`
Atualiza uma fruta do diabo existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Gomu Gomu no Mi (Atualizado)"
}' "http://localhost:3000/devil-fruit/1"
```
Retorno: Retorna os dados atualizados da fruta do diabo.

5. **DELETE** `/devil-fruit/:id`
Remove uma fruta do diabo pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/devil-fruit/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Episódios (Episodes)
### Endpoint Base: /episode

1. **POST** `/episode`
Cria um novo episódio.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": 1,
  "titulo": "Episódio 1 - Eu Sou Luffy! O Homem que se Tornará o Rei dos Piratas!",
  "lancamento": "1999-10-20",
  "lancamentoRemaster": "2020-10-20",
  "personagens": "Monkey D. Luffy, Roronoa Zoro, Nami",
  "temporada": 1,
  "episodio": 1,
  "locais": "Vila Fuchsia, East Blue",
  "abertura": "We Are!"
}' "http://localhost:3000/episode"
```

Retorno: Retorna os dados do episódio criado.

2. **GET** `/episode`

Retorna todos os episódios.

Exemplo de uso:
```bash
curl "http://localhost:3000/episode"
```
Retorno: Retorna uma lista de todos os episódios.

3. **GET** `/episode/:id`
Retorna um episódio específico pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/episode/1"
```
Retorno: Retorna os detalhes do episódio especificado pelo ID.

4. **PUT** `/episode/:id`
Atualiza um episódio existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "titulo": "Episódio 1 - Eu Sou Luffy! O Homem que se Tornará o Rei dos Piratas (Atualizado)"
}' "http://localhost:3000/episode/1"
```
Retorno: Retorna os dados atualizados do episódio.

**DELETE** `/episode/:id`
Remove um episódio pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/episode/1"
```

Retorno: Retorna uma confirmação de remoção bem-sucedida.
