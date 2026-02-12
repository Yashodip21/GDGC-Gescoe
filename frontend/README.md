# GDGC GESCOE – Frontend

Welcome to the frontend codebase for the official GDGC GESCOE chapter website! This project is built with a modern React stack, emphasizing performance, scalability, and a clean UI architecture.

---

## 🚀 Tech Stack

This project utilizes the following technologies:

- **React**: A powerful UI library for building user interfaces.
- **Vite**: A fast build tool and development server that enhances productivity.
- **Tailwind CSS v4**: A utility-first CSS framework for rapid UI development.

---

## 📁 Project Structure

The project structure is organized as follows:

```
frontend/
│
├── public/          # Static assets
├── src/
│   ├── assets/     # Images, logos, icons
│   ├── components/  # Reusable UI components
│   ├── pages/      # Page-level components
│   ├── App.jsx     # Root component
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles + theme variables
│
├── index.html      # Main HTML file
├── package.json     # Project dependencies and scripts
├── vite.config.js   # Vite configuration file
└── eslint.config.js  # ESLint configuration file
```

---

## 🎨 Design System

### Primary Colors

- **Blue**: `#4285F4`
- **Green**: `#34A853`
- **Yellow**: `#F9AB00`
- **Red**: `#EA4335`

### Neutral Colors

- **Off White**: `#F0F0F0`
- **Dark**: `#1E1E1E`

These colors are defined as CSS variables in `index.css` for easy access and consistency throughout the application.

---

## 🔤 Typography

The primary font family used in this project is **Albert Sans**. The available weights are:

- Thin (100)
- ExtraLight (200)
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- ExtraBold (800)
- Black (900)

All italic variants are supported. Tailwind CSS classes such as `font-bold`, `font-light`, and `italic` are utilized to control typography styles effectively.

---

## 🛠️ Installation

To set up the project, navigate to the `frontend` directory and run the following command:

```bash
npm install
```

### 💻 Development

To start the development server, use:

```bash
npm run dev
```

The application will be accessible at:

[http://localhost:5173](http://localhost:5173)
