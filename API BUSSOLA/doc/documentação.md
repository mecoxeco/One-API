# Documentação da API One-API Integrada com One Piece API

## Capítulos (Chapters)

### Endpoint Base: `/chapter`

1. **POST /chapter**
   - **Descrição**: Cria um novo capítulo.
   - **Exemplo de uso**:
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
   - **Retorno**: Retorna os dados do capítulo criado.

2. **GET /chapter**
   - **Descrição**: Retorna todos os capítulos.
   - **Exemplo de uso**:
     ```bash
     curl "http://localhost:3000/chapter"
     ```
   - **Retorno**: Retorna uma lista de todos os capítulos.

3. **GET /chapter/:id**
   - **Descrição**: Retorna um capítulo específico pelo ID.
   - **Exemplo de uso**:
     ```bash
     curl "http://localhost:3000/chapter/1"
     ```
   - **Retorno**: Retorna os detalhes do capítulo especificado pelo ID.

4. **PUT /chapter/:id**
   - **Descrição**: Atualiza um capítulo existente pelo ID.
   - **Exemplo de uso**:
     ```bash
     curl -X PUT -H "Content-Type: application/json" -d '{
       "titulo": "Romance Dawn - The Dawn of the Adventure (Updated)"
     }' "http://localhost:3000/chapter/1"
     ```
   - **Retorno**: Retorna os dados atualizados do capítulo.

5. **DELETE /chapter/:id**
   - **Descrição**: Remove um capítulo pelo ID.
   - **Exemplo de uso**:
     ```bash
     curl -X DELETE "http://localhost:3000/chapter/1"
     ```
   - **Retorno**: Retorna uma confirmação de remoção bem-sucedida.

## Instalação da One Piece API (GoLang)

Link da API "https://github.com/amafoas/one-piece-api"

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

