🛒 Mini-Shop (MERN Stack)

This is a MERN Stack E-commerce Project featuring a React frontend, Express.js backend, and MongoDB database. It includes authentication, product management, cart functionality, and order history.

📌 Features

Frontend (React)

✅ Home Page – Displays a list of products
✅ Product Page – Shows details of a selected product
✅ Cart Page – Users can add/remove items in their cart
✅ Checkout Page – Simple order confirmation (without payments)
✅ Login/Register Page – Users can sign up and log in
✅ Navbar – Shows login/logout buttons and user status

Backend (Express + MongoDB)

✅ User Authentication – Login/Register with JWT (JSON Web Token)
✅ Product Management – Store product details (name, price, image, description)
✅ Cart Functionality – Allow adding/removing items (stored per user)
✅ Order Management – Store user orders (history of purchases)

Other Features

✅ Protected Routes – Users must be logged in to checkout
✅ Session Persistence – Keep users logged in using JWT stored in localStorage
✅ Basic UI Styling – Using regular CSS or Bootstrap

📊 Project Architecture

graph TD;
  %% === FRONTEND (React) === %%
  A[Frontend (React)] -->|1️⃣ Home Page| B[List of Products 🛍️]
  B -- Displays all available products --> B1[Fetch products from backend]

  A -->|2️⃣ Product Page| C[Product Details 🏷️]
  C -- Shows product info (name, price, image, etc.) --> C1[Fetch single product from backend]

  A -->|3️⃣ Cart Page| D[Shopping Cart 🛒]
  D -- Users can add/remove items --> D1[Cart state stored in localStorage]

  A -->|4️⃣ Checkout Page| E[Order Confirmation 📦]
  E -- Displays summary of selected items --> E1[Verifies cart before placing order]

  A -->|5️⃣ Login/Register Page| F[User Authentication 🔐]
  F -- Allows users to create an account or log in --> F1[JWT authentication]

  A -->|6️⃣ Navbar| G[Navigation Bar 🏠]
  G -- Shows login/logout buttons & user status --> G1[Updates based on auth state]

  %% === BACKEND (Express + MongoDB) === %%
  H[Backend (Express + MongoDB)] -->|1️⃣ User Authentication| I[JWT Login/Register 🔑]
  I -- Users log in & get JWT token --> I1[Tokens stored in localStorage/session]

  H -->|2️⃣ Product Management| J[Store & Retrieve Product Details 📦]
  J -- Manages product info (name, price, image, etc.) --> J1[Stored in MongoDB]

  H -->|3️⃣ Cart Functionality| K[Manage User Carts 🛒]
  K -- Users can add/remove items --> K1[Cart stored in database per user]

  H -->|4️⃣ Order Management| L[User Orders 📝]
  L -- Saves order history --> L1[Orders stored in MongoDB & linked to users]

  %% === OTHER FEATURES === %%
  M[Other Features] -->|1️⃣ Protected Routes| N[Restrict Access 🔒]
  N -- Users must be logged in to checkout --> N1[JWT Middleware protects routes]

  M -->|2️⃣ Session Persistence| O[Keep Users Logged In 🔄]
  O -- Users remain logged in across sessions --> O1[JWT stored in localStorage]

  M -->|3️⃣ Basic UI Styling| P[Styling with CSS/Bootstrap 🎨]
  P -- Ensures clean and responsive design --> P1[Bootstrap or custom CSS used]

🚀 Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/mini-shop.git
cd mini-shop

2. Install dependencies

Frontend

cd frontend
npm install

Backend

cd backend
npm install

3. Configure Environment Variables

Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the application

Start Backend

cd backend
npm start

Start Frontend

cd frontend
npm start

🔑 Authentication Flow

sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database

    User->>Frontend: Enter login details
    Frontend->>Backend: Send credentials via API
    Backend->>Database: Verify user in MongoDB
    Database->>Backend: Return user info & JWT
    Backend->>Frontend: Send JWT token
    Frontend->>User: Store JWT and log in

🛠️ Tech Stack

Frontend: React, React Router, Axios, Bootstrap

Backend: Node.js, Express.js, MongoDB, JWT Authentication

Database: MongoDB (Mongoose ODM)

Other Tools: Git, Postman, Dotenv

📜 License

This project is open-source and available under the MIT License.

📞 Contact

For questions or contributions, contact [Your Name] at [your-email@example.com].

Happy Coding! 🚀


