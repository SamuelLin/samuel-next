---
title: "Personal Portfolio Website"
description: "Modern personal website built with Astro 5, featuring clean design, dark mode support, and Content Collections for showcasing work and experience."
date: 2024-12-01
demoURL: "https://samuel-lin.com"
repoURL: "https://github.com/SamuelLin/personal-website"
tags: ["astro", "typescript", "tailwind", "web design"]
---

# Personal Portfolio Website

This project represents the development of a modern, high-performance personal website using Astro 5, designed to showcase professional work and technical expertise.

## Project Objectives

- 📱 Create responsive design
- 🌙 Implement dark mode support
- ⚡ Optimize loading performance
- 🎨 Design clean and elegant interface
- 📝 Support blog and portfolio showcase

## Technology Choices

### Framework & Tools
- **Astro 5** - Main framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **MDX** - Content management

### Key Features
- Content Collections for content management
- Automated deployment
- SEO optimization
- Accessibility design

## Development Challenges

### 1. Upgrading from Astro 4 to 5
- Learning the new Content Layer API
- Adapting to API changes
- Performance optimization

### 2. Design System Creation
- Establishing consistent design language
- Component-based architecture
- Dark mode implementation

## Technical Implementation

### Modern Astro 5 Features
```typescript
// Content Collections configuration
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, work, projects };
```

### Performance Optimization
- Static site generation with Astro
- Optimized image loading
- Minimal JavaScript footprint
- Fast page transitions

### Dark Mode Implementation
```javascript
// Theme switching functionality
function setTheme(theme) {
  if (theme === 'system') {
    localStorage.removeItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  } else {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}
```

## Design System

### Visual Identity
- **Color Palette** - Stone-based color scheme for elegance
- **Typography** - Inter for body text, Lora for headings
- **Spacing** - Consistent spacing system using Tailwind
- **Components** - Reusable, accessible components

### User Experience
- Intuitive navigation structure
- Fast loading times
- Smooth animations and transitions
- Mobile-first responsive design

## Content Management

### Content Collections Structure
```
src/content/
├── blog/          # Blog posts
├── projects/      # Portfolio projects
└── work/          # Work experience
```

### Automated Features
- RSS feed generation
- Sitemap creation
- SEO meta tags
- Social media previews

## Accessibility & SEO

### Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels where needed

### SEO Optimization
- Meta tags and OpenGraph
- Structured data
- Clean URLs
- Fast loading speeds
- Mobile optimization

## Performance Results

### Core Web Vitals
- **Largest Contentful Paint (LCP)** - < 1.2s
- **First Input Delay (FID)** - < 100ms
- **Cumulative Layout Shift (CLS)** - < 0.1

### Technical Metrics
- **Lighthouse Score** - 95+ across all metrics
- **Page Speed Index** - < 1.5s
- **Time to Interactive** - < 2s

## Project Outcomes

### Technical Excellence
- Built with modern web standards
- Excellent performance scores
- Fully responsive design
- Cross-browser compatibility

### Professional Impact
- Effective showcase of technical skills
- Demonstrates attention to detail
- Highlights project diversity
- Professional online presence

### Learning Achievements
Through this project, I gained deep understanding of:
- Astro's Islands Architecture advantages
- Modern static site generation
- Content-driven development
- Performance optimization techniques

This project showcases the culmination of my frontend development skills and serves as a testament to my ability to create modern, performant web applications.