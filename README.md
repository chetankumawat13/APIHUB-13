# Hub-13 – API Hub Web App

Hub-13 is a modern API Hub dashboard where users can explore, search, and filter APIs by category, and view detailed documentation for each API.  
This project is built using React, React Router, and Tailwind CSS with a clean, responsive UI.

This is a frontend project created for learning, practice, and portfolio use.

---

## Project Overview

Hub-13 represents a central platform where developers can discover different APIs from multiple domains such as Gaming, Weather, Finance, and Entertainment.  
Users can search APIs, filter them by category, and click on any API card to view a full documentation page.

The UI follows a clean, minimal, and developer-friendly dashboard design.

---

## Features

• Search APIs by title and description  
• Filter APIs by category  
• Sidebar with search + filters  
• Click card to open API documentation  
• API docs page with endpoint, method, and examples  
• Add New API form  
• Tags system for better classification  
• Fully responsive grid layout  
• React Router based navigation  
• Clean UI using Tailwind CSS  

---

## Tech Stack

React.js  
React Router  
Tailwind CSS  
JSON / json-server (optional backend)

---

## Folder Structure

src  
components  
Navbar.jsx  
Card.jsx  
SideMenu.jsx  

pages  
Docs.jsx  
AddNewApi.jsx  
About.jsx  
Services.jsx  
Contact.jsx  

router  
index.jsx  

data.js  
App.jsx  

---

## Sample API Data

```js
export const apis = [
  {
    id: "dd4d",
    api_title: "BGMI Players",
    api_description: "Fetch BGMI player stats, rank, and info",
    api_category: "Gaming",
    api_img: "/bgmi.png",
    tags: ["Gaming", "Battle Royale", "Leaderboard"]
  },
  {
    id: "dd5e",
    api_title: "Weather Info",
    api_description: "Free API for current weather and forecast",
    api_category: "Weather",
    api_img: "/wi.png",
    tags: ["Weather", "Forecast", "Climate"]
  }
];


# How to Run the Project
  - npm install
  - npm start
