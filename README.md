# 📦 Subscription Management Microservice

A scalable, secure microservice to manage user subscriptions and plans for a SaaS platform, built using **Node.js**, **Express.js**, **MongoDB**, and **JWT**.

---

## 🔧 Features

- ✅ JWT-based user authentication (Signup/Login)
- 📜 CRUD operations for user subscriptions
- 📦 Plan management (create, list plans)
- 🔄 Update, cancel, and auto-expire subscriptions
- 🛡 Secure routes with JWT middleware
- 🧭 Clean architecture + RESTful API design
- ⏰ Background cron job to expire subscriptions
- 📈 Scalable and fault-tolerant structure

---

## 🛠 Tech Stack

| Layer             | Tech                        |
|------------------|-----------------------------|
| Language         | Node.js                     |
| Framework        | Express.js                  |
| Database         | MongoDB (via Mongoose)      |
| Auth             | JWT + Bcrypt                |
| Cron Jobs        | Node-cron                   |
| Env Management   | dotenv                      |
| Architecture     | Clean/MVC Architecture      |

---

## 📁 Folder Structure
```bash
src/
├── app.js
├── index.js
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ ├── planController.js
│ └── subscriptionController.js
├── routes/
│ ├── authRoutes.js
│ ├── planRoutes.js
│ └── subscriptionRoutes.js
├── models/
│ ├── User.js
│ ├── Plan.js
│ └── Subscription.js
├── middlewares/
│ ├── auth.js
│ └── errorHandler.js
├── jobs/
│ └── subscriptionExpiryJob.js
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekrj02/QL.git
cd QL
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Configure Environment Variables
Create a .env file:

.env
```
PORT=5000
MONGO_URI=<mongodburi>
JWT_SECRET=<your_jwt_secret>
```

### 4. Run the App

```bash
npm start
```

🔐 Auth Endpoints

| Method  | Endpoint| Description |
|------------------|-----------------------------|
| POST | /api/auth/signup | Register a new user |
| POST	| /api/auth/login	| Login and get token |

📦 Plan Management
Method	Endpoint	Description
GET	/api/plans	Get all available plans

📜 Subscription Management
🔐 All endpoints below require an Authorization header:

makefile
Copy
Edit
Authorization: Bearer <JWT_TOKEN>
Method	Endpoint	Description
POST	/api/subscriptions	Subscribe to a plan
GET	/api/subscriptions/:userId	Get current subscription
PUT	/api/subscriptions/:userId	Update/Upgrade subscription plan
DELETE	/api/subscriptions/:userId	Cancel subscription

⏰ Auto-Expiration (Cron Job)
Subscriptions with a duration will automatically expire once the endDate is passed.

The cron job runs every hour and updates expired subscriptions.

🔁 Defined in: src/jobs/subscriptionExpiryJob.js

📈 Future Improvements
 Plan creation and updates via API

 Email notifications for subscription expiry

 Integration with payment gateways

 Caching (Redis) for frequently accessed data

 Asynchronous event handling via Kafka/RabbitMQ

🧪 Testing the API
Use tools like Postman or Thunder Client:

Register → /api/auth/signup

Login → /api/auth/login to get token

Use token to access other routes

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss.

📄 License
MIT License

👨‍💻 Author
Made with ❤️ by Your Name

markdown
Copy
Edit

Let me know if you also want:
- A ready `Dockerfile` + `docker-compose.yml`
- `Postman collection` file for testing all APIs
- GitHub Action for CI/CD  
Happy to generate any or all of them for you!
