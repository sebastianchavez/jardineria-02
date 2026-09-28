/* ============================================================
   Mock data — Jardines Aurora
   ============================================================ */

const NEGOCIO = {
  nombre: 'Jardines Aurora',
  eslogan: 'Donde la naturaleza despierta',
  telefono: '+56 2 2345 6789',
  whatsapp: '+56 9 8765 1234',
  whatsappLink: 'https://wa.me/56987651234',
  email: 'contacto@jardinesaurora.cl',
  direccion: 'Av. Providencia 1245, Of. 602, Providencia, Santiago, Chile',
  horarios: [
    { dias: 'Lunes a Viernes', horas: '08:00 — 18:30' },
    { dias: 'Sábado', horas: '09:00 — 14:00' },
    { dias: 'Domingo', horas: 'Cerrado (sólo emergencias)' }
  ],
  redes: {
    facebook: 'https://facebook.com/jardinesaurora',
    instagram: 'https://instagram.com/jardinesaurora',
    tiktok: 'https://tiktok.com/@jardinesaurora',
    whatsapp: 'https://wa.me/56987651234'
  },
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.87654321!2d-70.6324!3d-33.4253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a0a0a0a0a0%3A0x0!2sProvidencia%2C%20Santiago!5e0!3m2!1ses-419!2scl!4v1700000000000'
};

/* ---------- Servicios ---------- */
const SERVICIOS = [
  {
    id: 'diseno-paisajistico',
    nombre: 'Diseño Paisajístico',
    descripcion: 'Creamos propuestas únicas con planos en 3D, selección de especies adaptadas al clima y diseño estético que armoniza con tu hogar y estilo de vida.',
    descripcionCorta: 'Diseño personalizado con planos 3D.',
    icono: 'bi-flower3',
    imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    precioDesde: 380000,
    destacado: true
  },
  {
    id: 'mantencion-mensual',
    nombre: 'Mantención Mensual',
    descripcion: 'Servicio recurrente que incluye corte de césped, poda ornamental, fertilización, fumigación preventiva y limpieza general del jardín.',
    descripcionCorta: 'Cuidado integral mensual.',
    icono: 'bi-droplet-half',
    imagen: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    precioDesde: 79000,
    destacado: true
  },
  {
    id: 'poda-tala',
    nombre: 'Poda y Tala',
    descripcion: 'Poda técnica de árboles y arbustos, tala controlada con equipo certificado y retiro completo de residuos verdes.',
    descripcionCorta: 'Poda técnica y tala controlada.',
    icono: 'bi-scissors',
    imagen: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
    precioDesde: 49000
  },
  {
    id: 'riego-automatico',
    nombre: 'Riego Automático',
    descripcion: 'Diseño e instalación de sistemas de riego tecnificado con aspersores, goteo por zona y control inteligente desde tu smartphone.',
    descripcionCorta: 'Riego automatizado e inteligente.',
    icono: 'bi-moisture',
    imagen: 'https://images.unsplash.com/photo-1572450043130-7dc6c5b6c0c8?w=800&q=80',
    precioDesde: 295000
  },
  {
    id: 'cesped-siembra',
    nombre: 'Césped y Siembra',
    descripcion: 'Preparación profesional del suelo, siembra de césped natural o instalación de pasto en rollo con garantía de 6 meses.',
    descripcionCorta: 'Siembra e instalación de césped.',
    icono: 'bi-grid-3x3-gap',
    imagen: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
    precioDesde: 9500
  },
  {
    id: 'huerto-organico',
    nombre: 'Huerto Orgánico',
    descripcion: 'Diseño y construcción de huertos urbanos y orgánicos para cultivar tus propias verduras, hierbas y frutas en casa.',
    descripcionCorta: 'Huertos urbanos y orgánicos.',
    icono: 'bi-basket-fill',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    precioDesde: 185000
  },
  {
    id: 'iluminacion',
    nombre: 'Iluminación de Jardín',
    descripcion: 'Diseño e instalación de iluminación LED de bajo consumo que realza la belleza nocturna de tu jardín y mejora la seguridad.',
    descripcionCorta: 'Iluminación LED paisajística.',
    icono: 'bi-lightbulb-fill',
    imagen: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
    precioDesde: 145000
  },
  {
    id: 'control-plagas',
    nombre: 'Control de Plagas',
    descripcion: 'Diagnóstico y tratamiento ecológico de plagas y enfermedades, usando productos biodegradables que cuidan a tus mascotas y familia.',
    descripcionCorta: 'Control ecológico de plagas.',
    icono: 'bi-shield-fill-check',
    imagen: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=800&q=80',
    precioDesde: 35000
  }
];

