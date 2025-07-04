# Glossary of Methods & Components

## 🧩 Components

### `CheezSite` (app/page.tsx)
**Location**: `app/page.tsx`  
**Type**: Main page component  
**Purpose**: Renders the complete $CHEEZ website with all sections

**Key Features**:
- Hero section with animated background
- Lore storytelling section
- Mission statement grid
- Token information display
- Gallery showcase
- Footer with links

**State Management**:
- `isLoaded`: Controls fade-in animation on page load

**Dependencies**:
- `useState`, `useEffect` from React
- `Image` from Next.js
- Custom CSS classes from `globals.css`

### `RootLayout` (app/layout.tsx)
**Location**: `app/layout.tsx`  
**Type**: Root layout component  
**Purpose**: Provides the base HTML structure and metadata

**Key Features**:
- SEO metadata configuration
- Global CSS imports
- HTML structure setup
- Font loading

**Metadata Includes**:
- Page title and description
- Open Graph tags
- Twitter card metadata
- Keywords and author info

## 🎨 Styling Methods

### Custom CSS Classes (globals.css)

#### `@layer base`
**Location**: `app/globals.css`  
**Purpose**: Base HTML element styling

**Methods**:
- `html`: Smooth scrolling behavior
- `body`: Inter font family application

#### `@layer components`
**Location**: `app/globals.css`  
**Purpose**: Reusable component styles

**Button Classes**:
- `.btn-primary`: Yellow background, black text, hover effects
- `.btn-secondary`: Yellow border, yellow text, hover state changes

**Layout Classes**:
- `.section-padding`: Standard section padding (py-20 px-4)
- `.container-max`: Maximum width container (max-w-6xl mx-auto)

#### `@layer utilities`
**Location**: `app/globals.css`  
**Purpose**: Custom utility classes

**Text Effects**:
- `.text-shadow`: Light text shadow for readability
- `.text-shadow-lg`: Heavy text shadow for emphasis

## 🎯 Tailwind Configuration

### Custom Colors (tailwind.config.js)
**Location**: `tailwind.config.js`  
**Purpose**: Define $CHEEZ brand colors

**Color Palette**:
- `cheez-yellow`: #FFD147 (Primary brand color)
- `cheez-cream`: #f8f3e6 (Background color)
- `cheez-dark`: #4E4E4E (Text color)
- `cheez-light`: #e0dbd1 (Section background)
- `cheez-white`: #fffdf7 (Gallery background)

### Custom Animations (tailwind.config.js)
**Location**: `tailwind.config.js`  
**Purpose**: Define custom animation classes

**Animations**:
- `bounce-slow`: 2-second bounce animation
- `pulse-slow`: 3-second pulse animation

## 📱 Responsive Design Methods

### Breakpoint System
**Implementation**: Tailwind CSS responsive prefixes

**Breakpoints**:
- Mobile: Default (320px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

### Mobile-First Approach
**Strategy**: Start with mobile styles, enhance for larger screens

**Implementation**:
- Base styles for mobile
- Responsive modifiers for larger screens
- Flexible grid systems

## 🖼️ Image Handling

### Next.js Image Component
**Location**: Throughout `app/page.tsx`  
**Purpose**: Optimized image loading and display

**Usage Patterns**:
- `fill` prop for aspect-ratio containers
- `sizes` prop for responsive loading
- `alt` text for accessibility
- `className` for styling

**Image Categories**:
- **Lore Images**: Storytelling section with alternating layout
- **Gallery Images**: Grid layout with hover effects

## 🎭 Animation Methods

### CSS Transitions
**Implementation**: Tailwind transition classes

**Common Patterns**:
- `transition-all duration-300`: Smooth state changes
- `transform hover:scale-105`: Hover scaling effects
- `hover:shadow-xl`: Shadow depth changes

### React State Animations
**Implementation**: `useState` and `useEffect`

**Fade-in Effect**:
```typescript
const [isLoaded, setIsLoaded] = useState(false)
useEffect(() => setIsLoaded(true), [])
```

## 🔗 Navigation Methods

### Smooth Scrolling
**Implementation**: CSS `scroll-behavior: smooth`

**Usage**: Internal anchor links (e.g., `#gallery`)

### External Links
**Implementation**: Standard anchor tags with proper attributes

**Pattern**:
- `target="_blank"` for new tabs
- `rel="noopener noreferrer"` for security
- Hover effects for user feedback

## 📊 Data Management

### Static Data Arrays
**Location**: `app/page.tsx`  
**Purpose**: Content management for dynamic rendering

**Data Structures**:
- `loreData`: Array of objects with text and image paths
- `galleryImages`: Array of image paths for gallery grid

### Content Mapping
**Implementation**: Array `.map()` method

**Usage Patterns**:
- Lore section: Alternating layout based on index
- Mission section: Grid layout with hover effects
- Gallery section: Responsive grid with image optimization

## 🎨 Design System Methods

### Typography Scale
**Implementation**: Tailwind text size classes

**Scale**:
- `text-4xl` to `text-7xl`: Hero headings
- `text-xl` to `text-4xl`: Section headings
- `text-lg` to `text-2xl`: Body text

### Spacing System
**Implementation**: Tailwind spacing utilities

**Common Patterns**:
- `gap-4` to `gap-12`: Component spacing
- `py-20`: Section padding
- `px-4`: Container padding

## 🔧 Configuration Methods

### Next.js Configuration
**Location**: `next.config.js`  
**Purpose**: Framework configuration

**Settings**:
- App Router experimental features
- Image domain configuration
- Build optimization

### TypeScript Configuration
**Location**: `tsconfig.json`  
**Purpose**: TypeScript compiler settings

**Features**:
- Strict type checking
- Path mapping for imports
- Next.js type integration

## 📈 Performance Methods

### Image Optimization
**Implementation**: Next.js Image component

**Features**:
- Automatic format optimization
- Responsive sizing
- Lazy loading
- WebP conversion

### Code Splitting
**Implementation**: Next.js automatic code splitting

**Benefits**:
- Reduced initial bundle size
- Faster page loads
- Better caching

## 🔍 SEO Methods

### Metadata Management
**Location**: `app/layout.tsx`  
**Implementation**: Next.js Metadata API

**Features**:
- Dynamic title and description
- Open Graph tags
- Twitter card metadata
- Keyword optimization

### Semantic HTML
**Implementation**: Proper HTML element usage

**Elements**:
- `<section>` for content sections
- `<footer>` for site footer
- `<nav>` for navigation (future)
- Proper heading hierarchy 