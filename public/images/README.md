# 📁 Estructura de Imágenes - GRILL & CHILL

## Organización de carpetas

```
images/
├── hero/
│   └── [Imágenes para sección Hero]
│       Ej: hero-bg.jpg, hero-pattern.jpg
│
├── menu/
│   ├── hamburguesas/
│   │   └── [Imágenes de hamburguesas]
│   │       Ej: og-grill.jpg, truffle-maker.jpg, spicy-inferno.jpg, crispy-chick.jpg
│   │
│   ├── hotdogs/
│   │   └── [Imágenes de hot dogs]
│   │       Ej: beast-dog.jpg, chili-cheese.jpg, nyc-style.jpg, avocado-dog.jpg
│   │
│   ├── papas/
│   │   └── [Imágenes de papas/fritas]
│   │       Ej: truffle-parm.jpg, loaded-fries.jpg, cajun-spiral.jpg, sweet-potato.jpg
│   │
│   ├── alitas/
│   │   └── [Imágenes de alitas]
│   │       Ej: buffalo-soldier.jpg, bbq-bourbon.jpg, mango-habanero.jpg, garlic-parm.jpg
│   │
│   └── bebidas/
│       └── [Imágenes de bebidas]
│           Ej: craft-cola.jpg, mint-lemonade.jpg, vanilla-sky.jpg, ipa-draft.jpg
│
├── philosophy/
│   └── [Imágenes para sección Philosophy/Origen]
│       Ej: chef.jpg, fire.jpg, kitchen.jpg
│
├── ingredients/
│   └── [Imágenes de ingredientes]
│       Ej: meat.jpg, bread.jpg, cheese.jpg
│
└── sections/
    └── [Imágenes generales de secciones]
        Ej: hype-section.jpg, footer-bg.jpg
```

## Especificaciones recomendadas

- **Formato**: JPG (fotos de comida) o PNG (gráficos/iconos)
- **Tamaño máximo**: 2-3 MB por imagen
- **Resolución**: Mínimo 1200px de ancho para fotos de comida
- **Optimización**: Usar herramientas como TinyPNG o Squoosh antes de subir

## Uso en componentes

```tsx
import Image from "next/image";

// Ejemplo
<Image
  src="/images/menu/hamburguesas/og-grill.jpg"
  alt="THE O.G. GRILL"
  width={400}
  height={300}
  quality={85}
/>
```

---

**Nota**: Las imágenes en `public/` son servidas estáticamente desde la raíz del servidor.
