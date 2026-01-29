# Portfolio React

A modern React front-end built with JavaScript(JSX) on VITE. This project showcases a responsive Portfolio using hooks, contexts, components HTML/CSS and JavaScript.
  
**Website :**: [https://daemoniax.github.io/Portfolio-React/](https://daemoniax.github.io/Portfolio-React/)  

## Table of Contents

* [🔧 Installation](#-installation)
* [💡 Usage](#-usage)
* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [🤝 Contributing](#-contributing)
* [✉️ Contact](#️-contact)
* [📄 License](#-license)

---

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DaemoniaX/Portfolio-React.git
   cd Portfolio-React/frontend
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Serve locally**

   ```bash
   npm run dev
   ```

> The application will run at `http://localhost:5011` by default.

### Environment Variables

Configure API endpoints in `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://api.yourdomain.com'
};
```

---

## 💡 Usage

* Navigate the product catalog
* View product details
* Add/remove items in the shopping cart
* Proceed through the checkout flow

Additional commands:

* **Run unit tests**: `npm run test`
* **Build for production**: `npm run build`

---

## ✨ Features

* Favorite system

* Dynamic research

* Carrousel

* Multi-frameworks integration: Hosting of Angular et Vanilla JS inside of the app.

---

## 🛠️ Tech Stack

* **React** (v18) : Lib
* **Vite** : Bundler
* **Swiper.js** : Carrousel
* **React Router** : Router
* **Context API** : Favorite storage
* **CSS3** : Design responsive

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Please feel free to:

* Fork the repository
* Create an issue for bugs or enhancements
* Submit a pull request

---

## ✉️ Contact

**Name**: Antonin Marolleau  
**School**: ESIEE Paris – Integrated Engineering Program second year  
**Email**: [antonin.marolleau@edu.esiee.fr](mailto:antonin.marolleau@edu.esiee.fr)  
**LinkedIn**: [https://www.linkedin.com/in/antonin-marolleau-7b5497339](https://www.linkedin.com/in/antonin-marolleau-7b5497339)  

---

## 📄 License

This project is licensed under the CC0 License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
