import React, { useEffect, useMemo, useState } from "react";

/** ===== Config anuncios ===== */
const ADS_ENABLED = false;
const RESERVE_AD_SPACE = false;

/** ===== Marca / estilos ===== */
const brandName = "MoneySprint";

const styles = {
  page: { minHeight: "100vh", background: "#f8fafc" },
  container: { maxWidth: 1200, margin: "0 auto", padding: "24px" },
  nav: {
    position: "sticky",
    top: 0,
    background: "#ffffffcc",
    backdropFilter: "saturate(180%) blur(6px)",
    borderBottom: "1px solid #e5e7eb",
    zIndex: 10,
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    background: "#fff",
    cursor: "pointer",
  },
  heroWrap: {
    background:
      "radial-gradient(60% 60% at 20% 0%, #ede9fe 0%, rgba(237,233,254,0) 60%), radial-gradient(50% 50% at 90% 10%, #e0f2fe 0%, rgba(224,242,254,0) 60%)",
    borderBottom: "1px solid #e5e7eb",
  },
  hero: { textAlign: "left", padding: "48px 0 12px 0" },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    background: "#fff",
  },
  footer: {
    borderTop: "1px solid #e5e7eb",
    marginTop: 32,
    padding: "16px",
    fontSize: 14,
    color: "#6b7280",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
};

/** ===== Nav ===== */
function Nav({ onNav }) {
  return (
    <div style={styles.nav}>
      <div style={{ fontWeight: 700, fontSize: 18 }}>💸 {brandName}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button style={styles.btn} onClick={() => onNav("home")}>Home</button>
        <button style={styles.btn} onClick={() => onNav("about")}>About</button>
        <button style={styles.btn} onClick={() => onNav("privacy")}>Privacy</button>
        <button style={styles.btn} onClick={() => onNav("contact")}>Contact</button>
      </div>
    </div>
  );
}

/** ===== Hero ===== */
function Hero({ onCTA }) {
  return (
    <div style={styles.hero}>
      <h1 style={{ fontSize: 42, lineHeight: 1.2, margin: 0 }}>
        Smarter Money in <span style={{ color: "#6d28d9" }}>Minutes</span>
      </h1>
      <p style={{ color: "#4b5563", maxWidth: 760, margin: "12px 0" }}>
        Actionable guides to save fees, boost interest, and set up your money stack.
        Clear, fast, and beginner-friendly.
      </p>
      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <button
          style={{ ...styles.btn, background: "#6d28d9", color: "#fff", borderColor: "#6d28d9" }}
          onClick={onCTA}
        >
          Start with our Top Picks →
        </button>
        <button style={styles.btn}>Join newsletter</button>
      </div>
    </div>
  );
}

/** ===== AdSlot (no deja hueco si no hay anuncios) ===== */
function AdSlot({ style }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!ADS_ENABLED) return;
    const t = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setReady(true);
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);
  if (!ADS_ENABLED && !RESERVE_AD_SPACE) return null;
  const fallback = !ready ? { border: "1px dashed #e5e7eb", background: "#fafafa" } : {};
  return (
    <div
      style={{
        minHeight: ADS_ENABLED ? 60 : RESERVE_AD_SPACE ? 60 : 0,
        margin: "12px 0",
        borderRadius: 12,
        ...fallback,
        ...style,
      }}
    />
  );
}

