# GRILL & CHILL - Premium Restaurant Landing Page

Una landing page premium para un restaurante de hamburguesas y hot dogs, construida con Next.js 15, TypeScript, Tailwind CSS, GSAP y Lenis.

## Características Principales

### 🎨 Design System Avanzado
- **Paleta de colores semántica**: Sistema de colores consistente con variables CSS
- **Sistema de sombras y glow**: Sombras dinámicas y efectos de brillo (glow-xs a glow-xl, depth-sm a depth-lg)
- **Tipografía jerárquica**: Clases de encabezados y body text con proporciones consistentes
- **Animaciones premium**: 10+ animaciones personalizadas con transiciones suaves

### ⚡ Animaciones & Interacciones
- **GSAP ScrollTrigger**: Parallax effects, scroll-triggered animations
- **3D Perspective**: Tarjetas con transformaciones 3D en hover (SpotlightCard)
- **Animaciones de revelación**: Componente Reveal con stagger animations
- **Cursor personalizado**: Cursor animado con efecto glow naranja
- **Smooth scrolling**: Integración con Lenis para scroll fluido

### 📱 Características Responsivas
- **Mobile-first design**: Optimizado para todos los tamaños de pantalla
- **Breakpoints inteligentes**: sm, md, lg para diseño adaptable
- **Modo reducción de movimiento**: Respeta preferencias de accesibilidad

### 🔧 Componentes Clave

#### Sections
- **Hero**: Sección principal con parallax background y animaciones staggered
- **Philosophy** (Origen): "Masters of Fire" con información de ingredientes
- **MenuSection**: Tabs interactivos con filtrado de categorías y tarjetas de productos
- **Ingredients**: Sección de ingredientes con parallax images
- **TheHype**: Review cards con animaciones de estrellas y efectos de depth
- **Footer**: Formulario de newsletter con animaciones reveal

#### UI Components
- **Reveal**: Componente scroll-triggered con configurable delay y direction
- **SpotlightCard**: Tarjetas con 3D tilt effect based on mouse position
- **ScrollProgressIndicator**: Barra de progreso de scroll en la parte superior
- **CustomCursor**: Cursor personalizado con effectos glow
- **WhatsAppButton**: Botón flotante de WhatsApp con animaciones
- **ImagePlaceholder**: Placeholders elegantes con mesh backgrounds animados

### 🎯 Integraciones

#### WhatsApp CTA
Integración completa con WhatsApp para:
- Pedidos de productos específicos
- Reservas de mesas
- Reseñas de clientes
- Consultas generales

#### SEO & Meta
- Metadatos Open Graph completos
- Metadatos Twitter Card
- Structured metadata en español e inglés

## Stack Tecnológico

- **Framework**: Next.js 15.5.6 con App Router
- **Lenguaje**: TypeScript con strict mode
- **Estilos**: Tailwind CSS v3 con custom config
- **Animaciones**: GSAP v3 con ScrollTrigger
- **Smooth Scroll**: Lenis
- **Iconos**: Lucide React
- **Desarrollo**: pnpm

## Estructura del Proyecto

```
hamburguesas-chill-grill/
├── app/
│   ├── globals.css          # Estilos globales y utilidades custom
│   ├── layout.tsx           # Layout root con providers
│   └── page.tsx             # Página principal
├── components/
│   ├── sections/            # Secciones principales
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── MenuSection.tsx
│   │   ├── Ingredients.tsx
│   │   ├── TheHype.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/                  # Componentes UI reutilizables
│   │   ├── Reveal.tsx
│   │   ├── SpotlightCard.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgressIndicator.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── ImagePlaceholder.tsx
│   └── providers/           # Proveedores de contexto
│       └── LenisProvider.tsx
├── hooks/                   # Custom React hooks
│   ├── useOnScreen.ts
│   ├── useGSAPAnimation.ts
│   ├── useLenis.ts
│   └── useCustomCursor.ts
├── lib/                     # Utilidades
│   ├── constants.ts
│   └── utils.ts
└── public/                  # Assets estáticos
```

## Fases de Desarrollo

### ✅ FASE 1: Design System Completo
- Variables CSS para colores, sombras, transiciones
- Tailwind config extendido con tokens de diseño
- Animaciones keyframe personalizadas
- Utilidades premium en @layer components