/* ---------- Equipo ---------- */
const EQUIPO = [
  {
    nombre: 'Camila Soto',
    cargo: 'Fundadora · Paisajista',
    especialidad: 'Diseño y planificación de espacios verdes',
    bio: '8 años creando jardines únicos en la región metropolitana. Apasionada por el paisajismo sostenible.',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
  },
  {
    nombre: 'Matías Rojas',
    cargo: 'Jefe Técnico',
    especialidad: 'Poda, tala y sistemas de riego',
    bio: 'Técnico agrícola con certificación internacional. Especialista en manejo fitosanitario.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
  },
  {
    nombre: 'Francisca Pérez',
    cargo: 'Diseñadora 3D',
    especialidad: 'Renders y visualización de proyectos',
    bio: 'Arquitecta especializada en modelado paisajístico. Te muestra tu jardín antes de construirlo.',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  },
  {
    nombre: 'Diego Henríquez',
    cargo: 'Especialista en Huertos',
    especialidad: 'Agricultura urbana y orgánica',
    bio: 'Ingeniero agrónomo. Te enseña a cosechar tus propios alimentos en casa, sin químicos.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  }
];

/* ---------- Testimonios ---------- */
const TESTIMONIOS = [
  {
    nombre: 'Carolina Méndez',
    comuna: 'Providencia',
    texto: 'Aurora transformó por completo nuestro patio trasero. El diseño 3D nos permitió ver el resultado antes de comenzar, y el equipo fue increíblemente profesional durante todo el proceso.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
  },
  {
    nombre: 'Andrés Villalobos',
    comuna: 'Ñuñoa',
    texto: 'Contratamos el plan de mantención mensual y nuestro jardín nunca se había visto tan hermoso. Son puntuales, cuidadosos y se nota que aman lo que hacen.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80'
  },
  {
    nombre: 'Lorena Tapia',
    comuna: 'Las Condes',
    texto: 'El sistema de riego automático que nos instalaron ha sido un cambio total. Ahorramos agua, tiempo y el jardín se mantiene perfecto incluso cuando salimos de vacaciones.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80'
  }
];

/* ---------- Planes mensuales ---------- */
const PLANES = [
  {
    nombre: 'Esencial',
    precio: 79000,
    periodo: 'mes',
    destacado: false,
    color: 'outline-primary',
    incluye: [
      '1 visita mensual de 2 horas',
      'Corte y bordeado de césped',
      'Riego manual programado',
      'Limpieza general del área',
      'Reporte digital mensual'
    ]
  },
  {
    nombre: 'Integral',
    precio: 149000,
    periodo: 'mes',
    destacado: true,
    color: 'primary',
    incluye: [
      '2 visitas mensuales de 3 horas',
      'Corte, poda y fertilización',
      'Control preventivo de plagas',
      'Mantenimiento del sistema de riego',
      'Asesoría telefónica prioritaria',
      'Reporte digital con fotos'
    ]
  },
  {
    nombre: 'Premium',
    precio: 325000,
    periodo: 'mes',
    destacado: false,
    color: 'outline-primary',
    incluye: [
      '4 visitas mensuales sin límite',
      'Diseño estacional actualizado',
      'Poda técnica especializada',
      'Tratamiento fitosanitario completo',
      'Iluminación y mantenimiento',
      'Cobertura emergencias 24/7',
      'Reporte ejecutivo mensual'
    ]
  }
];

/* ---------- Lista detallada de precios (para tabla) ---------- */
const PRECIOS_TABLA = [
  {
    categoria: 'Mantención',
    items: [
      { nombre: 'Visita única (por hora)', precio: '$ 18.500 CLP' },
      { nombre: 'Corte de césped (≤ 200 m²)', precio: '$ 25.000 CLP' },
      { nombre: 'Corte de césped (> 200 m²)', precio: '$ 42.000 CLP' },
      { nombre: 'Fertilización completa', precio: '$ 38.000 CLP' }
    ]
  },
  {
    categoria: 'Poda y Tala',
    items: [
      { nombre: 'Poda de arbustos (por unidad)', precio: '$ 12.000 CLP' },
      { nombre: 'Poda de árbol mediano', precio: '$ 49.000 CLP' },
      { nombre: 'Tala controlada', precio: 'Desde $ 85.000 CLP' },
      { nombre: 'Retiro de residuos verdes', precio: '$ 32.000 CLP' }
    ]
  },
  {
    categoria: 'Diseño e Instalación',
    items: [
      { nombre: 'Diseño paisajístico 3D', precio: 'Desde $ 380.000 CLP' },
      { nombre: 'Riego automático (básico)', precio: '$ 295.000 CLP' },
      { nombre: 'Iluminación LED jardín', precio: 'Desde $ 145.000 CLP' },
      { nombre: 'Huerto orgánico 4×2 m', precio: '$ 185.000 CLP' }
    ]
  },
  {
    categoria: 'Servicios Extra',
    items: [
      { nombre: 'Control ecológico plagas', precio: '$ 35.000 CLP' },
      { nombre: 'Análisis de suelo', precio: '$ 28.000 CLP' },
      { nombre: 'Asesoría técnica presencial', precio: '$ 45.000 CLP' },
      { nombre: 'Visita de emergencia', precio: '$ 65.000 CLP' }
    ]
  }
];

/* ---------- Galería / Proyectos ---------- */
const PROYECTOS = [
  {
    id: 1,
    titulo: 'Jardín Mediterráneo',
    categoria: 'diseno',
    descripcion: 'Diseño completo con lavandas, olivos y piedra natural.',
    imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80'
  },
  {
    id: 2,
    titulo: 'Huerto Urbano Familiar',
    categoria: 'huerto',
    descripcion: 'Huerto orgánico de 12 m² con sistema de compostaje.',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80'
  },
  {
    id: 3,
    titulo: 'Iluminación Nocturna',
    categoria: 'iluminacion',
    descripcion: 'Instalación de 24 focos LED con control domótico.',
    imagen: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80'
  },
  {
    id: 4,
    titulo: 'Mantención Residencial',
    categoria: 'mantencion',
    descripcion: 'Cuidado mensual durante 2 años en Las Condes.',
    imagen: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=80'
  },
  {
    id: 5,
    titulo: 'Poda de Palmeras',
    categoria: 'poda',
    descripcion: 'Poda técnica de 8 palmeras adultas en edificio corporativo.',
    imagen: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=900&q=80'
  },
  {
    id: 6,
    titulo: 'Césped en Rollos',
    categoria: 'diseno',
    descripcion: 'Instalación de 250 m² de pasto en rollo con garantía.',
    imagen: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900&q=80'
  },
  {
    id: 7,
    titulo: 'Riego Inteligente',
    categoria: 'diseno',
    descripcion: 'Sistema automatizado con sensores de humedad.',
    imagen: 'https://images.unsplash.com/photo-1572450043130-7dc6c5b6c0c8?w=900&q=80'
  },
  {
    id: 8,
    titulo: 'Jardín Zen Minimalista',
    categoria: 'diseno',
    descripcion: 'Diseño japonés con bambú, piedras y agua.',
    imagen: 'https://images.unsplash.com/photo-1558693168-c370615b54e0?w=900&q=80'
  },
  {
    id: 9,
    titulo: 'Huerto en Azotea',
    categoria: 'huerto',
    descripcion: 'Cultivo urbano con sistema hidropónico.',
    imagen: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&q=80'
  },
  {
    id: 10,
    titulo: 'Sendero con Iluminación',
    categoria: 'iluminacion',
    descripcion: 'Camino empedrado con luces solares empotradas.',
    imagen: 'https://images.unsplash.com/photo-1572731962390-bb9a8a8f8f80?w=900&q=80'
  },
  {
    id: 11,
    titulo: 'Mantención Comercial',
    categoria: 'mantencion',
    descripcion: 'Plan corporativo mensual para 3 edificios de oficinas.',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80'
  },
  {
    id: 12,
    titulo: 'Poda de Arbustos Ornamentales',
    categoria: 'poda',
    descripcion: 'Poda artística de setos y topiarios.',
    imagen: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&q=80'
  }
];

/* ---------- Categorías galería ---------- */
const CATEGORIAS = [
  { id: 'todos', nombre: 'Todos', icono: 'bi-grid-fill' },
  { id: 'diseno', nombre: 'Diseño', icono: 'bi-flower3' },
  { id: 'mantencion', nombre: 'Mantención', icono: 'bi-droplet-half' },
  { id: 'poda', nombre: 'Poda', icono: 'bi-scissors' },
  { id: 'huerto', nombre: 'Huertos', icono: 'bi-basket-fill' },
  { id: 'iluminacion', nombre: 'Iluminación', icono: 'bi-lightbulb-fill' }
];

/* ---------- Valores ---------- */
const VALORES = [
  {
    icono: 'bi-leaf-fill',
    titulo: 'Sostenibilidad Real',
    descripcion: 'Productos 100% orgánicos, compostaje propio y especies nativas que cuidan el agua.'
  },
  {
    icono: 'bi-people-fill',
    titulo: 'Equipo Certificado',
    descripcion: 'Técnicos agrícolas, paisajistas y diseñadores con capacitación continua.'
  },
  {
    icono: 'bi-award-fill',
    titulo: 'Garantía Concreta',
    descripcion: 'Hasta 12 meses de garantía escrita en todos nuestros trabajos.'
  },
  {
    icono: 'bi-heart-fill',
    titulo: 'Pasión por el Detalle',
    descripcion: 'Cada jardín es único. Diseñamos a medida, sin plantillas ni atajos.'
  }
];

/* ---------- Proceso de trabajo ---------- */
const PROCESO = [
  {
    paso: '01',
    icono: 'bi-chat-square-text-fill',
    titulo: 'Conversamos',
    descripcion: 'Visita gratuita donde conocemos tu espacio, ideas y presupuesto. Sin compromiso.'
  },
  {
    paso: '02',
    icono: 'bi-pencil-square',
    titulo: 'Diseñamos',
    descripcion: 'Creamos una propuesta 3D personalizada con plantas, materiales y costos detallados.'
  },
  {
    paso: '03',
    icono: 'bi-tools',
    titulo: 'Construimos',
    descripcion: 'Equipo profesional ejecuta el proyecto con materiales premium y limpieza total.'
  },
  {
    paso: '04',
    icono: 'bi-stars',
    titulo: 'Cuidamos',
    descripcion: 'Mantenciones periódicas para que tu jardín se mantenga hermoso todo el año.'
  }
];

/* ---------- Historia / Timeline ---------- */
const HISTORIA = [
  {
    año: '2018',
    titulo: 'El sueño comienza',
    descripcion: 'Camila Soto funda Jardines Aurora con una motoguadaña y mucha pasión. Sus primeros clientes son amigos y vecinos de Providencia.'
  },
  {
    año: '2020',
    titulo: 'Primer equipo',
    descripcion: 'Se suma Matías como jefe técnico. La empresa crece a 4 personas y obtiene su primer contrato comercial.'
  },
  {
    año: '2022',
    titulo: 'Diseño 3D propio',
    descripcion: 'Incorporamos renders 3D hiperrealistas. Nuestros clientes pueden ver su jardín antes de comenzar la obra.'
  },
  {
    año: '2024',
    titulo: 'Certificación ecológica',
    descripcion: 'Recibimos la certificación de empresa B por nuestras prácticas 100% sostenibles y comercio justo.'
  },
  {
    año: '2026',
    titulo: 'Cobertura regional',
    descripcion: 'Hoy somos un equipo de 14 profesionales atendiendo a más de 480 clientes en toda la Región Metropolitana.'
  }
];

/* ---------- Estadísticas ---------- */
const ESTADISTICAS = [
  { numero: 480, sufijo: '+', etiqueta: 'Clientes activos' },
  { numero: 14,  sufijo: '',  etiqueta: 'Profesionales' },
  { numero: 1850, sufijo: '+', etiqueta: 'Proyectos entregados' },
  { numero: 98,  sufijo: '%', etiqueta: 'Satisfacción' }
];

/* ---------- Preguntas frecuentes ---------- */
const FAQ = [
  {
    pregunta: '¿Realizan visitas a domicilio sin compromiso?',
    respuesta: 'Sí, ofrecemos una visita técnica gratuita en toda la Región Metropolitana para conocer tu espacio, evaluar las condiciones del suelo, iluminación y entorno. Después te enviamos una cotización formal sin compromiso en menos de 48 horas hábiles.'
  },
  {
    pregunta: '¿Cuál es el tiempo promedio de un diseño paisajístico?',
    respuesta: 'Desde la visita inicial hasta la entrega del proyecto 3D final, el proceso toma entre 7 y 15 días hábiles, dependiendo de la complejidad del espacio y la cantidad de reuniones de ajustes. La ejecución posterior varía entre 1 semana (mantención) y 2 meses (diseño completo).'
  },
  {
    pregunta: '¿Qué incluye la garantía de sus trabajos?',
    respuesta: 'Todos nuestros trabajos cuentan con garantía escrita: 6 meses para céspedes, 12 meses para instalaciones de riego y diseño paisajístico, y 3 meses para podas técnicas. Si algo no funciona como prometimos, lo resolvemos sin costo adicional.'
  },
  {
    pregunta: '¿Trabajan con mascotas y niños?',
    respuesta: 'Por supuesto. Usamos exclusivamente productos biodegradables, libres de tóxicos y certificados pet-friendly. Antes de cualquier fumigación o fertilización, acordamos los tiempos de seguridad para que tu familia pueda volver al jardín con total tranquilidad.'
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos transferencia bancaria, tarjetas de crédito y débito, Webpay y Mercado Pago. Para proyectos superiores a $500.000 CLP ofrecemos financiamiento en hasta 12 cuotas sin interés con tarjetas participantes.'
  },
  {
    pregunta: '¿Atienden emergencias fuera de horario?',
    respuesta: 'Sí. El plan Premium incluye cobertura 24/7 para emergencias como caída de árboles, obstrucción de sistemas de riego o plagas agudas. Para clientes de otros planes, atendemos urgencias con un recargo según horario, disponible llamando a nuestro teléfono fijo.'
  }
];
