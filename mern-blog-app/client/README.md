MERN Blog App
A full-stack blog application built with MongoDB, Express.js, React, and Node.js.

Features
Blog CRUD Operations - Create, read, update, delete posts

Categories - Organize posts by category

User Authentication - Register and login system

Responsive Design - Works on all devices

RESTful API - Clean backend architecture

 Tech Stack
Frontend: React, Vite, React Router, Axios, Context API
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT
Tools: Git, GitHub, Postman

 Installation
Clone the repository

bash
git clone <your-repo-url>
cd mern-blog-app
Setup Backend

bash
cd server
npm install
cp .env.example .env
# Add your MongoDB URI to .env
Setup Frontend

bash
cd ../client
npm install
 Running the App
Start Backend (Terminal 1):

bash
cd server
npm run dev
# Server runs on http://localhost:5000
Start Frontend (Terminal 2):

bash
cd client
npm run dev
# Client runs on http://localhost:5173
 Project Structure
text
mern-blog-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # State management
│   │   ├── pages/          # Page components
│   │   └── App.jsx         # Main app component
├── server/                 # Express backend
│   ├── controllers/        # Route logic
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Server entry point
└── README.md
 API Endpoints
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create new post
GET	/api/posts/:id	Get single post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post
GET	/api/categories	Get all categories
 Pages & Routes
/ - Home page

/posts - All blog posts

/posts/:id - Single post view

/create-post - Create new post

/categories - Category management

 Environment Variables
Server (.env):

env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Client (.env):

env
VITE_API_BASE_URL=http://localhost:5000/api
📝 TODO / Progress
Project setup & routing

Basic components structure

Backend API integration

CRUD operations

User authentication

Styling & responsive desig