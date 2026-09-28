# Jardines Aurora — Landing Page Template

Template completo de landing page para una empresa de **jardinería y paisajismo**. Construido con **HTML5**, **Bootstrap 5 + Bootswatch (tema Minty)**, **JavaScript nativo** y **CSS personalizado**. Listo para usar: solo abre `index.html` en tu navegador.

## Stack técnico

- **HTML5** puro (MPA - Multi Page Application, sin frameworks JS)
- **Bootstrap 5.3.3** + **Bootswatch 5.3.3 (tema Minty)** vía CDN
- **Bootstrap Icons 1.11.3** vía CDN
- **JavaScript** nativo (vanilla)
- **Google Fonts**: `Playfair Display` (títulos) + `Poppins` (texto)
- Imágenes vía URLs de **Unsplash** (sin dependencias locales)
- 100% responsive (mobile-first)

## Identidad de marca

- **Negocio ficticio**: Jardines Aurora SpA
- **Eslogan**: *Donde la naturaleza despierta*
- **Localización**: Santiago, Chile · moneda CLP · teléfonos +56
- **Tema visual**: Bootswatch Minty (verde fresco) + refinamientos propios

## Estructura del proyecto

```
jardineria-02/
├── index.html              # Inicio (hero + 4 servicios + 4 stats + valores + preview nosotros + testimonios + CTA)
├── sobre-nosotros.html     # Historia + Misión/Visión/Valores + Timeline 5 hitos + Equipo 4 personas
├── servicios.html          # 8 servicios con modal + proceso 4 pasos + valores
├── galeria.html            # 12 proyectos con filtros + lightbox modal
├── precios.html            # 3 planes mensuales + lista detallada + FAQ
├── contacto.html           # Banner WhatsApp + formulario + info + mapa Google + FAQ
├── privacidad.html         # Política de privacidad (TOC sticky lateral + 11 secciones)
├── terminos.html           # Términos y condiciones (TOC sticky lateral + 12 secciones)
├── README.md
│
└── assets/
    ├── css/
    │   └── styles.css      # Refinamientos sobre Minty (hero, navbar, animaciones, cards, modales)
    └── js/
        ├── data.js         # ⭐ Todos los datos mockeados (negocio, servicios, equipo, galería…)
        └── main.js         # Interacciones: navbar, animaciones, contadores, formulario, lightbox
```

## Páginas incluidas

| Página | Contenido |
| ------ | --------- |
| **Inicio** | Hero con badges flotantes, 4 servicios destacados, 4 stats animadas, 4 valores, preview nosotros, carrusel 3 testimonios, CTA banner |
| **Sobre nosotros** | Historia de la empresa, Misión/Visión/Valores, Timeline alternado de 5 hitos, Equipo (4 personas), CTA |
| **Servicios** | Grid de 8 servicios con modal Bootstrap, Proceso de 4 pasos, 4 valores diferenciales, CTA |
| **Galería** | Filtros por categoría (6), 12 proyectos con hover overlay, Lightbox modal con teclado (← → ESC) |
| **Precios** | 3 planes mensuales (con destacado), Lista detallada en 4 categorías, FAQ acordeón, CTA |
| **Contacto** | Banner WhatsApp, Formulario con validación Bootstrap, Card lateral con info + horarios, Mapa Google Maps, FAQ |
| **Privacidad** | Layout 2 columnas (TOC sticky + contenido), 11 secciones, última actualización destacada |
| **Términos** | Layout 2 columnas (TOC sticky + contenido), 12 secciones, plazos y garantías detalladas |

## Cómo usar

### Visualización local

1. Descarga o clona este repositorio.
2. Abre `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
3. ¡Listo! No requiere build step, instalación ni servidor.

```bash
# Opcional: servir con un servidor local (recomendado para ver el mapa y Google Fonts)
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Luego abre `http://localhost:8000`.

### Personalización rápida

Toda la información del negocio está centralizada en **`assets/js/data.js`**. Edita ese único archivo para cambiar:

- Nombre del negocio, teléfono, email, dirección
- Lista de servicios y precios
- Equipo (jardineros, paisajistas)
- Galería de proyectos (sustituye las URLs de Unsplash por las tuyas)
- Categorías de galería
- Planes mensuales
- Lista de precios detallada
- Horarios de atención
- Testimonios
- Preguntas frecuentes
- Estadísticas
- Historia / línea de tiempo

Ejemplo:

