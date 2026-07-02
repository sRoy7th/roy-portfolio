# Portafolio — Rogelio Armas Roldán

Sitio personal (una sola página, bilingüe ES/EN) que muestra mi trabajo construyendo
y operando **aplicaciones de IA en producción**: gateways multi-proveedor, RAG con
gobierno de datos, sistemas de agentes y seguridad de prompts.

🔗 **En vivo:** https://roy-portfolio-rust.vercel.app/ · **Contacto:** ireconyherath@gmail.com

## Stack

Sitio estático sin build: **HTML + CSS + JavaScript vanilla**. Tipografía Space Grotesk.
Internacionalización ES/EN por atributos (`data-t`) con persistencia en `localStorage`.

```
index.html                 página única
assets/css/portfolio.css   sistema de diseño (dark, type-led)
assets/js/portfolio.js      i18n + menú + motion
assets/img/shots/          capturas de los proyectos
assets/diagrams/           diagramas de arquitectura (RAG)
vercel.json                cache + headers
```

## Desarrollo local

Cualquier servidor estático sirve el sitio:

```bash
python -m http.server 8130
# o
npx serve .
```

Abrir http://localhost:8130

## Despliegue

Desplegado en **Vercel** (preset estático, auto-deploy desde `main`). No requiere build.

## Nota

Las capturas de proyectos de cliente se muestran con **la interfaz y la marca
anonimizadas** para proteger la propiedad intelectual del cliente; los patrones de
arquitectura y las decisiones técnicas son los reales.
