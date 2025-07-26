# Final Blog

A full‑stack blog platform built with React.js and Appwrite, featuring real‑time CRUD operations, secure authentication, and a responsive UI. This project was developed as the capstone “finalBlog” module of the React-Internship series.

---

## 🚀 Live Demo

🔗 [View it on Vercel](https://blog-website-beige-chi.vercel.app)

---

## 🖥️ Features

- **Real‑Time Posts**: Create, Read, Update, and Delete blog posts with live updates.  
- **Secure Authentication**: Email/password sign‑up & login powered by Appwrite Auth.  
- **Responsive Design**: Mobile‑first layout using Tailwind CSS.  
- **File Uploads**: Upload and display images with Appwrite Storage.  
- **Rich Text Editing**: Markdown‑style editor for composing posts.  
- **Route Protection**: Private routes for writing/editing; public routes for browsing.

---

## 🛠️ Tech Stack

| Front‑End               | Back‑End   | Database & Auth   | Styling     |
| ----------------------- | ---------- | ----------------- | ----------- |
| React.js (v18+)         | Appwrite   | Appwrite Database | Tailwind CSS|
| React Router DOM        | —          | Appwrite Auth     |             |
| React Markdown Editor   | —          | Appwrite Storage  |             |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm or Yarn  
- Appwrite server (self‑hosted or cloud)  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/narayan24x7/React-Internship.git
   cd React-Internship/finalBlog
````

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   

3. Configure environment
   Create a `.env.local` file in the `finalBlog` folder with the following variables:

   ```env
   REACT_APP_APPWRITE_ENDPOINT=https://<YOUR_APPWRITE_ENDPOINT>
   REACT_APP_APPWRITE_PROJECT_ID=<YOUR_PROJECT_ID>
   REACT_APP_APPWRITE_DATABASE_ID=<YOUR_DATABASE_ID>
   REACT_APP_APPWRITE_COLLECTION_ID=<YOUR_COLLECTION_ID>
   REACT_APP_APPWRITE_STORAGE_ID=<YOUR_STORAGE_BUCKET_ID>
   ```

### Running Locally

```bash
npm start
# or
yarn start


Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the blog home page, with options to sign up or log in.

---

## 🏗️ Project Structure

```
finalBlog/
├── public/
│   └── index.html
├── src/
│   ├── components/    # Reusable UI components
│   ├── contexts/      # Auth & Appwrite client providers
│   ├── pages/         # Route components (Home, Login, Editor, Post)
│   ├── services/      # API wrappers for Appwrite Database & Storage
│   ├── styles/        # Tailwind config & custom CSS
│   └── App.jsx        # Main app & router setup
├── .env.local
├── tailwind.config.js
└── package.json
```

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/awesome-post`
3. Commit your changes: `git commit -m "feat: add awesome feature"`
4. Push to your branch: `git push origin feature/awesome-post`
5. Open a Pull Request

Please follow existing code style and update tests or documentation as needed.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](../../LICENSE) for details.

---

## 📬 Contact

Narayandas Kachhi

* Email: [narayankachhi43@gmail.com](mailto:narayankachhi43@gmail.com)
* GitHub: [narayan24x7](https://github.com/narayan24x7)
* LinkedIn: [linkedin.com/in/narayandas-kachhi](https://www.linkedin.com/in/narayandas-kachhi/)

> Happy blogging! 🚀
