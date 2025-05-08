
# 📝 Notes Taker App

A simple, mobile-first **Note Taking App** built using **Expo (React Native)** with **JWT authentication** and full **CRUD functionality** for managing notes.

## ✨ Features

- 🔐 **User Authentication** (JWT based)
- 📄 **Create, Read, Update, Delete Notes**
- 💾 Secure Token Storage using AsyncStorage
- 🔁 Auto Token Refresh with Axios Interceptors
- 🧭 Navigation with [Expo Router](https://expo.github.io/router/)
- 📱 Clean and Responsive UI

## 📱 Screens

- `index` – Welcome screen with login/register
- `auth/login` – Login screen
- `auth/signup` – Register screen
- `others/editNote` – Edit an existing note
- `others/noteViewer` – Read full note
- `tabs/` – Bottom tab navigation
- `+not-found` – 404 fallback screen

## 🧠 Tech Stack

- **React Native** + **Expo**
- **Expo Router** for navigation
- **JWT** for authentication
- **Axios** for API requests
- **AsyncStorage** for token handling
- **Context API** for state management

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SudeepBhandari02/notes-taking-mobile-app/notes-taker-app
cd notes-taker-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up `.env`

Create a `.env` file in the root with:

```env
API_URL=https://your-api-url.com
```

### 4. Run the app

```bash
npx expo start
```

## 🔐 Authentication Flow

- On login/signup, access & refresh tokens are stored.
- Axios interceptors handle automatic token refresh.
- If refresh fails, user is logged out and redirected.

## 📂 Folder Structure

```
app/
├── (auth)          # Auth screens (login/signup)
├── (others)        # Note editor & viewer
├── (tabs)          # Tab-based navigation
├── +not-found.jsx  # Fallback screen
├── index.jsx       # Welcome screen
api/
├── axiosInstance.js
context/
├── AuthContext.js
├── NotesContext.js
utils/
├── storage.js      # Async token storage logic
assets/             # Fonts & images
```


### 🖼️ GIF Preview

```md
![App Demo](../readmeAssets/demo-1.gif)
```
