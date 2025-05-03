
# Note Taker Backend

This is the backend for the **Note Taker** application. It provides an API for user authentication and note management. The backend uses **Express**, **MongoDB** (via **Mongoose**), **JWT** for token-based authentication, and **bcrypt** to hash user passwords securely.

---

## 🚀 **Installation**

### Prerequisites
- **Node.js** (v12+ recommended)
- **MongoDB** (local or cloud instance, e.g., MongoDB Atlas)

### Steps
1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd note-taker-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   JWT_SECRET=your_jwt_secret_key
   ACCESS_TOKEN_EXPIRY=15m
   REFRESH_TOKEN_EXPIRY=7d
   MONGO_URI=mongodb://localhost:27017/note-taker
   ```

   - **`JWT_SECRET`**: Secret key for JWT signing.
   - **`ACCESS_TOKEN_EXPIRY`**: Expiry time for access tokens.
   - **`REFRESH_TOKEN_EXPIRY`**: Expiry time for refresh tokens.
   - **`MONGO_URI`**: MongoDB URI for your database.

4. Start the backend server:
   ```bash
   npm start
   ```

The backend will now be running on [http://localhost:3000](http://localhost:3000).

---

## 📝 **API Endpoints**

### **Authentication Routes** (`/api/auth`)
- **POST `/signup`**
  - Description: Register a user and returns an access token and refresh token.
  - Request Body:
    ```json
    {
      "username": "john",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "accessToken": "your_access_token",
      "refreshToken": "your_refresh_token"
    }
    ```

- **POST `/login`**
  - Description: Logs in a user and returns an access token and refresh token.
  - Request Body:
    ```json
    {
      "username": "john",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "accessToken": "your_access_token",
      "refreshToken": "your_refresh_token"
    }
    ```

- **POST `/refresh-token`**
  - Description: Refreshes the access token using the refresh token.
  - Request Body:
    ```json
    {
      "token": "your_refresh_token"
    }
    ```
  - Response:
    ```json
    {
      "accessToken": "new_access_token"
    }
    ```

### **Note Routes** (`/api/notes`)
- **GET `/`** (Protected)
  - Description: Fetches all notes of the authenticated user.
  - Response:
    ```json
    {
      "notes": [
        {
          "id": 1,
          "content": "Buy milk"
        },
        {
          "id": 2,
          "content": "Finish project"
        }
      ]
    }
    ```
- **GET `/id`** (Protected)
  - Description: Fetche the note with specific note-id of the authenticated user.
  - Response:
    ```json
    {
      "notes": [
        {
          "id": 1,
          "content": "Buy milk"
        },
        {
          "id": 2,
          "content": "Finish project"
        }
      ]
    }
    ```

- **PUT `/id`** (Protected)
  - Description: update a note with specific id of the authenticated user.
  - Response:
    ```json
    {
      "notes": [
        {
          "id": 1,
          "content": "buy paneer, milk"
        }
      ]
    }
    ```


- **POST `/`** (Protected)
  - Description: Adds a new note for the authenticated user.
  - Request Body:
    ```json
    {
      "content": "Buy groceries"
    }
    ```
  - Response:
    ```json
    {
      "id": 3,
      "content": "Buy groceries"
    }
    ```

- **DELETE `/:id`** (Protected)
  - Description: Deletes a note by its ID for the authenticated user.
  - Response: `204 No Content` (If successful).

---

## 🔒 **Authentication**

The backend uses **JWT** for user authentication:

1. **Access Token**: Short-lived (e.g., 15 minutes) for security.
2. **Refresh Token**: Long-lived (e.g., 7 days) to obtain new access tokens without re-login.

---

## 🛠️ **Tech Stack**

- **Express**: Web framework for Node.js.
- **MongoDB + Mongoose**: For storing users and notes.
- **JWT**: For authentication using JSON Web Tokens.
- **bcrypt**: For securely hashing and comparing passwords.
- **dotenv**: For managing environment variables.

---

## ⚙️ **Database Models**

### **User Model** (`models/userModel.js`)

- **username** (String): The user’s unique username.
- **password** (String): The hashed password.

### **Note Model** (`models/notesModel.js`)

- **userId** (ObjectId): Reference to the user who owns the note.
- **title** (String): Title of the note created.
- **content** (String): The note's content.
- **tags** (String Array): Contains tags for that note.
- **pinned** (Boolean): Tells wheteher the note should be pinned or not.

---

## 📦 **Project Dependencies**
- `express`: Web framework for building the API.
- `jsonwebtoken`: For creating and verifying JWT tokens.
- `mongoose`: MongoDB object modeling.
- `bcryptjs`: For hashing and comparing passwords.
- `dotenv`: For loading environment variables.
- `body-parser`: Middleware for parsing incoming request bodies.

---

## 🛠️ **Development**

### To run tests:
You can integrate **Jest** or **Mocha** for testing API routes.

### To deploy:
You can deploy the backend using **Heroku** or **DigitalOcean** and connect it to **MongoDB Atlas**.

---
