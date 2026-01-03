# 📝 TODO API - GoFiber + MongoDB

API RESTful construída em **Go** usando o framework [Fiber](https://gofiber.io/) e banco de dados **MongoDB Atlas**.  
Este projeto faz parte de um sistema **fullstack** integrado com um frontend React hospedado no Vercel.

---

## 🚀 Tecnologias
- [Go](https://golang.org/)  
- [Fiber](https://gofiber.io/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
- [Render](https://render.com/) (deploy da API)  

---

## ⚙️ Configuração local

### 1. Clonar o repositório
```bash
git clone https://github.com/withvisionstack/TODO_REACT-EXTERNAL_GOFIBER-API.git
cd TODO_REACT-EXTERNAL_GOFIBER-API

2. Criar arquivo 
Na raiz do projeto, crie um arquivo  com:  MONGODB_URI=sua_string_de_conexao_do_mongodb_atlas
PORT=4000

Aqui está um README.md inicial para sua API GoFiber + MongoDB. Ele documenta como rodar localmente, como está configurado em produção e como consumir as rotas:

2. Criar arquivo 
Na raiz do projeto, crie um arquivo  com:

3. Rodar com Air (hot reload)
No terminal digite air

Ou compilar e rodar manualmente:

go build -o app .
./app

A API estará disponível em:

http://localhost:4000/api

🌐 Deploy em produção
A API está publicada no Render em:

https://gofiber-0oy4.onrender.com/api

📌 Rotas disponíveis
GET 
Retorna todos os todos cadastrados.

[
  {
    "id": "63f1a2...",
    "completed": false,
    "body": "Estudar GoFiber"
  }
]

POST 
Cria um novo todo.

{
  "body": "Novo todo"
}

PATCH 
Marca um todo como concluído.

{
  "success": true
}

DELETE 
Remove um todo.

{
  "success": true
}

📂 Estrutura do projeto

.
├── main.go        # Código principal da API
├── go.mod         # Dependências Go
├── go.sum
└── .env           # Variáveis de ambiente (não versionado)

✨ Autor
Projeto desenvolvido por withvisionstack como primeiro projeto fullstack funcional 🎉

