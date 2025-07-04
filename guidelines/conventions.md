# Coding Conventions & Standards

## 🏗️ Project Structure

### Directory Layout
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── public/                # Static assets
├── guidelines/            # Project documentation
└── [config files]         # Configuration files
```

### File Organization
- **Components**: Place in `app/` directory for App Router
- **Styles**: Global styles in `app/globals.css`
- **Assets**: All images, fonts, etc. in `public/`
- **Documentation**: All docs in `guidelines/`

## 📝 Naming Conventions

### Files & Directories
- **Components**: PascalCase (`Page.tsx`, `HeroSection.tsx`)
- **Utilities**: camelCase (`utils.ts`, `helpers.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)
- **Directories**: kebab-case (`public/`, `guidelines/`)

### Code Elements
- **Components**: PascalCase (`CheezSite`, `HeroSection`)
- **Functions**: camelCase (`handleClick`, `formatPrice`)
- **Variables**: camelCase (`userData`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_BASE_URL`)
- **CSS Classes**: kebab-case with Tailwind (`btn-primary`, `section-padding`)

### CSS/Tailwind Classes
- **Custom Classes**: Use `@layer components` in `globals.css`
- **Utility Classes**: Prefer Tailwind utilities over custom CSS
- **Responsive**: Mobile-first approach with responsive prefixes
- **Custom Colors**: Use semantic names (`cheez-yellow`, `cheez-dark`)

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--cheez-yellow: #FFD147
--cheez-cream: #f8f3e6
--cheez-dark: #4E4E4E
--cheez-light: #e0dbd1
--cheez-white: #fffdf7
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Headings**: Use appropriate font weights (700-900)
- **Body Text**: 400-500 weight for readability

### Spacing
- **Sections**: Use `section-padding` utility class
- **Containers**: Use `container-max` for consistent max-width
- **Gaps**: Use Tailwind gap utilities (`gap-4`, `gap-8`, etc.)

## 💻 Code Style

### TypeScript
- **Strict Mode**: Always use strict TypeScript
- **Types**: Define interfaces for complex objects
- **Imports**: Use named imports over default when possible
- **Exports**: Use named exports for utilities, default for components

### React/Next.js
- **Components**: Use functional components with hooks
- **Props**: Define TypeScript interfaces for component props
- **State**: Use `useState` and `useEffect` appropriately
- **Client Components**: Mark with `'use client'` directive when needed

### Styling
- **Tailwind First**: Use Tailwind utilities over custom CSS
- **Custom Classes**: Define in `globals.css` with `@layer components`
- **Responsive**: Mobile-first responsive design
- **Animations**: Use Tailwind animation classes or CSS transitions

## 🔧 Best Practices

### Performance
- **Images**: Use Next.js `Image` component with proper sizing
- **Loading**: Implement loading states for better UX
- **Optimization**: Use dynamic imports for large components
- **SEO**: Proper meta tags and semantic HTML

### Accessibility
- **Semantic HTML**: Use proper HTML elements (`<section>`, `<nav>`, etc.)
- **Alt Text**: Always provide alt text for images
- **Focus States**: Ensure proper focus indicators
- **ARIA**: Use ARIA labels when necessary

### Code Quality
- **DRY Principle**: Don't repeat yourself - extract reusable components
- **Single Responsibility**: Each component should have one clear purpose
- **Error Handling**: Implement proper error boundaries and fallbacks
- **Testing**: Write tests for critical functionality

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Mobile-First Approach
- Start with mobile styles
- Add responsive modifiers for larger screens
- Test on multiple device sizes

## 🚀 Deployment

### Environment
- **Development**: `npm run dev`
- **Production**: `npm run build && npm start`
- **Static Export**: Configure for static hosting if needed

### Performance
- **Bundle Size**: Monitor and optimize bundle size
- **Lighthouse**: Aim for 90+ scores across all metrics
- **Core Web Vitals**: Optimize for LCP, FID, and CLS 