# Subscription Management Microservice

A scalable, secure microservice to manage user subscriptions and plans for a SaaS platform, built using **Node.js**, **Express.js**, **MongoDB**, and **JWT**.

---

## 🔧 Features

- JWT-based user authentication (Signup/Login)
- CRUD operations for user subscriptions
- Plan management (create, list plans)
- Update, cancel, and auto-expire subscriptions
- Secure routes with JWT middleware
- Clean architecture + RESTful API design
- Background cron job to expire subscriptions
- Scalable and fault-tolerant structure

---

## Tech Stack

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

## Folder Structure
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

## Getting Started

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

## Auth Endpoints
| Method  | Endpoint         | Description         |
|---------|------------------|---------------------|
| POST    | /api/auth/signup | Register a new user |
| POST	  | /api/auth/login	 | Login and get token |

## Plan Management
| Method  | Endpoint         | Description         |
|---------|------------------|---------------------|
|GET	|/api/plans	|Get all available plans|

## Subscription Management

Authorization: Bearer <JWT_TOKEN>

| Method  | Endpoint         | Description         |
|---------|------------------|---------------------|
|POST	|/api/subscriptions	|Subscribe to a plan|
|GET	|/api/subscriptions/:userId	|Get current subscription|
|PUT	|/api/subscriptions/:userId	|Update/Upgrade subscription plan|
|DELETE	|/api/subscriptions/:userId	|Cancel subscription|

## Auto-Expiration (Cron Job)

- Subscriptions with a duration will automatically expire once the endDate is passed.

- The cron job runs every midnight and updates expired subscriptions.

- Defined in: src/jobs/subscriptionExpiryJob.js


## Testing the API
- Use Postman collection:
- Link: https://www.postman.com/cryosat-specialist-7552414/workspace/educase/collection/33360544-074996bb-4be1-4c87-ae4b-93b93a6b23d3?action=share&creator=33360544

- Register → /api/auth/signup

- Login → /api/auth/login to get token

- Use token to access other routes
