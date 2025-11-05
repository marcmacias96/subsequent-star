# Style Guide - Cedar Group
**Extraído de:** https://cedar-fluid-demo-es.squarespace.com/

---

## 🎨 Paleta de Colores

### Colores Base
```css
/* Esquema minimalista con neutros */
--color-background: #FFFFFF;        /* Fondo principal blanco/claro */
--color-text-primary: #000000;      /* Texto principal negro */
--color-text-secondary: #666666;    /* Texto secundario gris */
--color-neutral-light: #F5F5F5;     /* Fondos sutiles */
--color-neutral-dark: #333333;      /* Elementos oscuros */
```

### Colores de Acento
```css
/* Los colores de acento se usan para CTAs y elementos destacados */
--color-accent: [Por definir según branding]
--color-accent-hover: [Por definir según branding]
```

### Características
- **Estilo:** Minimalista, sofisticado, corporativo
- **Enfoque:** Neutros que permiten que el contenido y las imágenes destaquen
- **Contraste:** Alto contraste para legibilidad profesional

---

## ✍️ Tipografía

### Familias de Fuentes
```css
--font-family-primary: sans-serif; /* Moderna y limpia */
--font-family-headings: sans-serif; /* Bold para títulos */
```

### Escala Tipográfica
```css
/* Hero/Display */
--font-size-hero: 4rem;           /* 64px - Títulos principales */
--font-weight-hero: 700;          /* Bold */

/* Headings */
--font-size-h1: 3rem;             /* 48px */
--font-size-h2: 2.5rem;           /* 40px */
--font-size-h3: 2rem;             /* 32px */
--font-size-h4: 1.5rem;           /* 24px */

/* Body */
--font-size-body: 1rem;           /* 16px */
--font-size-small: 0.875rem;      /* 14px */

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

### Jerarquía de Texto
- **Headlines:** Bold, sans-serif, grandes y prominentes
- **Subheadings:** Medium weight, clara jerarquía visual
- **Body text:** Regular weight, espaciado generoso
- **Ejemplo del sitio:** "¡HOLA! SOMOS CEDAR GROUP"

---

## 📐 Espaciado

### Sistema de Espaciado
```css
/* Basado en sistema de 8px */
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

### Valores Específicos del Sitio
```css
/* Grid System */
--grid-gap: 11px;                 /* Gap entre columnas y filas */
--mobile-gutter: 6vw;             /* Márgenes laterales mobile */
--desktop-gutter: 4vw;            /* Márgenes laterales desktop */

/* Secciones */
--section-padding: 3%;            /* Padding vertical de secciones */
--row-scaling: 2.15%;            /* Escalado de filas */
```

### Filosofía de Espaciado
- **Generoso y amplio:** "Breathing space" para elegancia
- **Consistente:** Uso de sistema de múltiplos de 8
- **Responsivo:** Ajustes fluidos entre mobile y desktop

---

## 📱 Layout y Grid System

### Grid Responsivo
```css
/* Mobile First */
--grid-columns-mobile: 8;
--grid-columns-desktop: 24;

/* Container */
--max-width: 1500px;
--container-padding: var(--desktop-gutter);

/* Breakpoints */
--breakpoint-mobile: 768px;
```

### Estructura de Grid
```html
<!-- Ejemplo de uso en Tailwind -->
<div class="grid grid-cols-8 lg:grid-cols-24 gap-[11px]">
  <!-- Contenido -->
</div>
```

### Características del Layout
- Sistema de grid fluido de Squarespace
- Posicionamiento dinámico de elementos
- Max-width contenida para legibilidad
- Diseño adaptativo completo

---

## 🧩 Componentes UI

### Botones

#### Botón Primario
```css
/* Estilo CTA principal */
.btn-primary {
  /* Rectangulares minimalistas */
  padding: 1rem 2rem;
  border-radius: 0px;              /* Sin bordes redondeados */
  background-color: var(--color-accent);
  color: white;
  font-weight: 600;
  text-transform: uppercase;       /* "COMENZAR" */
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-2px);
}
```

#### Botón Secundario
```css
.btn-secondary {
  padding: 1rem 2rem;
  border: 2px solid currentColor;
  background-color: transparent;
  color: var(--color-text-primary);
  font-weight: 600;
  text-transform: uppercase;       /* "MÁS INFORMACIÓN" */
}
```

