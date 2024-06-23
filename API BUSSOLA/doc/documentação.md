# Documentação da API One-API Integrada com One Piece API

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

## Capítulos (Chapters)
### Endpoint Base: `/chapter`

**POST** `/chapter` - 

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
**GET** `/chapter`
Retorna todos os capítulos.

Exemplo de uso:

```bash
curl "http://localhost:3000/chapter"
```
Retorno: Retorna uma lista de todos os capítulos.

**GET** `/chapter/:id`
Retorna um capítulo específico pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/chapter/1"
```
Retorno: Retorna os detalhes do capítulo especificado pelo ID.

**PUT** `/chapter/:id`
Atualiza um capítulo existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "titulo": "Romance Dawn - The Dawn of the Adventure (Updated)"
}' "http://localhost:3000/chapter/1"
```
Retorno: Retorna os dados atualizados do capítulo.

**DELETE** `/chapter/:id`
Remove um capítulo pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/chapter/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Personagens (Characters)
### Endpoint Base: /character

**POST** `/character`
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

**GET** `/character`
Retorna todos os personagens.

Exemplo de uso:

```bash
curl "http://localhost:3000/character"
```
Retorno: Retorna uma lista de todos os personagens.

**GET** `/character/:id`
Retorna um personagem epecífico pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/character/1"
```
Retorno: Retorna os detalhes do personagem especificado pelo ID.

**PUT** `/character/:id`
Atualiza um personagem existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Monkey D. Luffy (Updated)"
}' "http://localhost:3000/character/1"
```
Retorno: Retorna os dados atualizados do personagem.

**DELETE** `/character/:id`
Remove um personagem pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/character/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Tripulações (Crews)
### Endpoint Base: /crew

**POST** `/crew`
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

**GET** `/crew`
Retorna todas as tripulações.

Exemplo de uso:

```bash
curl "http://localhost:3000/crew"
```
Retorno: Retorna uma lista de todas as tripulações.

**GET** `/crew/:id`
Retorna uma tripulação específica pelo ID/.

Exemplo de uso:

```bash
curl "http://localhost:3000/crew/1"
```
Retorno: Retorna os detalhes da tripulação especificada pelo ID.

**PUT** `/crew/:id`
Atualiza uma tripulação existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Piratas do Chapéu de Palha (Atualizado)"
}' "http://localhost:3000/crew/1"
```
Retorno: Retorna os dados atualizados da tripulação.

**DELETE** `/crew/:id`
Remove uma tripulação pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/crew/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Frutas do Diabo (Devil Fruits)
### Endpoint Base: /devil-fruit

**POST** `/devil-fruit`
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

**GET** `/devil-fruit`
Retorna todas as frutas do diabo.

Exemplo de uso:

```bash
curl "http://localhost:3000/devil-fruit"
```
Retorno: Retorna uma lista de todas as frutas do diabo.

**GET** `/devil-fruit/:id`
Retorna uma fruta do diabo específica pelo ID.

Exemplo de uso:

```bash
curl "http://localhost:3000/devil-fruit/1"
```
Retorno: Retorna os detalhes da fruta do diabo especificada pelo ID.

**PUT** `/devil-fruit/:id`
Atualiza uma fruta do diabo existente pelo ID.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "nome": "Gomu Gomu no Mi (Atualizado)"
}' "http://localhost:3000/devil-fruit/1"
```
Retorno: Retorna os dados atualizados da fruta do diabo.

**DELETE** `/devil-fruit/:id`
Remove uma fruta do diabo pelo ID.

Exemplo de uso:

```bash
curl -X DELETE "http://localhost:3000/devil-fruit/1"
```
Retorno: Retorna uma confirmação de remoção bem-sucedida.

## Episódios (Episodes)
### Endpoint Base: /episode

**POST** `/episode`
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
