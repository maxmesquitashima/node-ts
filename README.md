# Projeto Node.js com TypeScript e Express

Este é um projeto de exemplo de uma API REST construída com Node.js, Express e TypeScript.

## Funcionalidades Implementadas

- **Criação de Usuários**: A rota `POST /user` permite a criação de novos usuários. A validação garante que os campos `name` e `email` sejam fornecidos.
- **Listagem de Usuários**: A rota `GET /user` retorna uma lista de todos os usuários cadastrados.
- **Deleção de Usuários**: A rota `DELETE /user/:name` permite a remoção de um usuário pelo nome.

## Estrutura do Projeto

O projeto segue uma estrutura organizada, separando as responsabilidades em controllers e services:

- **`src/controllers`**: Responsável por receber as requisições HTTP e enviar as respostas.
- **`src/services`**: Contém a lógica de negócio da aplicação.
- **`src/index.ts`**: Ponto de entrada da aplicação, onde o servidor Express é configurado.
- **`src/services/routes.ts`**: Define as rotas da API.

## Testes

O projeto possui uma suíte de testes unitários para garantir a qualidade e o funcionamento correto do código. Os testes foram escritos com o framework Jest.

Para rodar os testes, execute o seguinte comando:

```bash
npm test
```

## Como Executar

1.  Instale as dependências:
    ```bash
    npm install
    ```
2.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

    O servidor estará disponível em `http://localhost:3000`.
