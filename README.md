🛒 Mini-Shop (MERN Stack)

This is a MERN Stack E-commerce Project featuring a React frontend, Express.js backend, and MongoDB database. It includes authentication, product management, cart functionality, and order history.

📌 Features

Frontend (React)

✅ Home Page – Displays a list of products✅ Product Page – Shows details of a selected product✅ Cart Page – Users can add/remove items in their cart✅ Checkout Page – Simple order confirmation (without payments)✅ Login/Register Page – Users can sign up and log in✅ Navbar – Shows login/logout buttons and user status

Backend (Express + MongoDB)

✅ User Authentication – Login/Register with JWT (JSON Web Token)✅ Product Management – Store product details (name, price, image, description)✅ Cart Functionality – Allow adding/removing items (stored per user)✅ Order Management – Store user orders (history of purchases)

Other Features

✅ Protected Routes – Users must be logged in to checkout✅ Session Persistence – Keep users logged in using JWT stored in localStorage✅ Basic UI Styling – Using regular CSS or Bootstrap

📊 Project Architecture

graph TD;
  %% === FRONTEND (React) === %%
  A[Frontend (React)] -->|Home Page| B[List of Products 🛍️]
  A -->|Product Page| C[Product Details 🏷️]
  A -->|Cart Page| D[Shopping Cart 🛒]
  A -->|Checkout Page| E[Order Confirmation 📦]
  A -->|Login/Register Page| F[User Authentication 🔐]
  A -->|Navbar| G[Navigation Bar 🏠]

  %% === BACKEND (Express + MongoDB) === %%
  H[Backend (Express + MongoDB)] -->|User Authentication| I[JWT Login/Register 🔑]
  H -->|Product Management| J[Store Product Details 📦]
  H -->|Cart Functionality| K[Manage User Carts 🛒]
  H -->|Order Management| L[User Orders 📝]

  %% === OTHER FEATURES === %%
  M[Other Features] -->|Protected Routes| N[Restrict Access 🔒]
  M -->|Session Persistence| O[Keep Users Logged In 🔄]
  M -->|Basic UI Styling| P[CSS/Bootstrap 🎨]

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

📜 How to Ensure GitHub Renders Mermaid Diagrams

Option 1: Use GitHub's Native Mermaid Support (Recommended)

Simply push this README.md file to your GitHub repo, and it will render the Mermaid diagrams automatically. GitHub now supports Mermaid natively! 🚀

Option 2: Convert Mermaid to an Image (If Not Rendering Properly)

1️⃣ Go to Mermaid Live Editor.2️⃣ Paste the Mermaid diagram code.3️⃣ Click Download as PNG.4️⃣ Add the image to your GitHub repo (e.g., docs/diagram.png).5️⃣ Reference it in README.md:

![Project Architecture](docs/diagram.png)

This ensures universal compatibility if Mermaid is not rendering correctly.

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
