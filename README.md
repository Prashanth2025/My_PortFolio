# Prashanth R — React + Bootstrap Portfolio

A refined dark editorial portfolio built with **React 18 + Vite + Bootstrap 5**.

---

## 📦 Dependencies to Install

Run once inside the project folder:

```bash
npm install
```

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | DOM rendering |
| `bootstrap` | ^5.3.3 | CSS framework (grid, utilities, components) |
| `bootstrap-icons` | ^1.11.3 | Icon font |
| `vite` | ^5.4.2 | Build tool & dev server |
| `@vitejs/plugin-react` | ^4.3.1 | Vite React plugin |

**External (no install — loaded via Google Fonts CDN):**
- **Playfair Display** — display / headings
- **IBM Plex Sans** — body text
- **IBM Plex Mono** — labels, tags, code

**Node.js:** 18 or newer recommended

---

## 🚀 Run Locally

```bash
cd prashanth-portfolio
npm install
npm run dev
```

Open → **http://localhost:5173**

---

## 🏗️ Build for Production

```bash
npm run build
# outputs to /dist  — deploy that folder
```

---

## 🌐 Deploy

### Vercel (easiest)
```bash
npm i -g vercel
vercel
# Framework: Vite | Build: npm run build | Output: dist
```

### Netlify
1. `npm run build`
2. Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## ✏️ Customise

| What to change | Where |
|---|---|
| LinkedIn / GitHub URLs | `src/components/Contact.jsx` |
| Projects | `src/components/Projects.jsx` → `PROJECTS` array |
| Skills | `src/components/Skills.jsx` → `SKILLS` array |
| Experience | `src/components/Experience.jsx` → `EXP` array |
| **Resume PDF** | **Drop your `resume.pdf` into the `public/` folder** |
| Resume preview data | `src/components/Resume.jsx` → `RESUME` object |
| Theme colours | `src/index.css` → `:root` CSS variables |
| Fonts | `index.html` Google Fonts link + `src/index.css` `--ff-*` vars |

### 📄 Adding Your Resume PDF

1. Name your resume file exactly `resume.pdf`
2. Place it inside the `public/` folder: `prashanth-portfolio/public/resume.pdf`
3. The PDF viewer and download button will work automatically.

If no PDF is found, the section shows a friendly "not found" message with instructions.
