# Api Para cadastro de usuários

essa api tem o intuito de cadastrar novos usuários, e listalos para um front-end
essa api será utilizada para projetos futuros onde terá pagina de login e cadastro de Usuários

## Documentação da API
.
#### method GET
Endpoint para retorno de todos os usuários cadastrados no banco de dados Verbo GET sem limite de usuários mostrados, por se tratar de um projeto ainda em desenvolvimento.
```sh
    Endpoint: http://localhost:3333/users
```
Será retornado um array de objetos onde terá  **nome, email e senha**:

```sh
    [
        {
            nome: "exemplo",
            email: "teste@gmail.com",
            senha: "12345678"
        }
    ]
```

#### Method POST

Endpoint Verbo **POST**:
```sh
    Endpoint: http://localhost:3333/user
```
O Endpoint do Verbo **POST** precisa de um body a ser enviado caso não sejá indentificado a mensagem de erro aparecerá com o Codigo de status 400:

```sh
    {
        "aviso": "E obrigatorio o envio do body erro 400"
    }
```

Caso apareça essa mensagem verifique o que está sendo enviado para API e se a propriedade está correta ex:

```sh
    {
        "name": "exemplo",
        "email": "teste@gmail.com",
        "passeword"": "11"
    }
```
esse é o **corpo que tem que ser enviado para API** os valores são os dados do front-end, caso falte uma propriedade do body uma nova mensagem aparecerá **"não é possivel cadastra usuário"** com Código de status 400 indicando que a solicitação é invalida e para corrigir o erro basta verificar o body e ver se as propriedades se encontram como as daqui de cima.

Mensagem de erro no envio do body:

```sh
    {
        "aviso":"não é possivel cadastra usuário"
    }
```

#### Method DELETE
Endpoint Verbo **DELETE**:
```sh
    Endpoint: http://localhost:3333/use/
```

O Method Delete apagá um user por vez e precisa de uma query para que possa ser apagado com sucesso caso não envie uma mensagem de erro aparecerá:

```sh
    {
        "aviso":"E obrigatorio o envio de id erro 400"
    }
```
evite números acima de 3 bytes e caracteres, caso use uma mensagem de erro será mostrada na tela **"Número invalido digite números de 2 bytes"** com status 403, Para corrigir esse erro dgite apenas Números nada de caracteres.

```sh
    {
        "aviso":"Número invalido digite números de 2 bytes"
    }
```
Para caracteres uma nova mensagem aparecerá na tela **"Não é aceito letras apenas Números de 2 Bytes"** e status 400, para corrigir digite números menores de 3 Bytes.

```sh
    {
        "aviso":"Não é aceito letras apenas Números de 2 Bytes"
    }
```

## Tecnologia

- Node Js
- Express
- Cors
- PostgreSQL
- DotEnv

## License
- Code MIT