/** ===== Data: posts ===== */
const posts = [
  {
    id: 1,
    title: "Best Money Apps for Beginners (2025)",
    desc: "Simple, safe tools to manage cash and avoid fees.",
    tags: ["apps", "saving", "beginner"],
    minutes: 8,
    excerpt:
      "Descubre las apps que hacen que ahorrar sea automático y sin esfuerzo. Esta guía te enseña cómo controlar tus gastos, evitar comisiones y hacer que tu dinero trabaje por ti.",
    bullets: [
      "Presupuesto fácil: YNAB y Monarch, los favoritos de los que odian Excel.",
      "Ahorro automático con Revolut, Monzo o Chime: separa sin pensar.",
      "Mejores neobancos con altos intereses y sin comisiones ocultas."
    ],
    body: `
**Las mejores apps para empezar a ahorrar en 2025**

La mayoría de las personas no ahorran porque lo ven complicado o porque no saben por dónde empezar. Sin embargo, con las herramientas adecuadas puedes automatizar todo el proceso y olvidarte de la fricción.

**1. Controla tu presupuesto sin esfuerzo**  
Aplicaciones como **YNAB** o **Monarch** te ayudan a organizar tus gastos en categorías y ver en tiempo real cuánto puedes gastar sin salirte del plan. Son perfectas si odias usar hojas de cálculo.

**2. Ahorro automático con reglas simples**  
Con **Revolut**, **Monzo** o **Chime** puedes activar redondeos: cada compra se redondea al euro/dólar superior y la diferencia se guarda automáticamente. Sin darte cuenta, terminas con 100–200 € extras al mes.

**3. Mejores cuentas de ahorro**  
Usa neobancos que ofrezcan **HYSA (High Yield Savings Accounts)** con al menos 4 % de interés. Así tu dinero no se queda parado.

**Conclusión:**  
Empieza con una app, activa el ahorro automático y revisa tus gastos una vez a la semana. En pocas semanas, notarás la diferencia.
    `.trim(),
  },
  {
    id: 2,
    title: "No-Fee Online Banks Compared (EU & US)",
    desc: "Which accounts actually have zero fees and solid interest in 2025.",
    tags: ["banking", "comparison"],
    minutes: 9,
    excerpt:
      "Comparativa completa de bancos sin comisiones en Europa y Estados Unidos. Analizamos intereses, transferencias, cajeros y herramientas de ahorro para que elijas la cuenta base ideal.",
    bullets: [
      "Revolut, N26, Monzo y Starling destacan en apps y cero comisiones.",
      "En EE. UU.: Ally, Chime y Capital One combinan ahorro y usabilidad.",
      "Checklist: sin cuota, FX barato, transferencias instantáneas, buen APY."
    ],
    body: `
**Bancos sin comisiones en 2025**

Los bancos online han cambiado la forma en que gestionamos el dinero. Hoy puedes tener una cuenta gratuita, sin comisiones, con transferencias instantáneas y hasta intereses por tus ahorros.

**Europa y Reino Unido**  
- **Revolut**: permite gestionar múltiples divisas, enviar dinero gratis y ahorrar con "Vaults".  
- **N26**: diseño minimalista y control de gastos integrado.  
- **Monzo/Starling (UK)**: los preferidos por estudiantes y viajeros.

**Estados Unidos**  
- **Ally**: sin cuota mensual, red enorme de cajeros y HYSA de hasta 4,2 %.  
- **Chime**: adelanta nómina y no cobra overdraft (hasta cierto límite).  
- **Capital One 360**: ideal si quieres app + oficinas físicas.

**Conclusión:**  
Elige un banco que te dé lo esencial: sin cuotas, sin sustos y con buen soporte. Si además te da intereses, perfecto.
    `.trim(),
  },
  {
    id: 3,
    title: "How to Earn with Legit Survey Sites",
    desc: "Time vs payout, best platforms, and red flags.",
    tags: ["side-income", "surveys"],
    minutes: 6,
    excerpt:
      "Sí se puede ganar dinero con encuestas, pero hay que elegir bien. Evita fraudes, calcula tu rendimiento y combina varias plataformas para ingresos estables.",
    bullets: [
      "Plataformas serias: Prolific, Swagbucks y Toluna (sin cuotas).",
      "20–30 minutos al día bastan si seleccionas encuestas bien pagadas.",
      "Red flags: promesas irreales o pedirte dinero por adelantado."
    ],
    body: `
**Gana dinero con encuestas reales**

Hacer encuestas online no te hará rico, pero puede darte ingresos extra si eliges bien las plataformas.

**Top sitios recomendados**  
- **Prolific**: se centra en estudios académicos (mejor pago).  
- **Swagbucks**: tareas cortas, encuestas y puntos canjeables.  
- **Toluna**: buena reputación en Europa.

**Cómo optimizar tu tiempo**  
Limita a 30 min/día y calcula tu rendimiento por hora. Mantén al menos dos plataformas abiertas para no quedarte sin encuestas.

**Evita fraudes**  
Si un sitio te pide pagar por registrarte o promete 100 € diarios, huye. Lo realista son entre 2 y 5 € al día constantes.

**Conclusión:**  
Con disciplina, puedes generar entre 60 y 100 € mensuales sin esfuerzo.
    `.trim(),
  },
  {
    id: 4,
    title: "High-Yield Savings: Quick Setup",
    desc: "Open, link, automate 1–5% transfers.",
    tags: ["saving"],
    minutes: 5,
    excerpt:
      "Los intereses por fin vuelven a importar. Abre una cuenta de ahorro (HYSA) sin comisiones, vincúlala a tu banco y automatiza aportaciones pequeñas para ganar intereses mes a mes.",
    bullets: [
      "HYSA ≥ 4 % APY y sin comisiones.",
      "Automatiza 1–5 % del ingreso mensual el día de la nómina.",
      "Divide el ahorro por objetivos: viajes, fondo, gadgets."
    ],
    body: `
**Cómo montar una cuenta de ahorro automática**

Las cuentas de ahorro de alto rendimiento (HYSA) permiten ganar intereses mientras mantienes liquidez.

**Pasos:**
1. Busca un banco que ofrezca al menos 4 % APY sin cuota.  
2. Conecta tu cuenta principal y programa transferencias automáticas (1–5 % de tu nómina).  
3. Usa “buckets” o “espacios” para separar metas (viaje, fondo, imprevistos).

**Por qué funciona:**  
Al automatizar, eliminas la tentación de gastar ese dinero. El interés hace el resto.
    `.trim(),
  },
  {
    id: 5,
    title: "Card Cashback: Max Strategy",
    desc: "Categories, rotating offers, pitfalls.",
    tags: ["cards", "rewards"],
    minutes: 8,
    excerpt:
      "Consigue dinero real cada mes con tus compras habituales. Aprende a combinar tarjetas con recompensas rotativas y planas para maximizar el cashback sin endeudarte.",
    bullets: [
      "Combinación ideal: 1 tarjeta rotativa + 1 plana (1,5–2 %).",
      "Activa las categorías trimestrales y paga siempre el total.",
      "Evita intereses y usa apps de seguimiento."
    ],
    body: `
**Estrategia de cashback inteligente**

No se trata de gastar más, sino de aprovechar lo que ya gastas.  
Usa una tarjeta rotativa (por ejemplo, con categorías trimestrales) y una plana del 2 % en todo.

**Reglas básicas:**  
- Paga SIEMPRE el total, nunca intereses.  
- Activa las categorías trimestrales en la app del banco.  
- No persigas recompensas si implica gasto innecesario.

**Resultado:**  
Entre 15 y 40 € mensuales reales solo por usar las tarjetas correctas.
    `.trim(),
  },
  {
    id: 6,
    title: "Emergency Fund: 3-Step Plan",
    desc: "Target size, where to keep it, and rules.",
    tags: ["fund", "safety"],
    minutes: 4,
    excerpt:
      "Construir un fondo de emergencia no es solo ahorrar: es tranquilidad. Aprende cuánto necesitas, dónde guardarlo y cómo protegerlo para imprevistos reales.",
    bullets: [
      "Meta inicial: 1 mes de gastos, objetivo: 3–6 meses.",
      "Usa una HYSA o cuenta separada para no tocarlo.",
      "Solo para emergencias reales: salud, vivienda o trabajo."
    ],
    body: `
**Tu red de seguridad financiera**

Un fondo de emergencia evita que un imprevisto se convierta en deuda.

**Cuánto ahorrar:**  
Empieza con 1 mes de gastos y escala hasta 3–6 meses.  
Guárdalo en una HYSA separada o cuenta secundaria sin tarjeta.

**Reglas de uso:**  
- Solo para emergencias reales (salud, vivienda, empleo).  
- Repónlo siempre que lo uses.  
- No lo mezcles con el ahorro general.

**Beneficio:**  
Tranquilidad y libertad para afrontar cualquier imprevisto.
    `.trim(),
  },
];