```js
const NEGOCIO = {
  nombre: 'Tu Negocio de Jardinería',
  telefono: '+56 2 2222 3333',
  email: 'contacto@tuempresa.cl',
  direccion: 'Tu Dirección 123, Santiago',
  // ...
};
```

### Cambiar tema de Bootswatch

Si quieres usar otro tema de Bootswatch, reemplaza en todos los HTML esta línea:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/minty/bootstrap.min.css" />
```

Por el tema que prefieras. Temas recomendados para esta plantilla:

- `minty` (verde suave — actual)
- `sandstone` (tonos cálidos tierra)
- `lux` (elegante dorado sobre navy)
- `zephyr` (claro, limpio)

Lista completa disponible en [bootswatch.com](https://bootswatch.com/).

### Personalizar colores y detalles

Edita las CSS variables en **`assets/css/styles.css`** dentro del bloque `:root`:

```css
:root {
  --aurora-500: #22c55e;  /* Color principal (verde) */
  --aurora-600: #16a34a;  /* Hover */
  --aurora-700: #15803d;  /* Títulos */
  --sun-500:   #f59e0b;   /* Acento dorado */
  --earth-500: #8b6f47;   /* Tierra */
}
```

Los cambios se propagarán automáticamente a los componentes que las usen.

## Funcionalidades JS

- ✅ Navbar fija con efecto shrink al hacer scroll
- ✅ Menú hamburguesa en móvil con cierre automático al click
- ✅ Resaltado automático del enlace activo según URL actual
- ✅ Animaciones on-scroll (fade-up, fade-left, fade-right) vía IntersectionObserver
- ✅ Contadores animados (easing cubic)
- ✅ Carrusel de testimonios Bootstrap
- ✅ Modal de detalle por servicio (Bootstrap)
- ✅ Lightbox para galería (← → ESC)
- ✅ Filtros dinámicos por categoría (galería)
- ✅ FAQ acordeón Bootstrap con item activo resaltado
- ✅ Validación de formularios HTML5 + Bootstrap
- ✅ Formulario con spinner "Enviando..." + modal de éxito
- ✅ Date picker con fecha mínima = hoy
- ✅ Smooth scroll para anchors
- ✅ TOC sticky con scrollspy (páginas legales)
- ✅ Botón scroll-to-top
- ✅ Botón flotante de WhatsApp con animación pulse
- ✅ Render dinámico de EQUIPO, HISTORIA, VALORES, PROCESO, PLANES, PRECIOS_TABLA, FAQ
- ✅ Reveal animations con delays escalonados

## Datos mockeados

El template viene con datos realistas para **Jardines Aurora SpA** en Santiago, Chile:

- **8 servicios** con precios en CLP ($9.500 a $380.000+)
- **4 personas** en el equipo (paisajistas, técnicos, diseñador 3D, agrónomo)
- **3 testimonios** de comunas reales (Providencia, Ñuñoa, Las Condes)
- **3 planes mensuales** ($79.000, $149.000, $325.000 CLP)
- **12 proyectos** en galería (5 categorías: diseño, mantención, poda, huertos, iluminación)
- **5 hitos** históricos (2018 — 2026)
- **6 preguntas** frecuentes
- **4 estadísticas** (480+, 14, 1850+, 98%)

Todos los precios están en **CLP** y los teléfonos en formato **+56** para Chile.

## Compatibilidad

- ✅ Chrome / Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Móvil (iOS Safari, Chrome Android)
- ⚠️ IE11 no soportado

## Diferencias con `jardineria-01`

| Aspecto | jardineria-01 | jardineria-02 |
|---|---|---|
| **Tema Bootstrap** | Bootstrap 5.3.3 + tema personalizado | **Bootswatch Minty 5.3.3** |
| **Identidad** | Verde Vita | Jardines Aurora |
| **Tipografías** | Playfair + Poppins | Playfair + Poppins (igual) |
| **Paleta** | Verde hoja + tierra + amarillo solar | Verde Minty (oficial) + dorado |
| **Estilo** | Diseño propio detallado | Refinamiento más ligero sobre Minty |
| **Páginas** | 8 | 8 (mismas) |

## Licencia

Template de demostración. Imágenes vía Unsplash (uso libre). Bootstrap y Bootswatch vía CDN (MIT License). Bootstrap Icons (MIT License). Google Fonts (Open Font License).

---

**Hecho con** 🌱 **y muchas plantas**
