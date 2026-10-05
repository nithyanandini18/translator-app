# TranslateAI

## Description

**TranslateAI** is a modern, high-performance web translation application built with **React.js** and styled with **Tailwind CSS**. It enables users to seamlessly translate text between English and a wide variety of global and regional languages (including Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Spanish, French, German, Japanese, Chinese, Arabic, and more) using live translation endpoints powered by **RapidAPI**.

The application is structured following enterprise best practices: functional components, modular directory architecture, custom hooks for state management, strict separation of UI and API layers, and comprehensive error handling.

---

## Features

- **English & Multi-language Translation**: Translate between English and 20+ supported world and Indian regional languages.
- **RapidAPI Integration**: Securely connected to RapidAPI translation endpoints without hardcoded credentials.
- **Language Swapping**: Effortlessly swap source and target languages alongside the corresponding input and translated texts.
- **One-Click Clipboard Copy**: Built-in copy-to-clipboard functionality with dynamic visual feedback ("Copied!").
- **Character Counter & Limit**: Real-time counter monitoring length up to 5,000 characters.
- **Instant Clear & Reset**: Quick reset button to clear input text, translation output, and errors.
- **Keyboard Shortcuts**: Quickly trigger translation using <kbd>Ctrl</kbd> + <kbd>Enter</kbd> (or <kbd>Cmd</kbd> + <kbd>Enter</kbd>).
- **Graceful States**: Polished loading spinners, empty-state placeholders, and clear error banners for network, authentication, and rate-limit issues.
- **Responsive SaaS UI**: Two-column desktop layout that stacks cleanly on tablets and mobile devices with accessible typography and focus states.

---

## Tech Stack

- **Frontend Framework**: [React.js](https://react.dev/) (Functional Components & Hooks)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **API Provider**: [RapidAPI](https://rapidapi.com/) (`text-translator2.p.rapidapi.com`)
- **Language**: JavaScript (ES6+ Modules)

---

## Project Structure

```text
translator-app/
│
├── public/
│   └── favicon.svg              # Application browser favicon
│
├── src/
│   ├── assets/
│   │   └── logo.svg             # Application vector logo
│   │
│   ├── components/              # Modular, reusable presentation components
│   │   ├── Header.jsx           # Application branding & RapidAPI connection status
│   │   ├── LanguageSelector.jsx # Reusable language selection dropdown
│   │   ├── TextInput.jsx        # Source text input with character counter & shortcuts
│   │   ├── TranslationOutput.jsx# Result output display, empty, and loading states
│   │   ├── TranslateButton.jsx  # Primary action button with loading spinner
│   │   ├── SwapLanguages.jsx    # Language & text flip button
│   │   ├── CopyButton.jsx       # Clipboard copy button with visual confirmation
│   │   └── LoadingSpinner.jsx   # Pure Tailwind CSS loading indicator
│   │
│   ├── pages/
│   │   └── Translator.jsx       # Main orchestrator page composing the translator UI
│   │
│   ├── services/
│   │   └── translationApi.js    # RapidAPI HTTP request logic & error handling
│   │
│   ├── constants/
│   │   └── languages.js         # Supported languages list and ISO 639-1 codes
│   │
│   ├── hooks/
│   │   └── useTranslator.js     # Custom React hook encapsulating state & actions
│   │
│   ├── App.jsx                  # Root component layout wrapper
│   ├── main.jsx                 # React DOM mount entrypoint
│   └── index.css                # Global stylesheet & Tailwind directives
│
├── .env                         # Local environment variables (git-ignored)
├── .env.example                 # Example template for environment configuration
├── .gitignore                   # Ignored files (node_modules, .env, dist)
├── package.json                 # Project dependencies and npm scripts
├── tailwind.config.js           # Tailwind CSS theme extensions & configuration
├── postcss.config.js            # PostCSS plugin pipeline for Tailwind
└── README.md                    # Project documentation
```

### Purpose of Folders:
- **`components/`**: Isolated, reusable UI building blocks each having a single responsibility.
- **`pages/`**: High-level page views (e.g. `Translator.jsx`) that assemble components and wire them to hooks.
- **`services/`**: Encapsulates external network calls (`translationApi.js`). Contains zero UI logic.
- **`hooks/`**: Custom hooks (`useTranslator.js`) separating stateful business logic from UI rendering.
- **`constants/`**: Fixed application configuration, such as language dictionaries and defaults.
- **`assets/`**: Static media assets including vector logos and icons.

---

## Installation

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed on your machine.

1. Navigate to the project directory:
   ```bash
   cd translator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Environment Setup

1. In the `translator-app/` directory, copy `.env.example` to create your `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Populate `.env` with your RapidAPI credentials:
   ```env
   VITE_RAPIDAPI_KEY=your_actual_rapidapi_key
   VITE_RAPIDAPI_HOST=text-translator2.p.rapidapi.com
   ```

> [!IMPORTANT]
> The `.env` file contains private credentials and is listed in `.gitignore`. **Never commit your `.env` file or expose your API key in public repositories.**

---

## RapidAPI Setup Guide

Follow these steps to obtain your free RapidAPI key:

1. **Sign Up / Log In**: Visit [RapidAPI Hub](https://rapidapi.com/) and create a free account or log in.
2. **Search for Translation API**: Search for **"Text Translator"** (`text-translator2.p.rapidapi.com`) or **"Deep Translate"** on RapidAPI.
3. **Subscribe**: Go to the **Pricing** tab and subscribe to the free basic tier.
4. **Copy Credentials**: In the **Endpoints** tab, look at the **Code Snippets** header section:
   - Copy `x-rapidapi-key`
   - Copy `x-rapidapi-host` (default: `text-translator2.p.rapidapi.com`)
5. **Configure `.env`**: Paste your API key into `VITE_RAPIDAPI_KEY` in `.env`.
6. **Restart Dev Server**: Restart `npm run dev` to load the new environment variables into Vite.

---

## Error Handling

TranslateAI provides user-friendly error messages covering various network and API edge cases:

| Scenario | Handled Message |
| :--- | :--- |
| **Empty Input** | "Please enter some text to translate." |
| **Character Limit Exceeded** | "Input exceeds the maximum limit of 5,000 characters." |
| **Invalid / Missing API Key (401/403)** | "Authentication failed. Please verify that your VITE_RAPIDAPI_KEY is valid..." |
| **Rate Limit Reached (429)** | "Rate limit exceeded. Too many requests. Please wait a moment..." |
| **Server Outage (500/502/503)** | "The translation service server is temporarily unavailable. Please try again later." |
| **Network Disconnection** | "Network error. Please check your internet connection and try again." |

---

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## License

This project was built for educational and internship portfolio demonstration purposes. Open source under the [MIT License](LICENSE).
