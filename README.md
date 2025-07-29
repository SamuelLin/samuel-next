# Samuel Lin - Personal Website

A modern personal website built with **Astro 5.x**, showcasing my experience as a frontend developer. Inspired by the astro-nano template but updated with the latest technologies and modern development practices.

## ✨ Features

- **Modern Stack**: Built with Astro 5.x, TypeScript, and Tailwind CSS
- **Content Collections**: Organized blog posts, work experience
- **Dark Mode**: Intelligent theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **SEO Optimized**: Automatic sitemap and RSS feed generation
- **Performance**: Optimized for Core Web Vitals and fast loading times
- **MDX Support**: Enhanced Markdown with component integration

## 🛠️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/) - The web framework for content-driven websites
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful typographic defaults
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Fonts**: [Inter](https://rsms.me/inter/) & [Lora](https://fonts.google.com/specimen/Lora) via Fontsource
- **Code Quality**: ESLint with modern flat configuration
- **Package Manager**: pnpm for efficient dependency management

## 📁 Project Structure

```text
samuel-next/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/        # Content collections (blog, work)
│   ├── layouts/        # Page layouts
│   ├── lib/           # Utility functions
│   ├── pages/         # File-based routing
│   ├── styles/        # Global styles
│   └── types.ts       # TypeScript type definitions
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── eslint.config.mjs  # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SamuelLin/samuel-next.git
cd samuel-next
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🧞 Commands

All commands are run from the root of the project:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Install dependencies                         |
| `pnpm dev`         | Start development server at `localhost:4321` |
| `pnpm build`       | Build production site to `./dist/`           |
| `pnpm preview`     | Preview build locally before deploying       |
| `pnpm lint`        | Run ESLint to check code quality             |
| `pnpm lint:fix`    | Fix auto-fixable ESLint issues               |
| `pnpm astro check` | Run Astro's built-in type checking           |

## 📝 Content Management

### Adding Blog Posts

Create new `.md` files in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'Brief description of the post'
date: 2024-01-01
tags: ['astro', 'typescript']
draft: false
---

Your content here...
```

### Adding Work Experience

Create new `.md` files in `src/content/work/`:

```markdown
---
company: 'Company Name'
role: 'Job Title'
dateStart: '2022-01-01'
dateEnd: '2024-01-01'
description: 'Brief role description'
---

Detailed work experience...
```

## 🎨 Customization

- **Personal Info**: Update `src/consts.ts` with your information
- **Styling**: Modify `tailwind.config.mjs` for design customization
- **Components**: Add new components in `src/components/`
- **Layouts**: Customize page layouts in `src/layouts/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Inspired by the [astro-nano](https://github.com/markhorn-dev/astro-nano) template. Special thanks to the Astro community for building such an amazing framework.

---

Built with ❤️ by [Samuel Lin](https://www.linkedin.com/in/samuelhsnu/)
