# Magic 8 Ball 🔮

A modern, web-based Magic 8-ball and advice-generating application built with **Vue 3** and **Nuxt 3**. It fetches insights, wisdom, and answers from the [Advice Slip API](https://api.adviceslip.com/).

This project was built by **Carina B.S.**

---

## 🚀 Features

*   **Random Advice Generator:** Ask a question, click to shake the Magic 8-ball, and retrieve a random advice slip.
*   **Search for Specific Advice:** Search for advice topics using reactive search-as-you-type.
*   **Favourites List:** Keep track of your favourite advice slips. Favourites are persisted to `localStorage` so they remain saved when you return.
*   **Web Share & Clipboard Integration:** Easily share advice slips using the native Web Share API (on mobile/supported browsers) or copy the text to your clipboard.
*   **Custom Styling & Typography:** Custom Bootstrap 5 theme featuring the *Akaya Kanadaka* and *Delius* fonts.

---

## 🛠️ Built With

*   [Vue 3](https://vuejs.org/) & [Nuxt 3](https://nuxt.com/) (Frontend Framework)
*   [Pinia](https://pinia.vuejs.org/) (State Management for favourites)
*   [Bootstrap 5](https://getbootstrap.com/) (SCSS Customized Styling & Grid)
*   [Bootstrap Icons](https://icons.getbootstrap.com/) (Icon sets)
*   [Vitest](https://vitest.dev/) (Unit and component testing)

---

## 📦 Setup & Installation

### 1. Install Dependencies

Install the project dependencies using your package manager of choice:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 2. Development Server

Start the local development server at `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### 3. Run Tests

To execute the component and store unit tests with Vitest:

```bash
# Run tests once
npm run test

# Run tests in UI mode
npm run test:ui
```

### 4. Build for Production

Build the application for static hosting or serverless deployment:

```bash
# npm
npm run build

# Preview build locally
npm run preview
```

---

## 🗺️ Roadmap & Next Steps

*   Optimize production builds and performance.
*   Add internationalization (i18n) support.
*   Increase unit and integration test coverage.
*   Enhance the advice sharing experience with custom social share cards.
