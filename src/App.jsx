import React, { useEffect, useState } from "react";

const brandName = "MoneySprint";

const styles = {
  container: { maxWidth: 1120, margin: "0 auto", padding: "16px" },
  nav: {
    position: "sticky",
    top: 0,
    background: "#fff",
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
  hero: { textAlign: "center", padding: "32px 0" },
  grid: { display: "grid", gridTemplateColumns: "1fr", gap: 16 },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
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
  link: { color: "#4f46e5", textDecoration: "none" },
};

function AdSlot({ slot = "YOUR-AD-SLOT-ID", format = "auto", style = {} }) {
  useEffect(() => {
    // try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  }, []);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "16px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 90, ...style }}
        data-ad-client="ca-pub-YOUR-ADSENSE-CLIENT-ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

function usePage() {
  const [page, setPage] = useState("home");
  const [article, setArticle] = useState(null);
  return {
    page,
    go: setPage,
    article,
    openArticle: (a) => {
      setArticle(a);
      setPage("article");
    },
  };
}

const posts = [
  {
    id: 1,
    title: "Best Money Apps for Beginners (2025)",
    desc: "Simple, safe, and free tools to manage cash, save more, and avoid fees.",
    tags: ["apps", "saving", "beginner"],
    minutes: 7,
    outline: [
      "Why money apps (fees, automation)",
      "Top picks by use-case (budgeting, saving, investing)",
      "Quick setup steps",
      "FAQ and tips",
    ],
  },
  {
    id: 2,
    title: "No-Fee Online Banks Compared (EU & US)",
    desc: "Which accounts actually have zero fees and good interest in 2025.",
    tags: ["banking", "comparison"],
    minutes: 9,
    outline: ["Criteria", "Top 5", "Cashback & rates", "Opening checklist"],
  },
  {
    id: 3,
    title: "How to Earn with Legit Survey Sites (No Time Waste)",
    desc: "Realistic earnings, best platforms, and scam filters.",
    tags: ["side-income", "surveys"],
    minutes: 6,
    outline: ["Earning math", "Top sites", "Red flags", "Cashout tips"],
  },
];

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

function Hero({ onCTA }) {
  return (
    <div style={styles.hero}>
      <h1 style={{ fontSize: 40, lineHeight: 1.2, margin: 0 }}>
        Smarter Money in <span style={{ color: "#4f46e5" }}>Minutes</span>
      </h1>
      <p style={{ color: "#4b5563", maxWidth: 720, margin: "12px auto" }}>
        Actionable guides to save fees, boost interest, and set up your money stack. Clear, fast, and beginner-friendly.
      </p>
      <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "center" }}>
        <button style={{ ...styles.btn, background: "#4f46e5", color: "#fff", borderColor: "#4f46e5" }} onClick={onCTA}>
          Start with our Top Picks →
        </button>
        <button style={styles.btn}>Join newsletter</button>
      </div>
      <AdSlot />
    </div>
  );
}

function PostCard({ p, onOpen }) {
  return (
    <div style={styles.card}>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{p.minutes} min read · {p.tags.join(" · ")}</div>
      <h3 style={{ margin: "8px 0", fontSize: 20 }}>{p.title}</h3>
      <p style={{ color: "#4b5563" }}>{p.desc}</p>
      <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={styles.btn} onClick={() => onOpen(p)}>Read</button>
        <div style={{ color: "#9ca3af", fontSize: 12 }}>Outline included</div>
      </div>
    </div>
  );
}

function HomePage({ onOpenArticle }) {
  return (
    <div style={styles.container}>
      <Hero onCTA={() => onOpenArticle(posts[0])} />
      <div style={{ ...styles.grid, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {posts.map((p) => (
          <PostCard key={p.id} p={p} onOpen={onOpenArticle} />
        ))}
      </div>
      <AdSlot />
    </div>
  );
}

function ArticlePage({ article }) {
  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: 28 }}>{article.title}</h1>
      <p style={{ color: "#6b7280", fontSize: 14 }}>{article.minutes} min read · {article.tags.join(" · ")}</p>
      <AdSlot />
      <p style={{ marginTop: 12 }}>{article.desc}</p>
      <h2>Outline</h2>
      <ol>
        {article.outline.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ol>
      <p>
        This article uses a simple structure for fast reading and high RPM. Insert your own screenshots and comparison tables. Add internal links to at least 2 related posts.
      </p>
      <AdSlot style={{ minHeight: 60 }} />
    </div>
  );
}

function AboutPage() {
  return (
    <div style={styles.container}>
      <h1>About {brandName}</h1>
      <p>We publish short, practical guides that help beginners save money, avoid fees, and earn better interest.</p>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p>
        This site uses cookies and may use Google AdSense. You can opt out of personalized ads in your Google settings.
      </p>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={styles.container}>
      <h1>Contact</h1>
      <p>Questions, tips, or partnerships? Email us at hello@yourdomain.com</p>
    </div>
  );
}

export default function App() {
  const { page, go, article, openArticle } = usePage();
  return (
    <div>
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