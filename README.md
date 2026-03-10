# 🏫 Sistema de Matrículas Online

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

---

## 📌 Descrição
Sistema web para cadastro de alunos em cursos online, com painel administrativo para gerenciar **matrículas** e **cursos**.  
- **Frontend:** Vue.js 3 + Vite  
- **Backend:** Node.js + Express + TypeScript  
- **Banco de dados:** PostgreSQL  

---

## 🏗 Estrutura do Projeto


matriculas-online/
├─ frontend/ # Aplicação Vue.js
│ ├─ src/
│ │ ├─ views/ # Telas: Home, Formulário, Admin
│ │ ├─ components/ # Componentes reutilizáveis
│ │ └─ main.ts
├─ backend/ # API Node + Express + TypeScript
│ ├─ src/
│ │ ├─ controllers/ # Lógica das rotas
│ │ ├─ routes/ # Rotas definidas
│ │ ├─ db.ts # Conexão PostgreSQL
│ │ └─ server.ts
└─ README.md


---

## 🚀 Como Rodar

### 1️⃣ Clonar o projeto
```bash
git clone <URL_DO_REPOSITORIO>
cd matriculas-online
2️⃣ Backend
cd backend
npm install
cp .env.example .env   # configure suas variáveis: DB_HOST, DB_USER, DB_PASS, DB_NAME
npm run dev             # servidor em http://localhost:3000
3️⃣ Frontend
cd ../frontend
npm install
npm run dev             # frontend em http://localhost:5173

⚠️ Certifique-se de que o backend esteja rodando antes do frontend.

📝 Funcionalidades
Frontend

Formulário de matrícula com validação instantânea

Listagem dinâmica de cursos via API

Feedback visual (mensagens de sucesso ou erro)

Painel admin para matrículas e cursos

Backend

Rotas REST:

GET /cursos → lista cursos

POST /matricula → cadastra aluno

GET /matriculas → lista matrículas

Tipagem com TypeScript

Respostas HTTP corretas (201, 400, etc)

Painel Administrativo

Matrículas: Nome, Email, Telefone, Curso, Data (DD/MM/AAAA)

Cursos: Nome, Descrição, Próxima Turma

Layout organizado e responsivo

🛠 Banco de Dados (PostgreSQL)
CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT
);

CREATE TABLE matriculas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  curso_id INTEGER REFERENCES cursos(id),
  created_at TIMESTAMP DEFAULT NOW()
);
💡 Observações

Cada pasta (frontend, backend) possui seu próprio .gitignore (ignora node_modules, .env, dist)

Datas exibidas no painel admin: DD/MM/AAAA

Projeto pronto para testes locais; para produção configure variáveis de ambiente e segurança adicional.

🌐 Endpoints da API
Método	Rota	Descrição
GET	/cursos	Lista todos os cursos
POST	/matricula	Cria nova matrícula
GET	/matriculas	Lista todas matrículas




