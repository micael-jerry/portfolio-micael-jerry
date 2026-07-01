# Micael Jerry Portfolio

[![Continuous Integration](https://github.com/micael-jerry/portfolio-micael-jerry/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/micael-jerry/portfolio-micael-jerry/actions/workflows/CI.yml)
[![Vercel Deployment](https://img.shields.io/badge/deployed-vercel-black.svg?style=flat&logo=vercel)](https://micael-jerry.vercel.app)

A modern, responsive, and multilingual personal portfolio designed to showcase software engineering skills, professional experiences, and projects.

🔗 **Live Demo:** [https://micael-jerry.vercel.app](https://micael-jerry.vercel.app)

---

## 🚀 Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Multilingual Support:** Fully internationalized with English (EN) and French (FR) language switching using `i18next`.
- **Modern UI/UX:** Built with React 19, Material-UI (MUI 7) components, and fluid animations powered by `Framer Motion`.
- **42 School Projects:** Special section displaying projects completed during the 42 curriculum.
- **Interactive Contact Form:** Built with a clean interface and powered by `EmailJS` for direct email delivery.

---

## 🛠️ Built With

- **Framework/Bundler:** [React 19](https://react.dev/) & [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling & UI Components:** [Material UI (MUI)](https://mui.com/)
- **Animations:** [Framer Motion](https://www.motion.dev/)
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Contact Service:** [EmailJS](https://www.emailjs.com/)

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v22+) and [pnpm](https://pnpm.io/) (v11+) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/micael-jerry/portfolio-micael-jerry.git
   cd portfolio-micael-jerry
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory with the following content:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

### Development

To start the local development server:
```bash
pnpm dev
```

### Build

To build the application for production:
```bash
pnpm run build
```
The output files will be generated in the `dist` directory.

### Code Quality

Run the linter and code formatter checks:
```bash
pnpm run lint          # Run ESLint
pnpm run format        # Run Prettier format write
pnpm run format:check  # Check formatting status
```

---

## 📦 Deployment

This project is configured to be deployed on **Vercel**. 

To deploy:
1. Connect your GitHub repository to Vercel.
2. Ensure the build command is set to: `tsc && vite build`.
3. Set the output directory to: `dist`.
4. Configure the environment variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`) in the Vercel project settings.