### Cards/Bloques
```css
.card {
  /* Limpio y minimalista */
  background: white;
  padding: var(--spacing-xl);
  /* Sin sombras prominentes */
  transition: transform 0.3s ease;
}
```

### Navegación
```css
.header {
  /* Enlaces: Servicios, Acerca de, Blog, Empezar */
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--desktop-gutter);
}

/* Mobile: Menú hamburguesa */
@media (max-width: 768px) {
  .nav-menu {
    display: none; /* Toggle con hamburguesa */
  }
}
```

### Footer
```css
.footer {
  /* Multi-columna */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  padding: var(--spacing-3xl) var(--desktop-gutter);
}
```

---

## ✨ Animaciones y Efectos

### Marquesina Animada
```css
.marquee {
  /* Texto deslizante: "Creativos · Equitativos · Progresivos" */
  animation: marquee-scroll 20s linear infinite;
  font-size: 8rem;              /* Grande y bold */
  white-space: nowrap;
}

.marquee:hover {
  animation-play-state: paused;  /* Pausa al hover */
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

### Transiciones
```css
/* Suaves y profesionales */
--transition-default: all 0.3s ease;
--transition-slow: all 0.5s ease;

/* Loading de fuentes */
@keyframes fonts-loading {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

### Efectos Visuales
```css
/* Sin sombras prominentes */
--box-shadow-subtle: none;

/* Sin bordes redondeados */
--border-radius: 0px;

/* Blend modes */
--blend-mode: normal;
```

---

## 🎯 Principios de Diseño

### 1. Minimalismo Corporativo
- Limpio, profesional, sofisticado
- Enfoque en contenido sobre decoración
- Espacios en blanco generosos

### 2. Jerarquía Visual Clara
- Tipografía bold para headlines
- Contraste alto para legibilidad
- Estructura de información clara

### 3. Diseño Fluido y Responsivo
- Mobile-first approach
- Grid adaptativo (8 → 24 columnas)
- Espaciado proporcional (vw units)

### 4. Movimiento Sutil
- Animaciones suaves y profesionales
- Interacciones intuitivas (hover, pause)
- Performance optimizado

### 5. Accesibilidad
- Alto contraste de colores
- Tamaños de fuente legibles
- Navegación clara

---

## 🛠️ Implementación en Tailwind

### Configuración Sugerida para `tailwind.config.mjs`

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#your-accent-color',
        background: '#FFFFFF',
        'neutral-light': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Your-Sans-Font', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': '4rem',
        'display': '3rem',
      },
      spacing: {
        'mobile-gutter': '6vw',
        'desktop-gutter': '4vw',
      },
      maxWidth: {
        'container': '1500px',
      },
      gridTemplateColumns: {
        'mobile': 'repeat(8, 1fr)',
        'desktop': 'repeat(24, 1fr)',
      },
      gap: {
        'grid': '11px',
      },
    },
  },
}
```

---

## 📝 Notas de Implementación

### Hero Section
```html
<section class="py-16 lg:py-24">
  <h1 class="text-hero font-bold uppercase">
    ¡HOLA! SOMOS CEDAR GROUP
  </h1>
  <p class="text-xl mt-4">
    No te preocupes por sonar profesional.
  </p>
  <button class="btn-primary mt-8">COMENZAR</button>
</section>
```

### Marquee Component
```html
<div class="marquee-container overflow-hidden">
  <div class="marquee text-8xl font-bold">
    Creativos · Equitativos · Progresivos · Creativos · Equitativos · Progresivos
  </div>
</div>
```

### Grid Layout
```html
<div class="grid grid-cols-mobile lg:grid-cols-desktop gap-grid px-mobile-gutter lg:px-desktop-gutter">
  <!-- Contenido -->
</div>
```

---

## 🔗 Referencias

- **Sitio original:** https://cedar-fluid-demo-es.squarespace.com/
- **Template:** Squarespace Fluid Engine
- **Estilo:** Minimalista corporativo, financiero profesional
- **Keywords de diseño:** Creativos, Equitativos, Progresivos

---

**Última actualización:** 2025-11-04
**Extraído por:** Claude Code
