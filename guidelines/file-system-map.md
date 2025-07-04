# File System Map

## 📁 Project Structure Overview

```
CHEEZ SITE/
├── 📁 app/                          # Next.js App Router
│   ├── 📄 globals.css              # Global styles and Tailwind imports
│   ├── 📄 layout.tsx               # Root layout with metadata
│   ├── 📄 page.tsx                 # Main page component
│   └── 📁 game/                    # Clicker game
│       └── 📄 page.tsx             # Game page component
│
├── 📁 public/                       # Static assets
│   ├── 🖼️ MAIN.png                 # Hero background image
│   ├── 🖼️ COCKROACH.png            # Hero/lore image
│   ├── 🖼️ DEVVING.PNG              # Gallery image
│   ├── 🖼️ HUNGRY FOR IT.png        # Lore image
│   ├── 🖼️ MANHOLE.png              # Gallery image
│   ├── 🖼️ MONEY.PNG                # Lore image
│   ├── 🖼️ ROLLING IN IT.png        # Gallery image
│   ├── 🖼️ STRONG.png               # Lore image
│   └── 🖼️ TRAP.png                 # Lore image
│
├── 📁 guidelines/                   # Project documentation
│   ├── 📄 README.md                # Guidelines directory overview
│   ├── 📄 conventions.md           # Coding standards and conventions
│   ├── 📄 file-system-map.md       # This file - project structure
│   ├── 📄 refactoring-log.md       # Refactoring history
│   ├── 📄 glossary.md              # Method definitions and usage
│   └── 📄 todo.md                  # Task management
│
├── 📄 package.json                  # Dependencies and scripts
├── 📄 next.config.js               # Next.js configuration
├── 📄 tailwind.config.js           # Tailwind CSS configuration
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 README.md                    # Project overview and setup
```

## 🗂️ Directory Details

### `/app` - Next.js App Router
The main application directory using Next.js 14 App Router architecture.

**Key Files:**
- `globals.css` - Global styles, Tailwind imports, custom utilities
- `layout.tsx` - Root layout with metadata, fonts, and global structure
- `page.tsx` - Main page component with all sections

### `/public` - Static Assets
All static files including images, fonts, and other assets.

**Image Assets:**
- **Lore Images**: Used in the storytelling section
  - `COCKROACH.png` - "born in the gutter"
  - `HUNGRY FOR IT.png` - "raised by cheddar"
  - `TRAP.png` - "every day's a scam"
  - `MONEY.PNG` - "he saw the rats with yachts"
  - `STRONG.png` - "this is $CHEEZ"

- **Gallery Images**: Community artwork showcase
  - `ROLLING IN IT.png` - Rat success imagery
  - `DEVVING.PNG` - Development/technical theme
  - `MANHOLE.png` - Urban rat life
  - Additional images for gallery grid

### `/guidelines` - Project Documentation
Comprehensive documentation for maintaining code quality and consistency.

**Documentation Files:**
- `README.md` - Guidelines directory overview
- `conventions.md` - Coding standards and naming conventions
- `file-system-map.md` - This file - project structure documentation
- `refactoring-log.md` - History of refactoring efforts
- `glossary.md` - Method definitions and usage patterns
- `todo.md` - Task management and project roadmap

## 🔧 Configuration Files

### Root Level Configuration
- `package.json` - Project dependencies, scripts, metadata
- `next.config.js` - Next.js framework configuration
- `tailwind.config.js` - Tailwind CSS customization and theme
- `postcss.config.js` - PostCSS processing configuration
- `tsconfig.json` - TypeScript compiler options
- `README.md` - Project overview, setup instructions, features

## 📊 File Statistics

- **Total Files**: 20+
- **Components**: 3 main components
- **Images**: 8 PNG assets
- **Configuration**: 6 config files
- **Documentation**: 6 guideline files

## 🎯 File Naming Patterns

### Images
- **Lore Images**: Descriptive names matching story content
- **Gallery Images**: Thematic names reflecting rat/crypto culture
- **Format**: PNG for quality and transparency support

### Code Files
- **Components**: PascalCase (`Page.tsx`, `Layout.tsx`)
- **Styles**: kebab-case (`globals.css`)
- **Config**: kebab-case (`next.config.js`, `tailwind.config.js`)

### Documentation
- **Guidelines**: kebab-case with descriptive names
- **README**: Standard project documentation

## 🔄 File Relationships

### Component Dependencies
```
page.tsx
├── layout.tsx (via App Router)
├── globals.css (via layout.tsx)
└── public/*.png (via Image components)
```

### Style Dependencies
```
globals.css
├── tailwind.config.js (theme configuration)
├── postcss.config.js (processing)
└── layout.tsx (global import)
```

### Configuration Dependencies
```
package.json
├── next.config.js (Next.js setup)
├── tailwind.config.js (styling)
├── postcss.config.js (CSS processing)
└── tsconfig.json (TypeScript setup)
```

## 📈 Growth Patterns

### Planned Additions
- `/components/` - Reusable component library
- `/utils/` - Utility functions and helpers
- `/types/` - TypeScript type definitions
- `/styles/` - Additional styling modules
- `/tests/` - Testing files and configurations

### Scalability Considerations
- Component extraction for reusability
- Type definitions for better TypeScript support
- Utility functions for common operations
- Testing infrastructure for quality assurance 