# 📦 React Keycloak-js Slim Starter

A minimal, production-ready starter template for integrating **Keycloak** with a **React + Vite** frontend using the official [`keycloak-js`](https://www.npmjs.com/package/keycloak-js) library.

This slim setup provides a lightweight and clean structure for authentication, token parsing, and session management — without any extra UI frameworks or bloat.

---

### 🚀 Features

* 🔐 Keycloak integration with `keycloak-js`
* ✅ Clean initialization with singleton pattern to avoid re-init errors
* 🪪 Parses `preferred_username` and other token claims
* 🌐 Supports `check-sso` and `silentCheckSsoRedirectUri`
* ⚛️ React Context for global auth state
* ⚡ Built with Vite for fast development

---

### 🛠️ Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up Keycloak env vars** in `.env`:

   ```
   VITE_KEYCLOAK_URL=http://localhost:8080
   VITE_KEYCLOAK_REALM=your-realm
   VITE_KEYCLOAK_CLIENT_ID=your-client-id
   ```

3. **Run the dev server**:

   ```bash
   npm run dev
   ```

4. **Visit your app**:

   ```
   http://localhost:5173
   ```

---

### 📁 Folder Structure

```bash
.
├── src/
│   ├── App.tsx               # Example app using auth context
│   ├── main.tsx              # App entry point
│   ├── keycloak.ts           # Singleton Keycloak instance + init
│   ├── KeycloakProvider.tsx  # React context + initialization logic
│   └── ...
```

---

### 🧠 Token Access

You can access any JWT fields (like `preferred_username`, `email`, etc.) via:

```ts
keycloak.tokenParsed?.preferred_username
```

---

### 🧪 Ideal For

* Lightweight SPAs using Keycloak
* Authenticated dashboards or admin portals
* Devs who want full control without relying on heavy wrappers

---

Certainly! Here's a more complete and professional version you can add to your `README.md` to clarify that it was AI-assisted, while also maintaining credibility and usefulness:

---

### About This README

> ⚠️ This `README.md` was generated with the help of AI (ChatGPT by OpenAI) to provide a clear, concise, and developer-friendly overview of the project.
>
> All technical details, descriptions, and instructions were reviewed and refined by the project maintainer to ensure accuracy and relevance.
>
> If you spot anything outdated or want to improve the documentation, feel free to submit a pull request!

