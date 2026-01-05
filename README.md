# 🏠 Niwaas — Rental Property Management Platform

Niwaas is a **full-stack rental property management platform** designed to simplify how properties are **listed, discovered, booked, and managed**.  
The project focuses on **real-world architecture**, **clean APIs**, and **scalable design**, making it suitable both as a **production-ready MVP** and a **strong resume project**.

---

## 🚀 Features

### 👤 Authentication & Users
- Secure user authentication (JWT-based)
- Role-based access (Owner / Tenant)
- Protected routes & sessions

### 🏘️ Property Listings
- Create, update, delete rental listings
- Upload property images
- Location, pricing, and availability management

### 📅 Booking System
- Property booking & availability tracking
- Booking history for users
- Owner-side booking overview

### 🛠️ Platform Design
- RESTful API architecture
- Clean separation of frontend & backend
- Environment-based configuration
- Production-focused folder structure

---

## 🧱 Tech Stack

**Frontend**
- React
- Tailwind CSS
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Other**
- JWT Authentication
- Cloud-based image uploads
- Environment variables for security








---
## 🖼️ Screenshots

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/1c41517e-8326-4a24-b36c-1486cdb5506b" width="100%" />
      <br/><strong>Home Page</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/0685fb74-8006-4ef5-b324-1898ef08cb9d" width="100%" />
      <br/><strong>Property Listings</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/f29e8f8a-ee32-420f-8ab7-2dc1bcbeabd0" width="100%" />
      <br/><strong>Authentication</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/a755326d-5450-4f3b-935a-518143f7ea0b" width="100%" />
      <br/><strong>Listing </strong>
    </td>
    
  </tr>
</table>




---
<hr/>


## ⚙️ Environment Setup

Create a `.env` file in **backend/**:

### Backend (`backend/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
Create a .env file in frontend/:

```
Frontend (frontend/.env)
```

VITE_API_URL=http://localhost:5000/api

```
🧪 Running Locally

Backend
```
cd backend
npm install
npm run dev
```

Frontend
```
cd frontend
npm install
npm run dev
```

<hr/>

🔒 Security Considerations

```
.env files are excluded from version control

Authentication middleware protects sensitive routes

API inputs are validated

Clear separation of public & private data

```

---


📈 Future Enhancements

Payment integration

Reviews & ratings

Admin dashboard

Advanced search & filters

<hr/>
---

🤝 Contribution

Contributions are welcome.
Feel free to:

Fork the repository

Create a feature branch

Submit a pull request with clear commit messages

---

📌 Author

Arpit
Full-Stack Developer | System Design Learner
Built with a focus on clean code, scalability, and real-world relevance.


---

