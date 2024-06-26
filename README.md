# Airline Management System

This project is a web-based application where users can search for, book, and cancel flight tickets.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Features](#features)
- [Built With](#built-with)

## Getting Started

### Prerequisites

1. **Node.js**: Required for running server-side JavaScript. You can find instructions on how to download and install Node.js for your computer [here](https://nodejs.org/en/download/).

2. **MongoDB** (Community Edition preferably): Required to store data. Instructions on downloading and installing MongoDB on your computer can be found [here](https://docs.mongodb.com/manual/installation/).

### Installing

Once you have Node.js and MongoDB installed on your computer, follow these steps:

#### Clone or Download the Repository
```sh
git clone https://github.com/ramyasravanthi/Airbook.git
```

#### Change the Directory and Install Dependencies
```sh
cd Airbook
npm install
```

#### Create a `.env` File and Add the Following
```sh
seshSECRET=<session secret>
dbSECRET=<database secret>
```

#### Run the Project
```sh
npm start
```

#### Open Your Web Browser
Visit the address `localhost:3000` and the application should be up and running!

## Features

* **Authentication:**
  * User login with email and password.
  * New users can sign up.

* **Authorization:**
  * Users can book and cancel tickets only after logging in.
  * Users cannot cancel flight tickets without being authenticated.

* **Ticket Booking Functionalities:**
  * Search for tickets using various parameters.
  * Filter search results by price, duration, or alphabetical order.

* **Contact Feature:**
  * Users can contact for any queries.

* **User Feedback:**
  * Flash messages to respond to users' interactions with the app.

* **Responsive Web Design:**
  * The application is designed to be responsive and user-friendly on various devices.

## Built With

### Front-end

* [EJS](http://ejs.co/)
* [Bootstrap](https://getbootstrap.com/)

### Back-end

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)
* [Passport](http://www.passportjs.org/)
* [Express-Session](https://github.com/expressjs/session#express-session)
* [Connect-Flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)

---

This README provides an overview of the Airline Management System project, detailing the features, prerequisites, installation instructions, and technologies used. Follow these instructions to get the project up and running on your local machine for development and testing purposes. Enjoy coding!
 
