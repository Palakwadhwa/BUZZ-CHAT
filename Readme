# 💬 Chat Application 

A **Full Stack Real-Time Chat Application** where:

- 👤 Users can register and log in securely  
- 💬 Users can send and receive messages instantly  
- 🟢 Users can see online/offline users  
- 🖼️ Users can upload profile pictures  

The system is built using a **modern MERN Stack architecture** with **Socket.IO** for real-time communication.

---

# 📁 Project Architecture

The project is divided into two main parts:

Chat-App

frontend   # React + Vite UI  
backend    # Node.js + Express API  

---

# 🚀 Tech Stack

## Frontend

-------------------------------------
| Technology        | Purpose                |
|------------------|------------------------|
| React            | UI Library             |
| Vite             | Fast build tool        |
| React Router     | Routing                |
| Axios            | API requests           |
| TailwindCSS      | Styling                |
| DaisyUI          | UI components          |
| Socket.IO Client | Real-time communication|

---

## Backend

----------------------------------
| Technology   | Purpose              |
|-------------|----------------------|
| Node.js     | Runtime environment  |
| Express.js  | Web framework        |
| MongoDB     | Database             |
| Mongoose    | ODM for MongoDB      |
| JWT         | Authentication       |
| bcryptjs    | Password hashing     |
| Cloudinary  | Image storage        |
| Socket.IO   | Real-time messaging  |
| CookieParser| Cookie handling      |
| CORS        | Cross-origin         |
| dotenv      | Environment variables|

---

# 🔄 Project Flow

User → Frontend (React) 
→ API / Socket Request 
→ Backend (Express + Socket.IO) 
→ Controllers 
→ Models (Mongoose) 
→ MongoDB 
→ Response / Real-time Event 
→ UI Update 

---

# 🔐 Authentication Flow

User Register 
↓ 
Password Hash (bcryptjs) 
↓ 
JWT Token Generated 
↓ 
Token stored in Cookies 
↓ 
User Authenticated 

---

# 💬 Chat Flow

User A sends message 
↓ 
Socket.IO emits event 
↓ 
Server receives message 
↓ 
Message stored in DB 
↓ 
Server emits to Receiver 
↓ 
User B receives instantly 

---

# 📂 Backend Folder Structure

backend 
│ 
├── src 
│   ├── controllers 
│   ├── middleware 
│   ├── models 
│   ├── routes 
│   ├── lib 
│   └── server.js
│ 
└── package.json

---

# 📂 Frontend Folder Structure

frontend 
│ 
├── src 
│   ├── components
│   ├── pages
│   ├── store 
│   ├── constants 
│   ├── App.jsx 
│   └── main.jsx 
├── public 
└── package.json 

---

# 🗄 Database Schema Design

## 1️⃣ User Schema

----------------------------------------
| Field       | Type   | Description |
|------------|--------|-------------|
| email      | String | Unique email|
| fullName   | String | User name   |
| password   | String | Hashed pass |
| profilePic | String | Profile img |

---

## 2️⃣ Message Schema

----------------------------------------
| Field       | Type     | Description       |
|------------|----------|-------------------|
| senderId   | ObjectId | Sender reference  |
| receiverId | ObjectId | Receiver reference|
| text       | String   | Message content   |
| image      | String   | Optional image    |
| createdAt  | Date     | Timestamp         |

---

# 🔗 Relationships

- A user can send multiple messages  
- Each message has:
  - one sender  
  - one receiver  
- Managed using MongoDB ObjectId  

---

# 🔌 API Endpoints

## Authentication

POST /api/auth/signup 
POST /api/auth/login 
GET /api/auth/check 

---

## Messages

GET /api/messages/:id 
POST /api/messages/send/:id 


---

# 📦 Libraries Used

---------------------------------
| Library       | Purpose          |
|--------------|------------------|
| express      | API framework    |
| mongoose     | MongoDB          |
| jsonwebtoken | Authentication   |
| bcryptjs     | Password hashing |
| socket.io    | Real-time chat   |
| axios        | HTTP client      |
| tailwindcss  | Styling          |


---

# 🚀 Future Improvements

- Message Seen / Delivered Status  
- Typing Indicator  
- Group Chat  
- File Sharing  
- Chat Search  
- Push Notifications  

---
