import { useEffect } from "react";
import "./App.css";

/* ============================================================
   KONFIGURASI LINK PORTAL — DIVISI SUMBER DAYA
   ------------------------------------------------------------
   Isi url aplikasi di bawah ini. Contoh pengisian:
   url: 'https://kesamaptaan.example.go.id'
   ============================================================ */
const PORTALS = [
  {
    id: "kesamaptaan",
    name: "KESAMAPTAAN",
    description:
      "Sistem informasi data kesamaptaan dan kesiapan operasional personel SAR.",
    // TODO: isi link website Kesamaptaan di sini
    url: "https://script.google.com/macros/s/AKfycbytB-9VwcKQJlxoxjgAnaGFA52fy_1ePO_Ce-0KFpagjDWDSbvz8YeG8CJ3vg79Gd6OPQ/exec",
  },
  {
    id: "silogsar",
    name: "SILOGSAR",
    description:
      "Sistem informasi pengelolaan logistik serta sarana dan prasarana.",
    // TODO: isi link website Silogsar di sini
    url: "https://script.google.com/macros/s/AKfycbw6mxluiCe1XAVHQyeSlqJ7qKG8O7H6TCT8qX8kwn7RBFnfGriWt46kn1KT3lxwlK2S/exec",
  },
  {
    id: "emonsar",
    name: "EMONSAR",
    description:
      "Sistem pemantauan (monitoring) dan evaluasi kinerja personel.",
    // TODO: isi link website Emonsar di sini
    url: "https://emonsar-sar-banyuwangi.vercel.app/",
  },
];

/* Logo header — urutan dari kiri ke kanan */
const HEADER_LOGOS = [
  { src: "/456.png", alt: "Logo Basarnas" },
  { src: "/472.png", alt: "Logo SAR Nasional" },
  { src: "/Basarnas BWI.png", alt: "Logo Basarnas Banyuwangi" },
];

/* Ikon SVG inline (tanpa dependensi eksternal) */
const ICONS = {
  kesamaptaan: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5.2c0 4.4-2.9 8.3-7 9.8-4.1-1.5-7-5.4-7-9.8V6l7-3z" />
      <path d="M9.2 12l2 2 3.8-4" />
    </svg>
  ),
  silogsar: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 8.2 12 3 3 8.2v7.6L12 21l9-5.2V8.2z" />
      <path d="M3.4 8.4 12 13.4l8.6-5" />
      <path d="M12 13.4V21" />
    </svg>
  ),
  emonsar: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M6.5 10.5h2.2l1.4-2.6 2 4.6 1.4-2h3" />
    </svg>
  ),
  arrow: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="M12 5.5 18.5 12 12 18.5" />
    </svg>
  ),
};

/* Animasi kemunculan saat elemen masuk layar */
function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  return (
    <header className="site-header">
      <div className="top-strip" />
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-logos">
            {HEADER_LOGOS.map((logo) => (
              <img key={logo.src} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <div className="brand-text">
            <span className="brand-agency">
              Badan Nasional Pencarian dan Pertolongan
            </span>
            <strong className="brand-office">Kantor SAR Banyuwangi</strong>
            <span className="brand-division">Divisi Sumber Daya</span>
          </div>
        </div>
        <a className="header-cta" href="#portal">
          Portal Aplikasi
          {ICONS.arrow}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <span className="hero-badge rise d1">Divisi Sumber Daya</span>
        <h1 className="rise d2">
          Portal Terpadu Aplikasi <span>Divisi Sumber Daya</span>
        </h1>
        <p className="hero-sub rise d3">
          Akses cepat dan terpadu ke aplikasi Kesamaptaan, Silogsar, dan Emonsar
          Kantor SAR Banyuwangi, Badan Nasional Pencarian dan Pertolongan.
        </p>

        <div className="hero-stats rise d4">
          <div className="hero-stat">
            <strong>3</strong>
            <span>Aplikasi Terintegrasi</span>
          </div>
          <div className="hero-stat">
            <strong>1</strong>
            <span>Portal Resmi</span>
          </div>
          <div className="hero-stat">
            <strong>24/7</strong>
            <span>Siap Diakses</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortalSection() {
  return (
    <section id="portal" className="portals">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Aplikasi Terintegrasi</span>
          <h2>Pilih Aplikasi Tujuan</h2>
          <p>
            Tiga aplikasi utama Divisi Sumber Daya yang terhubung dalam satu
            pintu. Klik kartu untuk membuka aplikasi.
          </p>
        </div>

        <div className="portal-grid">
          {PORTALS.map((portal, index) => (
            <a
              key={portal.id}
              className="portal-card"
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Buka aplikasi ${portal.name}`}
              data-reveal
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="portal-num">0{index + 1}</span>
              <span className="portal-icon">{ICONS[portal.id]}</span>
              <h3>{portal.name}</h3>
              <p>{portal.description}</p>
              <span className="portal-cta">
                Buka Aplikasi
                {ICONS.arrow}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logos">
            {HEADER_LOGOS.map((logo) => (
              <img key={logo.src} src={logo.src} alt="" />
            ))}
          </div>
          <p className="footer-brand">
            Kantor SAR Banyuwangi <span>&bull;</span> Divisi Sumber Daya
          </p>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Badan Nasional Pencarian dan
          Pertolongan (Basarnas)
        </p>
      </div>
    </footer>
  );
}

function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortalSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
