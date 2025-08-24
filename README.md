# ✈️ Airbook – Airline Reservation System

Airbook is a **Node.js & Express-based web application** that provides an airline reservation system.  
It allows users to search for flights, book tickets, manage bookings, view boarding passes, and contact support.

---

## 🚀 Features

- **User Authentication**
  - Register, login, and logout using Passport.js with local strategy.
  - Secure password handling via `passport-local-mongoose`.

- **Flight Search & Booking**
  - Search flights by origin, destination, and date.
  - Randomized airline and time generation for demo purposes.
  - Book tickets with passenger details.
  - Cancel individual passengers or entire bookings.

- **User Dashboard**
  - View active and past bookings.
  - Generate digital boarding passes.

- **Contact Support**
  - Submit queries or feedback via contact form.

- **Security**
  - Input sanitization using `express-mongo-sanitize`.
  - Secure sessions stored in MongoDB.
  - Helmet integration for improved HTTP header security.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js (Local Strategy)
- **Database**: MongoDB with Mongoose
- **Templating Engine**: EJS with `ejs-mate`
- **Session Management**: express-session + connect-mongo
- **Validation & Utilities**: Lodash, Flash messages, Helmet

---

## 📂 Project Structure

```
Airbook/
│── app.js                  # Main entry point of the app
│── package.json            # Dependencies and scripts
│── controllers/            # Route logic (auth & flights)
│── routes/                 # Express routes
│── models/                 # MongoDB models (User, Booking, Contact)
│── utils/                  # Helpers, middlewares, airport list
│── views/                  # EJS templates (UI)
│── public/                 # Static assets (CSS, JS, images)
```
````

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/ramyasravanthi/Airbook.git
cd Airbook
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory with the following:

```
dbURL=mongodb://localhost:27017/avian
dbSECRET=yourDatabaseSecret
seshSECRET=yourSessionSecret
PORT=3000
NODE_ENV=DEVELOPMENT
```

### 4. Run MongoDB locally

Make sure you have MongoDB running on your system:

```bash
mongod
```

### 5. Start the server

```bash
npm start
```

Server will run at: `http://localhost:3000`

---

## 🔑 Key Routes

### Authentication

* `GET /register` → Show register page
* `POST /register` → Create new user
* `GET /login` → Show login page
* `POST /login` → Login user
* `GET /logout` → Logout user

### Flight Booking

* `GET /` → Home (Search flights)
* `POST /` → Search flights
* `GET /search` → View available flights
* `POST /search` → Select flight
* `GET /review` → Review selected flight
* `GET /traveller` → Enter passenger details
* `POST /traveller` → Confirm booking
* `GET /bookings` → View bookings
* `GET /boarding-pass/:id` → View boarding pass
* `GET /cancel/:id` → Cancel booking page
* `POST /cancel/:id/:value` → Cancel specific passenger

### Contact

* `GET /contact` → Contact form
* `POST /contact` → Submit contact details

---

## 📖 Future Improvements

* Integration with real airline APIs
* Payment gateway for ticket booking
* Email confirmations for bookings
* Mobile-responsive UI