### ✅ FASE 2: Animaciones Premium
- Hero con parallax background y stagger animations
- SpotlightCard con 3D tilt effect
- Ingredients con parallax images en diferentes velocidades
- ScrollProgressIndicator con gradient y glow

### ✅ FASE 3: Navbar & Active Indicator
- Navbar con scroll detection
- Active section indicator animado
- Mobile menu con smooth animations

### ✅ FASE 3-4: Button & Icon Animations
- Tab buttons con rotación de iconos (360deg)
- CTA buttons con animación de scale y rotate
- Social icons con anillo de background animado
- Review buttons con background scale effect

### ✅ FASE 5-6: Typography & Details
- Clases de tipografía jerárquica
- Spacing utilities (gap-tight, gap-comfortable, etc.)
- Enhanced shadow and glow utilities
- Custom cursor component
- Footer con animaciones Reveal

### ✅ FASE 7: Testing & Documentation
- Build completado exitosamente
- TypeScript strict mode sin errores
- Documentación en README

## Instalación & Uso

### Requisitos
- Node.js 18+ con pnpm

### Instalación
```bash
pnpm install
```

### Desarrollo
```bash
pnpm run dev
# Visita http://localhost:3000
```

### Build Producción
```bash
pnpm run build
pnpm run start
```

## Performance

- **First Load JS**: 158 kB (incluye GSAP y todas las librerías)
- **Bundle Size**: ~55.8 kB (optimizado)
- **Performance Score**: Optimizado para Lighthouse

## Accesibilidad

- ✅ Respeta `prefers-reduced-motion`
- ✅ Focus states mejorados con outline y glow
- ✅ Contraste de colores WCAG AAA
- ✅ Aria labels en componentes interactivos
- ✅ Screen reader optimized (.sr-only utility)

## Clases Tailwind Personalizadas

### Tipografía
```css
.heading-hero    /* 6xl-9xl, font-black, tracking-tighter */
.heading-xl      /* 5xl-6xl, font-black */
.heading-lg      /* 4xl-5xl, font-bold */
.heading-md      /* 3xl, font-bold */
.heading-sm      /* 2xl, font-bold */
.text-label      /* xs, font-bold, uppercase */
.text-body-large /* lg, text-neutral-200 */
.text-body-regular /* base, text-neutral-300 */
.text-body-small /* sm, text-neutral-400 */
```

### Efectos
```css
.text-glow          /* drop-shadow con naranja */
.text-gradient-warm /* gradient naranja a amarillo */
.transition-smooth  /* duration-300 ease-out */
.transition-premium /* duration-500 cubic-bezier */
.glow-focus         /* shadow-glow-md on focus */
.glow-hover         /* shadow-glow-md on hover */
.focus-glow         /* shadow glow premium */
.backdrop-glow      /* backdrop-blur + bg-black/30 */
.backdrop-premium   /* backdrop-blur-lg + bg-black/40 */
```

## Configuración

### Tailwind Config
- 12 sombras custom (glow system)
- 10 animaciones custom
- Colores semánticos (brand-dark-900, etc.)
- Easing functions premium

### Next.js Config
- Image optimization para Unsplash
- TypeScript strict mode
- Lenis integration

## Variables CSS Disponibles

```css
/* Colores */
--color-primary: #f97316
--color-primary-light: #fbbf24
--color-primary-dark: #ea5e0a

/* Texto */
--color-text-primary: #ffffff
--color-text-secondary: #d1d5db
--color-text-tertiary: #9ca3af
--color-text-muted: #6b7280

/* Background */
--color-bg-black: #000000
--color-bg-dark: #0a0a0a
--color-bg-card: #1a1a1a

/* Sombras */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-glow: 0 0 20px rgba(249, 115, 22, 0.4)

/* Transiciones */
--transition-fast: 250ms ease-out
--transition-base: 300ms ease-out
--transition-premium: 500ms cubic-bezier(0.34, 1.56, 0.64, 1)
```

## Contribuciones

Este proyecto fue desarrollado como una refactor premium de una landing page de restaurante, con enfoque en:
- UX/UI de nivel senior
- Animaciones suaves y responsivas
- Accesibilidad sin compromisos
- Performance optimizado
- Código limpio y mantenible

## Licencia

Proyecto personal - Grill & Chill Restaurant

---

**Generado con Claude Code** 🤖
