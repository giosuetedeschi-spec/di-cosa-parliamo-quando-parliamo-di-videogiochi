# Di Cosa Parliamo Quando Parliamo di Videogiochi 🎮

> Un laboratorio di riflessione filosofica sul videogioco

[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-blue)](https://giosuetedeschi-spec.github.io/di-cosa-parliamo-quando-parliamo-di-videogiochi/)

## 🌐 Live Demo

Visit the live site: [https://giosuetedeschi-spec.github.io/di-cosa-parliamo-quando-parliamo-di-videogiochi/](https://giosuetedeschi-spec.github.io/di-cosa-parliamo-quando-parliamo-di-videogiochi/)

## 📖 About

This is a modern, philosophical exploration of video games through an interactive website. The project presents a workshop focused on critical reflection about the nature and meaning of video games.

**Key Features:**
- 🎨 Modern, premium design with glassmorphism effects
- 📱 Fully responsive layout
- ⚡ Fast, static site built with React + Vite
- 🌙 Dark mode aesthetic
- ✨ Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Styling**: Vanilla CSS with Tailwind-inspired utility classes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/giosuetedeschi-spec/di-cosa-parliamo-quando-parliamo-di-videogiochi.git
cd di-cosa-parliamo-quando-parliamo-di-videogiochi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── components/
│   ├── Hero.tsx              # Hero section component
│   └── InfoSection.tsx       # Information section component
├── App.tsx                   # Main application component
├── index.tsx                 # Application entry point
├── index.html                # HTML template
├── constants.ts              # Workshop content and constants
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎨 Customization

The workshop content is centralized in `constants.ts`. Update this file to modify:
- Workshop title and description
- Philosophical questions
- Call-to-action text

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ for philosophical gamers
