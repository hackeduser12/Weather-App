# 🌦️ Weather Web App
A simple and responsive weather application that displays real-time weather information for any city using the WeatherAPI. Built with Node.js, Express.js, HTML, Bootstrap, and JavaScript. This project demonstrates how to build a full-stack web app with environment variable protection and live API integration.
## ✨ Features

- 🔍 **City Search**: Enter any city to get real-time weather data
- 🌡️ **Live Weather Info**: Shows temperature, condition, humidity, and wind speed
- 🖥️ **Responsive UI**: Mobile-friendly design using Bootstrap
- ⚡ **Fast Loading**: Lightweight frontend and quick API responses
- 🔒 **Secure API Key**: Uses environment variables to hide sensitive keys
- 🌍 **Global Support**: Works for cities around the world using WeatherAPI
## 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS (Bootstrap)
- JavaScript

**Backend:**
- Node.js
- Express.js

**API:**
- [WeatherAPI](https://www.weatherapi.com/)

**Tools:**
- Git & GitHub (for version control)
- dotenv (to manage environment variables)
### 🛠️ Steps to Install

#### 1. **Clone the Repository**

```bash
git clone https://github.com/vanshgupta74/Weather_web_Application.git
cd weather-app
```

> This command downloads the project and moves into the folder.

#### 2. **Install Dependencies**

```bash
npm install
```

> This will install all the necessary packages into the `node_modules` folder.

#### 3. **Create a `.env` file**

```ini
WEATHER_API_KEY=your_api_key_here
```

>You’ll need to sign up at weatherapi.com for a free key. This file is used to store secrets securely and is not shared publicly.

#### 4. **Start the Server**

```bash
 node server.js
```

>If everything’s set up, your app will run on port.

#### 5. **Open in Browser**

```ardunio
http://localhost:
```

>This runs locally on your machine. It’s not yet public unless deployed online.
## 📁 Project Structure

The following is the directory and file structure for this weather app project:

weather-app/

├── public/

│   ├── index.html        # 🧱 Frontend HTML file  
│   ├── style.css         # 🎨 Optional CSS for styling  
│   └── script.js         # ⚙️ JavaScript for API calls & UI logic  

│

├── .env                  # 🔐 Environment file for API key (not uploaded to GitHub)  
├── .gitignore            # 📄 Ignores node_modules and .env  
├── package.json          # 📦 Project metadata and dependencies  
├── package-lock.json     # 🔒 Auto-generated lock file for dependencies  
├── server.js             # 🚀 Main Node.js backend server file  
└── README.md             # 📘 Project documentation  

## 🖼️ Screenshots

Here’s a quick preview of the Weather App UI:

### 🌤️ Home Page

 ![image alt](https://github.com/vanshgupta74/Weather_web_Application/blob/ff84903a366c3f0f85689c7581e04a871786707d/Home%20Page.png)

📝 This screenshot shows the main interface where users can:

- Enter a city name
- View real-time weather data
- See temperature, condition, wind, and more

---

 
##  Acknowledgements

I would like to thank the following:

- [WeatherAPI](https://www.weatherapi.com/) for providing the free weather data API.
- [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for powering the backend.
- [Bootstrap](https://getbootstrap.com/) for quick and responsive UI styling.
- The open-source community for resources and inspiration.

This project was created as a part of my learning journey in web development and API integration.
## 📄 License

This project is licensed under the **MIT License**.

---

### 🔗 Full License Text

You can read the full license [here](https://opensource.org/licenses/MIT).
