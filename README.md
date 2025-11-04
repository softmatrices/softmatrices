# SoftMatrices Website - Premium DigitalOcean-Inspired Design

A modern, high-performance website built with Astro, React, Tailwind CSS, and Framer Motion, featuring a premium design inspired by DigitalOcean's smoothness and polish.

## ✨ Features

### 🎨 Premium Design
- **DigitalOcean-inspired aesthetics** with smooth animations and depth
- **Glassmorphism effects** with backdrop blur and transparency
- **Custom gradient system** with animated color transitions
- **Responsive design** optimized for desktop, tablet, and mobile
- **Dark/Light mode** with smooth transitions and system preference detection

### 🚀 Performance & Animation
- **Framer Motion** for sophisticated animations and micro-interactions
- **Intersection Observer** for scroll-triggered animations
- **Canvas-based particle system** for dynamic backgrounds
- **Optimized assets** with lazy loading and code splitting
- **Smooth scrolling** with parallax effects

### 🛠️ Technical Stack
- **Astro 4.15+** - Modern static site generator
- **React 19** - Component library with hooks
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **Framer Motion 11** - Production-ready motion library
- **TypeScript** - Type-safe development
- **Lucide React** - Beautiful, customizable icons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd softmatrices-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Project Structure

```
src/
├── components/          # React components
│   ├── App.tsx         # Main app wrapper with theme provider
│   ├── Header.tsx      # Navigation with glassmorphism
│   ├── Hero.tsx        # Hero section with animations
│   ├── AnimatedBackground.tsx  # Canvas particle system
│   ├── ThemeToggle.tsx # Dark/light mode toggle
│   └── ...            # Other components
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── layouts/            # Astro layouts
│   └── Layout.astro    # Main layout with SEO
├── pages/              # Astro pages
│   └── index.astro     # Homepage
└── styles/             # Global styles
    └── global.css      # Tailwind + custom styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Ocean blue tones (#0ea5e9 to #0284c7)
- **Secondary**: Slate grays (#64748b to #0f172a)
- **Accent**: Purple gradients (#dd4fff to #4c00b3)
- **Success**: Green tones (#22c55e to #052e16)
- **Warning**: Amber tones (#f59e0b to #451a03)

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (content)

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Content reveals from bottom
- **Float**: Subtle floating motion
- **Glow**: Pulsing glow effects
- **Shimmer**: Loading state animations

## 🌙 Dark Mode

The website includes a sophisticated dark mode implementation:

- **System preference detection** on first visit
- **Persistent theme selection** with localStorage
- **Smooth transitions** between themes
- **Optimized color schemes** for both modes
- **Accessible toggle** with proper ARIA labels

## 📱 Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly interactions** with proper tap targets
- **Optimized typography** scaling across devices

## ⚡ Performance Optimizations

- **Code splitting** with Astro's automatic optimization
- **Image optimization** with next/image equivalent
- **Lazy loading** for non-critical components
- **Prefetching** for improved navigation
- **Minimal JavaScript** with Astro's island architecture

## 🔧 Customization

### Adding New Components

1. Create component in `src/components/`
2. Import in `src/components/App.tsx`
3. Add to the main layout

### Modifying Animations

Update animation variants in component files:

```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Customizing Colors

Edit `tailwind.config.mjs` to modify the color palette:

```js
colors: {
  primary: {
    500: '#your-color',
    // ... other shades
  }
}
```

## 📊 SEO & Analytics

- **Meta tags** optimized for social sharing
- **Structured data** for search engines
- **Open Graph** tags for social media
- **Twitter Card** support
- **Sitemap generation** (when configured)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Static Hosting
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Code Style

- **ESLint** for code quality
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional commits** for version control

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact: hello@softmatrices.com

---

Built with ❤️ by SoftMatrices Team