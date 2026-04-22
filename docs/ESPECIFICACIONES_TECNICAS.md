# Especificaciones Técnicas - Rediseño Web ENERTED

**Plan de Implementación Día 1: Setup + Hero + Services Grid**

---

## Stack Tecnológico

- **Next.js**: v15.0+
- **TypeScript**: 5.x
- **Tailwind CSS**: v4
- **Framer Motion**: v10+
- **GA4**: next-gtag

---

## Estructura de Archivos

\`\`\`
enerted-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ServiceGrid.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   ├── constants.ts
│   └── analytics.ts
└── public/images/
\`\`\`

---

## Componentes a Desarrollar

### Header
- Logo + Nav links
- CTA "Cotizar"
- Hamburguesa móvil

### Hero Section
- 100vh desktop / 85vh mobile
- H1: "Energía, Automatización y Excelencia Industrial"
- 2 CTAs: [Explorar] [Contactar]
- Scroll indicator

### ServiceCard
- Height: 640px
- Background image + overlay
- Hover: Scale 1.05
- GA4 tracking

### ServiceGrid
- Desktop: 3 columnas
- Mobile: Fullscreen sections

### Footer
- Logo + links
- WhatsApp CTA

---

## Diseño Visual

### Colores
- Primary: #0066FF (azul)
- Dark: #1f2937
- White: #ffffff

### Tipografía
- Font: Arial
- H1: 56px desktop / 32px mobile

---

## GA4 Integration

\`\`\`typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
\`\`\`

---

## Checklist Día 1

- [ ] Setup Next.js project
- [ ] Install dependencies
- [ ] Create folder structure
- [ ] Header.tsx
- [ ] Hero.tsx
- [ ] ServiceCard.tsx
- [ ] ServiceGrid.tsx
- [ ] Footer.tsx
- [ ] WhatsAppButton.tsx
- [ ] globals.css
- [ ] GA4 setup
- [ ] Responsive tests
- [ ] Deploy a Vercel

Total: 8.5 horas

Última actualización: Abril 2026
END
