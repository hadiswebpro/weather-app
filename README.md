# 🌤️ Weather App

A responsive weather application built with **HTML, CSS, and JavaScript** that displays real-time weather information for different cities using the **OpenWeather API**.

This project was created as a learning and portfolio project to practice working with APIs, asynchronous JavaScript, responsive design, Git/GitHub, and deployment.

## 🌐 Live Demo

👉 [View Live Site](https://weather-app-secure.hibech804.workers.dev/)

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Current temperature
* 💧 Humidity
* 💨 Wind speed
* 🌡️ Feels-like temperature
* ☀️ Weather condition
* 🌤️ Dynamic weather themes
* 🌙 Day & night themes
* 🎨 Different backgrounds for different weather conditions
* 😕 Custom error state for invalid cities
* ⏳ Loading state while fetching weather data
* 📱 Fully responsive design
* ☁️ Real-time weather data from OpenWeather API

## 🌦️ Weather Themes

The application changes its appearance based on the current weather condition.

Supported themes include:

* ☀️ Sunny
* ☁️ Cloudy
* 🌧️ Rainy
* 🌫️ Foggy
* ❄️ Snowy
* ⛈️ Thunderstorm
* 🌙 Night
* ⚠️ Error
* 🌤️ Default

Each theme has its own background image, colors, buttons, information cards, and overall visual style.

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* OpenWeather API
* Git & GitHub
* Cloudflare Workers
* Responsive Design
* PWA

## 🔐 API Security

The OpenWeather API key is **not stored directly in the frontend code**.

The project uses a **Cloudflare Worker** as a small API layer. The API key is stored as an encrypted secret in Cloudflare and is used by the Worker when requesting weather data.


Browser
   ↓
Cloudflare Worker
   ↓
OpenWeather API
   ↓
Weather Data
   ↓
Weather App


This was also an introduction to separating frontend code from sensitive API credentials.

## PWA

The project includes:

- `manifest.json`
- `sw.js`
- PWA icons
- Service Worker caching

The application can be installed as a standalone app
on supported devices.


## 📚 What I Learned

While building this project, I practiced:

* Working with `fetch()`
* Understanding Promises and `async/await`
* Reading and using API responses
* Accessing nested API data
* Using `data.weather[0].main`
* Working with DOM elements
* Handling user input
* Using `trim()`
* Updating HTML with `innerHTML`
* Handling API errors
* Creating loading states
* Working with CSS classes dynamically
* Creating dynamic themes
* Working with day/night logic
* Using Git and GitHub
* Deploying a web project
* Using Cloudflare Workers
* Working with environment secrets


## 🚧 Current Learning Stage

This project is primarily a **frontend project**.

I am currently learning JavaScript and the basics of working with APIs. I have not learned backend development yet, so the backend/API layer used here is intentionally kept at the level needed for this project.

**Backend development is a future learning goal**, and I plan to learn it more deeply after strengthening my JavaScript fundamentals.

The goal is to gradually move from frontend development toward full-stack development.

## 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

Weather information cards use a responsive layout, with multiple cards displayed per row on larger screens and a single-column layout on smaller screens.

## 🚀 Future Improvements

Possible future improvements include:

* More detailed weather information
* Weather icons
* Better animations
* Geolocation-based weather
* Search history
* Multiple saved cities
* Forecast for upcoming days
* More advanced backend architecture
* Database integration
* User accounts
* Improved accessibility

## 👩‍💻 About This Project

This project is part of my journey in learning web development.

Rather than using the project only as a finished product, I built it step by step to understand how each part works — from the frontend and API requests to error handling, Git/GitHub, and deployment.

More advanced backend and full-stack concepts will be added to my learning path as I progress.

---

### 📌 Project Status

**Completed — Learning / Portfolio Project**

## 👩‍💻 Author

**Hadis**