/** ===== Tarjeta ===== */
function PostCard({ p, onOpen }) {
  return (
    <div style={styles.card}>
      <div style={{ fontSize: 12, color: "#6b7280" }}>
        {p.minutes} min read · {(p.tags || []).join(" · ")}
      </div>
      <h3 style={{ margin: "8px 0", fontSize: 20 }}>{p.title}</h3>
      <p style={{ color: "#374151", margin: "6px 0 8px" }}>
        {p.excerpt ?? p.desc}
      </p>
      {p.bullets?.length > 0 && (
        <ul style={{ margin: "0 0 10px 18px", color: "#4b5563", lineHeight: 1.5 }}>
          {p.bullets.slice(0, 3).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: 12 }}>
        <button style={styles.btn} onClick={() => onOpen(p)}>Read more →</button>
      </div>
    </div>
  );
}

/** ===== Home ===== */
function HomePage({ onOpenArticle }) {
  return (
    <>
      <div style={styles.heroWrap}>
        <div style={styles.container}>
          <Hero onCTA={() => onOpenArticle(posts[0])} />
          <AdSlot />
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.grid}>
          {posts.map((p) => (
            <PostCard key={p.id} p={p} onOpen={onOpenArticle} />
          ))}
        </div>
      </div>
    </>
  );
}

