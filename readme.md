# 🔍 Github Profile Finder

Uma aplicação simples e intuitiva feita com **React + Vite**, que permite buscar perfis públicos do GitHub a partir do nome de usuário.

![preview](src/assets/preview.png) <!-- você pode trocar por uma imagem real do app -->

---

## ✨ Funcionalidades

- 🔎 Busca de perfis por **username**
- 📄 Exibição de informações do perfil:
    - Foto de perfil
    - Nome ou login
    - Biografia
- ⏳ Feedback visual com **loading spinner**
- ❌ Mensagem de erro caso o perfil não exista
- ⌨️ Busca ativada por botão ou **Enter**
- 🧼 Campo de busca limpa após pesquisa

---

## 🛠️ Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [GitHub REST API](https://docs.github.com/en/rest)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/github-profile-finder.git
cd github-profile-finder
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Rode o projeto localmente
bash
Copiar
Editar
npm run dev
A aplicação estará disponível em: http://localhost:5173

📁 Estrutura de pastas
css
Copiar
Editar
src/
├── components/
│   ├── GithubFinder.jsx
│   ├── Input/
│   │   └── Input.jsx
│   ├── Card/
│   │   └── Card.jsx
│
├── assets/
│   └── Logo.png
│
├── App.jsx
└── main.jsx
🧪 Melhorias futuras
Exibir lista de repositórios públicos do usuário

Histórico de buscas recentes

Modo escuro (dark mode)

Responsividade aprimorada

Pesquisa por nome real (com API de busca do GitHub)

📸 Screenshot
<img src="src/assets/screenshot.png" alt="Screenshot do app" width="600"/>
🧑‍💻 Autor
Desenvolvido por Seu Nome 🚀
Sinta-se à vontade para contribuir, dar feedback ou usar como base para seus projetos!

