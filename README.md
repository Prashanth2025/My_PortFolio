# 🚀 Prashanth.Dev – Portfolio Website

Welcome to my personal portfolio website!
This project highlights my skills as a **Front-End Developer**, focusing on responsive UI, clean design, and modern web development practices using the MERN ecosystem’s front-end technologies.

---

## 🛠️ Tech Stack

* **React.js** – Component-based architecture for building dynamic UI
* **Bootstrap 5** – Responsive and structured layout
* **Tailwind CSS** – Utility-first styling for fast UI development
* **React Router** – Efficient client-side page navigation
* **Figma** – UI/UX design and prototyping
* **Render** – Live deployment with proper routing support

---

## ✨ Features

* Fully responsive design for all devices
* Clean, semantic UI components
* Smooth navigation between pages
* Custom animations & transitions
* Deployed on Render with client-side routing enabled

---

## 🔗 Live Demo

👉 **Portfolio Link:**
[https://prashanthramesh.onrender.com/](https://prashanthramesh.onrender.com/)

---

## 📂 Folder Structure

```
src/
│── components/
│     └── Navbar.jsx
│
│── pages/
│     ├── Home.jsx
│     ├── About.jsx
│     ├── Projects.jsx
│     └── Contact.jsx
│
├── App.jsx
└── main.jsx

public/
└── static.json

vite.config.js  
README.md
```

---

## 📌 Deployment Notes (Render Hosting)

To support **React Router** on Render, include a `static.json` file inside the `public/` directory:

```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

This ensures that any client-side route (`/about`, `/projects`, etc.) correctly loads `index.html`.

---

## 📞 Contact

If you'd like to connect or collaborate:

* **Portfolio:** [https://prashanthramesh.onrender.com/](https://prashanthramesh.onrender.com/)
* **LinkedIn:** [https://www.linkedin.com/in/prashanth2005r/](https://www.linkedin.com/in/prashanth2005r/)
* **GitHub:** [https://github.com/Prashanth2025](https://github.com/Prashanth2025)
