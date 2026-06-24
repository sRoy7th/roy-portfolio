/* ===================================================================
   Portafolio de Rogelio Armas — i18n ES/EN + menú móvil + header
   scroll + motion stagger. Vanilla, sin dependencias.
   Mecanismo i18n basado en atributos (data-t / data-t-html), destilado
   de web/assets/js/enhance.js de Hebi.
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Diccionario ES/EN ---------- */
  var DICT = {
    "a11y.skip": { es: "Saltar al contenido", en: "Skip to content" },

    "nav.about": { es: "Perfil", en: "Profile" },
    "nav.caps": { es: "Capacidades", en: "Capabilities" },
    "nav.projects": { es: "Proyectos", en: "Projects" },
    "nav.process": { es: "Proceso", en: "Process" },
    "nav.contact": { es: "Contacto", en: "Contact" },
    "nav.cta": { es: "Contáctame", en: "Get in touch" },

    "hero.eyebrow": { es: "Tlaxcala, México · Desarrollador de aplicaciones de IA", en: "Tlaxcala, Mexico · AI Application Developer" },
    "hero.title": {
      es: '<span class="light">Diseño y opero</span> aplicaciones de IA <span class="accent">en producción.</span>',
      en: '<span class="light">I design and run</span> AI applications <span class="accent">in production.</span>'
    },
    "hero.lead": {
      es: "En el último año construí un CRM con IA nativa, un ERP sectorial con router de IA costo-eficiente, un sistema de leads con agentes y una plataforma de e-commerce en producción. IA como arquitectura —multi-proveedor, segura y con costos medidos— no como feature pegado.",
      en: "Over the past year I built an AI-native CRM, a sector ERP with a cost-efficient AI router, an agent-based lead system and a custom e-commerce platform in production. AI as architecture —multi-provider, secure and cost-measured— not a bolted-on feature."
    },
    "hero.cta1": { es: "Ver proyectos", en: "View projects" },
    "hero.cta2": { es: "Contacto", en: "Contact" },
    "hero.stat1": { es: "Proyectos de IA", en: "AI projects" },
    "hero.stat2": { es: "Apps en producción", en: "Apps in production" },
    "hero.stat3": { es: "Integraciones (MP, WhatsApp, CRM…)", en: "Integrations (MP, WhatsApp, CRM…)" },

    "about.eyebrow": { es: "Perfil", en: "Profile" },
    "about.h2": {
      es: 'Visión de negocio + ejecución técnica, en el <span class="accent">mismo perfil.</span>',
      en: 'Business vision + technical execution, in the <span class="accent">same person.</span>'
    },
    "about.lead": {
      es: 'Combino <strong>visión de negocio</strong> —dónde la IA genera ROI real— con <strong>ejecución técnica</strong>: LLMs, agentes, RAG, gateways, RBAC y despliegue a producción.',
      en: 'I combine <strong>business vision</strong> —where AI generates real ROI— with <strong>technical execution</strong>: LLMs, agents, RAG, gateways, RBAC and production deployment.'
    },
    "about.p1": {
      es: "Soy desarrollador full-stack y diseñador de producto. En el último año diseñé y construí aplicaciones de IA con un patrón recurrente que importa en producción: la IA como arquitectura, no como feature pegado.",
      en: "I'm a full-stack developer and product designer. Over the past year I designed and built AI applications with a recurring pattern that matters in production: AI as architecture, not a bolted-on feature."
    },
    "about.p2": {
      es: 'Eso significa gateways desacoplados y multi-proveedor (sin lock-in), routing de modelos por costo, human-in-the-loop, gobierno de datos y defensa contra inyección de prompts. <span class="accent">IA pensada para operar, costar poco y no filtrar datos.</span>',
      en: 'That means decoupled, multi-provider gateways (no lock-in), cost-based model routing, human-in-the-loop, data governance and prompt-injection defense. <span class="accent">AI built to operate, stay cheap and not leak data.</span>'
    },

    "caps.eyebrow": { es: "Capacidades", en: "Capabilities" },
    "caps.h2": { es: "Lo que llevo a producción", en: "What I take to production" },
    "caps.1.t": { es: "IA como arquitectura", en: "AI as architecture" },
    "caps.1.d": { es: "Gateway desacoplado y multi-proveedor; la IA nunca es punto único de falla (fallback a flujo sin IA).", en: "A decoupled, multi-provider gateway; AI is never a single point of failure (fallback to a non-AI flow)." },
    "caps.2.t": { es: "Multi-proveedor / sin lock-in", en: "Multi-provider / no lock-in" },
    "caps.2.d": { es: "Routing entre Claude y Gemini por tarea, rol y costo.", en: "Routing between Claude and Gemini by task, role and cost." },
    "caps.3.t": { es: "Seguridad de LLMs", en: "LLM security" },
    "caps.3.d": { es: "Threat modeling: los datos son contenido, no instrucciones. Anti-inyección y anti-escalación de rol.", en: "Threat modeling: data is content, not instructions. Prompt-injection and role-escalation hardening." },
    "caps.4.t": { es: "FinOps de IA", en: "AI FinOps" },
    "caps.4.d": { es: "Routing por tier, rate limiting y cost tracking por solicitud. Costo bajo a escala.", en: "Tier routing, rate limiting and per-request cost tracking. Low cost at scale." },
    "caps.5.t": { es: "RAG con gobierno de datos", en: "RAG with data governance" },
    "caps.5.d": { es: "Extracción de campos autorizados, redacción de sensibles y auditoría — no un dump de PDFs.", en: "Authorized-field extraction, redaction of sensitive data and auditing — not a PDF dump." },
    "caps.6.t": { es: "Agentes y automatización", en: "Agents & automation" },
    "caps.6.d": { es: "Sistemas multi-agente orquestados y automatización end-to-end.", en: "Orchestrated multi-agent systems and end-to-end automation." },
    "caps.7.t": { es: "RBAC + IA integrado", en: "RBAC + AI integrated" },
    "caps.7.d": { es: "El asistente conoce los permisos del usuario; respuestas restringidas por rol.", en: "The assistant knows the user's permissions; responses restricted by role." },
    "caps.8.t": { es: "Despliegue a producción", en: "Production deployment" },
    "caps.8.d": { es: "Pagos, webhooks, SMTP, SSL y deploy. Lo aburrido-pero-crítico, entregado.", en: "Payments, webhooks, SMTP, SSL and deploy. The boring-but-critical, shipped." },
    "caps.9.t": { es: "Producto / UX", en: "Product / UX" },
    "caps.9.d": { es: "Sistemas de diseño, accesibilidad e internacionalización hasta 4 idiomas.", en: "Design systems, accessibility and internationalization up to 4 languages." },

    "projects.eyebrow": { es: "Proyectos", en: "Projects" },
    "projects.h2": { es: "Aplicaciones de IA reales", en: "Real AI applications" },
    "projects.intro": { es: "Estado real indicado en cada tarjeta —en producción, MVP demostrable o arquitectura—. Las apps de cliente se muestran con la interfaz anonimizada.", en: "Real status noted on each card —in production, working MVP or architecture—. Client apps are shown with anonymized UI." },
    "projects.also": { es: "También construido", en: "Also built" },

    "status.live": { es: "En producción", en: "In production" },
    "status.mvp": { es: "MVP demostrable", en: "Working MVP" },
    "status.functional": { es: "Funcional", en: "Functional" },
    "status.arch": { es: "Arquitectura", en: "Architecture" },

    "proj.hebi.k": { es: "E-commerce · Proyecto propio", en: "E-commerce · Personal project" },
    "proj.hebi.pitch": { es: "Plataforma de e-commerce a medida para una marca de streetwear, con checkout real y drops por temporada.", en: "Custom e-commerce platform for a streetwear brand, with a real checkout and seasonal drops." },
    "proj.hebi.p1": { es: "<strong>Decisión:</strong> checkout propio sobre Mercado Pago (no WooCommerce), con recálculo de precios server-side y confirmación por webhooks.", en: "<strong>Decision:</strong> a custom checkout on Mercado Pago (no WooCommerce), with server-side price recalculation and webhook confirmation." },
    "proj.hebi.p2": { es: "<strong>Resultado:</strong> sitio en producción, bilingüe ES/EN, con SEO técnico y pipeline de imágenes (0.9 MB → 90 KB).", en: "<strong>Result:</strong> live in production, bilingual ES/EN, with technical SEO and an image pipeline (0.9 MB → 90 KB)." },

    "proj.crm.k": { es: "CRM con IA nativa · Cliente", en: "AI-native CRM · Client" },
    "proj.crm.pitch": { es: "CRM multi-tenant con copiloto de IA integrado y un gateway multi-proveedor en el núcleo.", en: "Multi-tenant CRM with a built-in AI copilot and a multi-provider gateway at its core." },
    "proj.crm.p1": { es: "<strong>Decisión:</strong> AI Gateway que enruta entre Claude y Gemini por tarea y rol, con rate limiting y cost tracking por solicitud.", en: "<strong>Decision:</strong> an AI Gateway routing between Claude and Gemini by task and role, with rate limiting and per-request cost tracking." },
    "proj.crm.p2": { es: "<strong>Resultado:</strong> chat de IA en vivo por SSE, RBAC, y hardening anti prompt-injection (los datos del CRM son contenido, no instrucciones).", en: "<strong>Result:</strong> live AI chat over SSE, RBAC, and prompt-injection hardening (CRM data is content, never instructions)." },
    "proj.crm.p3": { es: "<strong>Estrategia:</strong> autoré un blueprint enterprise (~2,800 líneas): 9 subagentes, 4 tiers de routing, gobierno y roadmap por fases.", en: "<strong>Strategy:</strong> I authored an enterprise blueprint (~2,800 lines): 9 sub-agents, 4 routing tiers, governance and a phased roadmap." },

    "proj.erp.k": { es: "ERP sectorial · Cliente", en: "Sector ERP · Client" },
    "proj.erp.pitch": { es: "ERP de cotizaciones → órdenes → costos multimoneda → márgenes y utilidad para un distribuidor industrial.", en: "ERP for quotes → orders → multi-currency costs → margins and profit for an industrial distributor." },
    "proj.erp.p1": { es: "<strong>Decisión:</strong> router de IA agnóstico de proveedor que elige modelo por dificultad y tamaño de entrada (3 tiers, con costo transparente en la UI).", en: "<strong>Decision:</strong> a provider-agnostic AI router that picks the model by difficulty and input size (3 tiers, with transparent cost in the UI)." },
    "proj.erp.p2": { es: "<strong>Resultado:</strong> extracción human-in-the-loop con barras de confianza y redacción de datos sensibles antes de enviarlos al modelo.", en: "<strong>Result:</strong> human-in-the-loop extraction with confidence bars and redaction of sensitive data before sending to the model." },

    "proj.leads.k": { es: "Sistema de agentes · Proyecto propio", en: "Agent system · Personal project" },
    "proj.leads.pitch": { es: "Prospección automatizada: encuentra PyMEs sin presencia digital, las califica 0–100 y genera el primer contacto.", en: "Automated prospecting: finds SMBs with no digital presence, scores them 0–100 and drafts the first outreach." },
    "proj.leads.p1": { es: "<strong>Decisión:</strong> 8 agentes orquestados (prospector, priorizador, generador de pitch, follow-up, analítica) con enriquecimiento concurrente (12 workers).", en: "<strong>Decision:</strong> 8 orchestrated agents (prospector, prioritizer, pitch generator, follow-up, analytics) with concurrent enrichment (12 workers)." },
    "proj.leads.p2": { es: "<strong>Resultado:</strong> dataset real de 1,184 negocios; dry-run por defecto y envío real por WhatsApp con <code>--send</code>; costo medido (~$34 USD/corrida).", en: "<strong>Result:</strong> a real dataset of 1,184 businesses; dry-run by default and real WhatsApp sending with <code>--send</code>; measured cost (~$34 USD/run)." },

    "proj.rag.k": { es: "RAG · Document AI · Cliente", en: "RAG · Document AI · Client" },
    "proj.rag.name": { es: "RAG con gobierno de datos", en: "RAG with data governance" },
    "proj.rag.pitch": { es: "Extracción segura de cotizaciones con gobierno de datos de extremo a extremo.", en: "Secure quote extraction with end-to-end data governance." },
    "proj.rag.p1": { es: "<strong>Decisión:</strong> extraer solo campos autorizados, validar y guardar registros aprobados; el RAG opera únicamente sobre esos registros.", en: "<strong>Decision:</strong> extract only authorized fields, validate and store approved records; RAG operates solely over those records." },
    "proj.rag.p2": { es: "<strong>Resultado:</strong> redacción de sensibles (RFC, montos) antes del modelo + auditoría. Política, no dump de PDFs.", en: "<strong>Result:</strong> redaction of sensitive data (tax ID, amounts) before the model + auditing. Policy, not a PDF dump." },

    "proj.anon": { es: "Proyecto de cliente · interfaz y marca anonimizadas.", en: "Client project · UI and brand anonymized." },
    "proj.web.d": { es: "Sitio corporativo B2B en producción (SSL, GA4), 4 idiomas, formulario → CRM + SMTP + Cloudflare Turnstile, y automatización de 17 firmas de correo con PowerShell.", en: "B2B corporate site in production (SSL, GA4), 4 languages, form → CRM + SMTP + Cloudflare Turnstile, and automation of 17 email signatures with PowerShell." },
    "proj.ps.name": { es: "Automatización de Photoshop", en: "Photoshop automation" },
    "proj.ps.d": { es: "Motor que controla Photoshop por COM para editar PSDs en lote (rosters, marcadores, logos) sin tocar Photoshop manualmente. Automatización de diseño esports.", en: "An engine that drives Photoshop via COM to batch-edit PSDs (rosters, scoreboards, logos) without touching Photoshop by hand. Esports design automation." },

    "process.eyebrow": { es: "Cómo trabajo", en: "How I work" },
    "process.h2": { es: "De caso de uso a producción", en: "From use case to production" },
    "process.1.t": { es: "Caso de uso primero", en: "Use case first" },
    "process.1.d": { es: "Empiezo por el problema de negocio y el ROI, no por el modelo.", en: "I start from the business problem and ROI, not the model." },
    "process.2.t": { es: "IA como arquitectura", en: "AI as architecture" },
    "process.2.d": { es: "Gateway desacoplado, multi-proveedor y con fallback.", en: "A decoupled, multi-provider gateway with fallback." },
    "process.3.t": { es: "Seguridad y costo de entrada", en: "Security & cost upfront" },
    "process.3.d": { es: "Threat modeling del LLM, rate limiting, cost tracking y secretos protegidos.", en: "LLM threat modeling, rate limiting, cost tracking and protected secrets." },
    "process.4.t": { es: "End-to-end y verificable", en: "End-to-end & verifiable" },
    "process.4.d": { es: "Ingesta → IA → UI → despliegue, en pasos probados.", en: "Ingest → AI → UI → deploy, in tested steps." },
    "process.5.t": { es: "Documentar y medir", en: "Document & measure" },
    "process.5.d": { es: "Decisiones versionadas, analítica, build verde e iteración por sprints.", en: "Versioned decisions, analytics, green builds and sprint iteration." },
    "process.pattern": {
      es: 'En CRM, ERP y leads repito el mismo patrón: <strong>multi-proveedor / sin lock-in</strong>, <strong>routing por costo</strong>, <strong>human-in-the-loop</strong>, <strong>gobierno de datos</strong> y <strong>seguridad de prompts</strong>. No es IA de demo: es IA pensada para operar, costar poco y no filtrar datos.',
      en: 'Across CRM, ERP and leads I repeat the same pattern: <strong>multi-provider / no lock-in</strong>, <strong>cost-based routing</strong>, <strong>human-in-the-loop</strong>, <strong>data governance</strong> and <strong>prompt security</strong>. Not demo AI: AI built to operate, stay cheap and not leak data.'
    },

    "contact.eyebrow": { es: "Contacto", en: "Contact" },
    "contact.h2": { es: '¿Construimos algo con <span class="accent">IA real?</span>', en: 'Shall we build something with <span class="accent">real AI?</span>' },
    "contact.intro": { es: "Disponible para roles de AI / LLM Application Engineer y proyectos. Tlaxcala, México (remoto o presencial en la zona).", en: "Open to AI / LLM Application Engineer roles and projects. Tlaxcala, Mexico (remote or on-site in the area)." },
    "contact.email": { es: "Email", en: "Email" },
    "contact.whatsapp": { es: "WhatsApp", en: "WhatsApp" },
    "contact.github": { es: "GitHub", en: "GitHub" },
    "contact.linkedin": { es: "LinkedIn", en: "LinkedIn" },

    "footer.loc": { es: "Tlaxcala, México", en: "Tlaxcala, Mexico" },
    "footer.made": { es: "Hecho a medida — HTML, CSS y JS.", en: "Custom-built — HTML, CSS and JS." }
  };

  var LANG_KEY = "ra-lang";

  function getLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) {}
    return "es";
  }

  function applyLang(lang) {
    if (lang !== "es" && lang !== "en") lang = "es";
    document.documentElement.lang = lang;

    var i, els;
    els = document.querySelectorAll("[data-t]");
    for (i = 0; i < els.length; i++) {
      var k = els[i].getAttribute("data-t");
      if (DICT[k] && DICT[k][lang] != null) els[i].textContent = DICT[k][lang];
    }
    els = document.querySelectorAll("[data-t-html]");
    for (i = 0; i < els.length; i++) {
      var kh = els[i].getAttribute("data-t-html");
      if (DICT[kh] && DICT[kh][lang] != null) els[i].innerHTML = DICT[kh][lang];
    }

    // Imágenes con variante por idioma (p. ej. el diagrama RAG)
    var imgs = document.querySelectorAll("[data-src-es][data-src-en]");
    for (i = 0; i < imgs.length; i++) {
      var src = imgs[i].getAttribute(lang === "es" ? "data-src-es" : "data-src-en");
      if (src && imgs[i].getAttribute("src") !== src) imgs[i].setAttribute("src", src);
    }

    var toggle = document.querySelector("[data-lang-alt]");
    if (toggle) {
      toggle.textContent = lang === "es" ? "EN" : "ES";
      toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  /* ---------- Menú móvil ---------- */
  function initMobileNav() {
    var nav = document.getElementById("mobile-nav");
    var openBtn = document.querySelector("[data-nav-open]");
    var closeBtn = document.querySelector("[data-nav-close]");
    var links = document.querySelectorAll("[data-nav-link]");
    if (!nav || !openBtn) return;
    var lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      nav.hidden = false;
      document.body.classList.add("nav-open");
      openBtn.setAttribute("aria-expanded", "true");
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      nav.hidden = true;
      document.body.classList.remove("nav-open");
      openBtn.setAttribute("aria-expanded", "false");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    for (var i = 0; i < links.length; i++) links[i].addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !nav.hidden) close();
    });
  }

  /* ---------- Header solid-on-scroll ---------- */
  function initHeaderScroll() {
    var hdr = document.querySelector(".hdr");
    if (!hdr) return;
    function onScroll() {
      if (window.scrollY > 40) hdr.classList.add("is-scrolled");
      else hdr.classList.remove("is-scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Motion stagger ---------- */
  function initStagger() {
    var items = document.querySelectorAll(".stagger");
    if (!items.length) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      for (var j = 0; j < items.length; j++) items[j].classList.add("in");
      return;
    }
    document.documentElement.classList.add("stagger-on");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    for (var i = 0; i < items.length; i++) io.observe(items[i]);
  }

  /* ---------- Init ---------- */
  function init() {
    applyLang(getLang());
    var toggle = document.querySelector("[data-lang-alt]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        applyLang(document.documentElement.lang === "es" ? "en" : "es");
      });
    }
    var yr = document.querySelector("[data-year]");
    if (yr) yr.textContent = new Date().getFullYear();
    initMobileNav();
    initHeaderScroll();
    initStagger();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