/** ===== Article Page ===== */
function ArticlePage({ article }) {
  const paragraphs = (article.body || "").split(/\n\s*\n/);
  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: 28 }}>{article.title}</h1>
      <p style={{ color: "#6b7280", fontSize: 14 }}>
        {article.minutes} min read · {(article.tags || []).join(" · ")}
      </p>
      <div style={{ marginTop: 12, lineHeight: 1.75 }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ margin: "0 0 14px" }}>{p}</p>
        ))}
      </div>
    </div>
  );
}

/** ===== About Page ===== */
function AboutPage() {
  return (
    <div style={styles.container}>
      <h1>Sobre MoneySprint</h1>
      <p>
        MoneySprint nació con una idea sencilla: hacer que las finanzas personales
        sean fáciles, prácticas y accionables. No necesitas ser economista para 
        entender cómo optimizar tus gastos o ganar un poco más cada mes.
      </p>
      <p>
        Desde 2025, compartimos guías cortas y directas sobre ahorro, inversión
        básica, cuentas bancarias, apps y herramientas que realmente funcionan.
      </p>
      <p>
        Nuestro objetivo es ayudarte a dar <strong>pequeños pasos rápidos</strong>
        que te acerquen a una mejor relación con el dinero. 
      </p>
      <p>
        <em>MoneySprint — Smarter Money in Minutes.</em>
      </p>
    </div>
  );
}

/** ===== Privacy Page ===== */
function PrivacyPage() {
  return (
    <div style={styles.container}>
      <h1>Política de Privacidad</h1>
      <p>
        En MoneySprint respetamos tu privacidad. No recopilamos datos personales
        sin tu consentimiento. Si decides suscribirte a nuestro boletín, tu correo
        se utilizará únicamente para enviarte contenido y noticias relacionadas.
      </p>
      <p>
        Este sitio puede usar cookies anónimas y tecnologías de medición/publicidad
        (por ejemplo, Google Analytics o AdSense) para entender el tráfico y mostrar
        anuncios relevantes. Puedes desactivar las cookies en tu navegador.
      </p>
      <p>
        Cumplimos con la legislación europea (GDPR) y no vendemos tus datos a terceros.
        Para ejercer tus derechos o solicitar la eliminación de datos, escribe a
        <a href="mailto:hello@yourdomain.com"> hello@yourdomain.com</a>.
      </p>
    </div>
  );
}

/** ===== Contact Page ===== */
function ContactPage() {
  return (
    <div style={styles.container}>
      <h1>Contacto</h1>
      <p>¿Dudas, sugerencias o colaboraciones? Escríbenos a <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></p>
    </div>
  );
}

/** ===== Router minimal ===== */
function usePage() {
  const [page, setPage] = useState("home");
  const [article, setArticle] = useState(null);
  return {
    page,
    go: setPage,
    article,
    openArticle: (a) => { setArticle(a); setPage("article"); },
  };
}

/** ===== App ===== */
export default function App() {
  const { page, go, article, openArticle } = usePage();
  return (
    <div style={styles.page}>
      <Nav onNav={go} />
      {page === "home" && <HomePage onOpenArticle={openArticle} />}
      {page === "article" && article && <ArticlePage article={article} />}
      {page === "about" && <AboutPage />}
      {page === "privacy" && <PrivacyPage />}
      {page === "contact" && <ContactPage />}
      <footer style={styles.footer}>
        <div>© {new Date().getFullYear()} {brandName}. All rights reserved.</div>
        <div>Built for speed · Core Web Vitals ready</div>
      </footer>
    </div>
  );
}

