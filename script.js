// ---------- Year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Burger ----------
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// ---------- Skills bars ----------
function buildSkillBars(){
  document.querySelectorAll(".skill").forEach(el => {
    const name = el.getAttribute("data-skill") || "Skill";
    const pct = Number(el.getAttribute("data-pct") || 0);
    el.innerHTML = `
      <div class="skill-row">
        <span>${escapeHtml(name)}</span>
        <span>${pct}%</span>
      </div>
      <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
    `;
  });
}
buildSkillBars();

// ---------- Showcase content (edit here) ----------
const SHOWCASE = {
  awards: [
    { img: "award1.jpg", title: "Bachelor Thesis Submission ", desc: "Design and programming of a shuttle vehicle control system for automated high-bay warehouses using Siemens PLC technology.", meta: "2025" },
    { img: "award2.png", title: "Three-Phase Short Circuit Calculation ", desc: "Simulation of a three-phase short circuit in a power system to analyze fault currents and voltage behavior.", meta: "OTH Regensburg • 2025" },
    { img: "award3.jpg", title: "Environmental Monitoring Station", desc: "Development of a microcontroller-based system for measuring environmental parameters such as temperature and humidity.", meta: "OTH Regensburg • 2022" },
  ],
  certs: [
    { img: "cert1.jpg", title: "PCB Design with KiCad", desc: "Introduction to PCB design and routing using KiCad.", meta: "OTH Regensburg • 2023" },
    { img: "cert2.jpg", title: "PLC Programming Fundamentals", desc: "Introduction to PLC programming, automation basics, ladder logic and function block diagrams.", meta: "SPS4you • 2025" },
    { img: "cert3.jpg", title: "Advanced PLC Programming", desc: "Advanced PLC programming, automation logic, diagnostics and industrial control systems.", meta: "SPS4you • 2025" },
  ],
  tech: [
    { icon:"🐍", label:"Python" },
    { icon:"💻", label:"C" },
    { icon:"💻", label:"C++" },
    { icon:"🌐", label:"HTML5" },
    { icon:"🎨", label:"CSS3" },
    { icon:"🟨", label:"JavaScript" },
    { icon:"⚙️", label:"TIA Portal" },
    { icon:"📊", label:"MATLAB / Simulink" },
    { icon:"🧠", label:"SQL" },
    { icon:"🔌", label:"LTspice" },
    { icon:"🧩", label:"KiCad" },
    { icon:"🧱", label:"Inventor / CAD" },
    { icon:"⚡", label:"DIgSILENT PowerFactory" },
    { icon:"🔋", label:"Modelica" }
  ]
};

function renderGrid(elId, items){
  const root = document.getElementById(elId);
  root.innerHTML = items.map(x => `
    <article class="card">
      <img src="${x.img}" alt="${escapeHtml(x.title)}" loading="lazy" onerror="this.style.display='none'">
      <div class="card-body">
        <h4 class="card-title">${escapeHtml(x.title)}</h4>
        <p class="card-desc">${escapeHtml(x.desc)}</p>
        <div class="card-meta">${escapeHtml(x.meta)}</div>
      </div>
    </article>
  `).join("");
}

function renderTech(elId, items){
  const root = document.getElementById(elId);
  root.innerHTML = items.map(x => `
    <div class="tech-pill">
      <div class="tech-icon">${escapeHtml(x.icon)}</div>
      <div class="tech-label">${escapeHtml(x.label)}</div>
    </div>
  `).join("");
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

renderGrid("grid-awards", SHOWCASE.awards);
renderGrid("grid-certs", SHOWCASE.certs);
renderTech("grid-tech", SHOWCASE.tech);

// ---------- Tabs behavior (strict) ----------
const tabs = document.querySelectorAll(".tab");
const panels = {
  awards: document.getElementById("grid-awards"),
  certs: document.getElementById("grid-certs"),
  tech:  document.getElementById("grid-tech"),
};
function showTab(name){
  tabs.forEach(b => b.classList.toggle("active", b.dataset.tab === name));
  Object.values(panels).forEach(p => p.classList.add("hidden"));
  if (panels[name]) panels[name].classList.remove("hidden");
}
showTab("awards");
tabs.forEach(btn => btn.addEventListener("click", () => showTab(btn.dataset.tab)));

// ---------- CV Experience (adapté à ton CV + ton message) ----------
const CV_EXPERIENCE = [
    {
    role: "Werkstudent",
    company: "LPlusR GmbH, Parkstein",
    date: "August 2025 – laufend",
    bullets: [
      "Erstellung einer Fahrzeugsteuerung mit spezifischem Hardwareplan",
      "Programmierung der Fahrzeugbewegung mittels SCL",
    ]
  },
  {
    role: "Bachelorand ",
    company: "LPlusR GmbH, Parkstein",
    date: "März 2025 – Juli 2025",
    bullets: [
      "Bachelorarbeit: „Konzeption und Programmierung einer Shuttle-Fahrzeugsteuerung im Hochregallager auf Basis einer Siemens-Steuerung“",
      "Erstellung einer Fahrzeugsteuerung mit spezifischem Hardwareplan",
      "Programmierung der Fahrzeugbewegung mittels SCL",
      "Weiterhin tätig als Werkstudent in derselben Firma (parallel zum Master)"
    ]
  },
  {
    role: "Praktikant",
    company: "Infineon Technologies AG, Regensburg",
    date: "Sept. 2024 – Jan. 2025",
    bullets: [
      "Konstruktion und Montage von individuellen Trittschutzeinheiten und Sensor-Montagewinkeln",
      "Datenanalyse mittels SQL",
      "Anpassung und Umbau von Erdungssystemen bei Roboter-Schaltschränken",
      "Erstellung einer GUI (Python) für Transportpalettenverwaltung"
    ]
  },
  {
    role: "Werkstudent",
    company: "Infineon Technologies AG, Regensburg",
    date: "März 2024 – Sept. 2024",
    bullets: [
      "Projektbegleitung von Installationsprojekten von Roboterzellen unter Reinraumbedingungen",
      "Planung, Testen, Integration und Montage von Kommunikationsschnittstellen zwischen Robotern und Anlage",
      "Erstellung und Testen von Kabelsätzen sowie E-Plänen für Schnittstellen",
      "Unterstützung von Tests und Inbetriebnahmen an Roboterzellen"
    ]
  },
  {
    role: "Werkstudent",
    company: "Krones AG, Neutraubling",
    date: "Nov. 2022 – Feb. 2024",
    bullets: [
      "Mitwirkung bei der Erstellung von Konzepten für Dampf-, Kälte-, Druckluft-, CO2/N2- und Chlordioxidanlagen",
      "Unterstützung bei technischen Spezifikationen für Anfragen bei Unterlieferanten",
      "Mitarbeit bei der Bearbeitung von Angeboten und Kundenaufträgen",
      "Erstellung/Optimierung von Excel-Tools zur Auslegung und Kalkulation",
      "Erstellung und Überarbeitung von Produktstrukturen und Standard-Prozessfließbildern"
    ]
  },
  {
    role: "Werkstudent",
    company: "Infineon Technologies AG, Regensburg",
    date: "Aug. 2022 – Sept. 2022",
    bullets: [
      "Unterstützung bei der Anpassung und Optimierung von fertigungnahen Hilfsgütern und Materialien",
      "Unterstützung bei Planung und Umsetzung von Prozessen zur Fertigungsoptimierung bzw. Liniensteuerung"
    ]
  }
];

function renderCvTimeline(){
  const root = document.getElementById("cvTimeline");
  root.innerHTML = CV_EXPERIENCE.map(x => `
    <div class="cv-item">
      <div class="cv-head">
        <h4 class="cv-role">${escapeHtml(x.role)}</h4>
        <div class="cv-date">${escapeHtml(x.date)}</div>
      </div>
      <div class="cv-company">${escapeHtml(x.company)}</div>
      <ul class="cv-bullets">
        ${x.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}
renderCvTimeline();

// ---------- Contact form -> EmailJS ----------
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const oldText = btn.textContent;

  btn.disabled = true;
  btn.textContent = "Sending...";

  try {
    const fd = new FormData(form);

    const params = {
      from_name: fd.get("name"),
      reply_to: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    await emailjs.send("service_td7o1g6", "template_9i0xntg", params);

    btn.textContent = "Sent ✅";
    form.reset();
  } catch (err) {
    console.error("EmailJS error:", err);
    alert("Message not sent. Please try again or email me directly.");
    btn.textContent = "Error ❌";
  } finally {
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = oldText;
    }, 1500);
  }
});

// ---------- i18n ----------
const langSelect = document.getElementById("langSelect");

const I18N = {
  fr: {
    // NAV
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_showcase: "Portfolio",
    nav_experience: "Expérience",
    nav_contact: "Contact",

    // HERO
    hero_name: "Abiathar Mekem",
    hero_role: "Ingénieur électricien • Réseaux énergétiques • Automatisation • Électromobilité",
    hero_text:
      "J’explore l’intersection entre l’ingénierie électrique, les réseaux énergétiques et l’électromobilité à travers des projets concrets et des applications industrielles. Je m’intéresse à la conception et à l’optimisation de systèmes énergétiques intelligents, de solutions d’automatisation et de technologies durables, afin de soutenir la transition vers des infrastructures électriques modernes et efficaces.",
    btn_projects: "Voir le portfolio",
    btn_contact: "Me contacter",
    scroll: "Descendre",

    // ABOUT
    about_title: "À propos de moi",
    about_p1:
      "Je suis diplômé en génie électrique avec un Bachelor en Elektro- und Informationstechnik, spécialisation Énergie et Automatisation. Je poursuis actuellement un Master en Energienetze und Elektromobilität, afin d’approfondir mes compétences en systèmes énergétiques modernes, réseaux électriques et solutions de mobilité durable.",
    about_p2:
      "Mes centres d’intérêt portent sur le développement et l’optimisation d’infrastructures énergétiques intelligentes, de systèmes d’automatisation et de technologies innovantes pour des réseaux plus fiables, plus efficaces et plus durables. À travers mes projets académiques et mon expérience en entreprise, j’aime transformer la théorie en solutions applicables au terrain.",
    about_p3:
      "En tant que futur ingénieur, je développe continuellement mes compétences techniques, j’explore de nouveaux outils et je renforce ma capacité à concevoir des solutions électriques robustes et performantes. Ce portfolio reflète mon parcours en constante évolution guidé par la passion et l’impact concret.",

    // STATS (important : 4 cartes différentes)
    stat_degree: "B.Eng",
    stat_degree_lbl: "Énergie & automatisation (Bachelor)",
    stat_master: "M.Sc",
    stat_master_lbl: "Réseaux & électromobilité (Master)",
    stat_years: "1+",
    stat_years_lbl: "Années d’expérience",
    stat_projects: "5+",
    stat_projects_lbl: "Projets réalisés",

    // SKILLS
    skills_title: "Compétences & expertise",
    skills_col1: "Développement",
    skills_col2: "Ingénierie",
    skills_col3: "Outils",

    // SHOWCASE
    showcase_title: "Portfolio",
    showcase_sub: "Découvre mes certificats, réalisations et compétences techniques.",
    tab_awards: "Réalisations",
    tab_certs: "Certificats",
    tab_tech: "Compétences",

    // EXPERIENCE
    exp_title: "Expérience",

    // CONTACT
    contact_title: "Contact",
    contact_intro:
      "Je suis toujours intéressé par de nouveaux projets et opportunités. Que ce soit pour une question ou simplement pour dire bonjour, n’hésite pas à me contacter !",
    lbl_email: "Email",
    lbl_location: "Lieu",
    lbl_linkedin: "LinkedIn",
    val_location: "Regensburg, Allemagne",
    val_linkedin: "Abiathar Mekem",
    f_name: "Nom",
    f_email: "Email",
    f_subject: "Objet",
    f_message: "Message",
    f_send: "Envoyer",
    ph_name: "Ton nom",
    ph_email: "Ton email",
    ph_subject: "Objet",
    ph_message: "Ton message",

    // FOOTER
    rights: "Tous droits réservés.",
    tagline: "Ingénieur électricien • Énergie • Automatisation • Électromobilité"
  },

  de: {
    // NAV
    nav_home: "Start",
    nav_about: "Über mich",
    nav_skills: "Skills",
    nav_showcase: "Portfolio",
    nav_experience: "Erfahrung",
    nav_contact: "Kontakt",

    // HERO
    hero_name: "Abiathar Mekem",
    hero_role: "Elektroingenieur • Energienetze • Automatisierung • Elektromobilität",
    hero_text:
      "Ich erforsche die Schnittstelle zwischen Elektrotechnik, Energienetzen und Elektromobilität durch praxisnahe Projekte und reale Anwendungen. Mein Fokus liegt auf der Entwicklung und Optimierung intelligenter Energiesysteme, Automatisierungslösungen und nachhaltiger Technologien, um den Wandel hin zu modernen und effizienten elektrischen Infrastrukturen zu unterstützen.",
    btn_projects: "Portfolio ansehen",
    btn_contact: "Kontakt",
    scroll: "Runterscrollen",

    // ABOUT
    about_title: "Über mich",
    about_p1:
      "Ich habe einen Bachelor in Elektro- und Informationstechnik mit Schwerpunkt Energie- und Automatisierungstechnik. Aktuell studiere ich im Master Energienetze und Elektromobilität, um mein Wissen in modernen Energiesystemen, Stromnetzen und nachhaltiger Mobilität weiter zu vertiefen.",
    about_p2:
      "Meine Interessen liegen in der Entwicklung und Optimierung intelligenter Energieinfrastrukturen, Automatisierungssysteme und innovativer Technologien für zuverlässige, effiziente und nachhaltige Netze. Durch Studienprojekte und praktische Arbeit setze ich Theorie gerne in reale Lösungen um.",
    about_p3:
      "Als zukünftiger Elektroingenieur erweitere ich kontinuierlich meine technischen Fähigkeiten, lerne neue Tools und stärke meine Kompetenz, robuste und effiziente Lösungen zu entwickeln. Dieses Portfolio zeigt meinen Weg stetig in Entwicklung getragen von Neugier und Zielorientierung.",

    // STATS
    stat_degree: "B.Eng",
    stat_degree_lbl: "Energie & Automatisierung ",
    stat_master: "M.Sc",
    stat_master_lbl: "Energienetze & Elektromobilität ",
    stat_years: "1+",
    stat_years_lbl: "Jahre Erfahrung",
    stat_projects: "5+",
    stat_projects_lbl: "Projekte abgeschlossen",

    // SKILLS
    skills_title: "Skills & Expertise",
    skills_col1: "Development",
    skills_col2: "Engineering",
    skills_col3: "Tools",

    // SHOWCASE
    showcase_title: "Portfolio Showcase",
    showcase_sub: "Zertifikate, Erfolge und technische Skills auf einen Blick.",
    tab_awards: "Erfolge",
    tab_certs: "Zertifikate",
    tab_tech: "Technische Skills",

    // EXPERIENCE
    exp_title: "Erfahrung",

    // CONTACT
    contact_title: "Kontakt",
    contact_intro:
      "Ich freue mich immer über neue Projekte und Möglichkeiten. Wenn du eine Frage hast oder einfach Hallo sagen willst, melde dich gerne!",
    lbl_email: "E-Mail",
    lbl_location: "Ort",
    lbl_linkedin: "LinkedIn",
    val_location: "Regensburg, Deutschland",
    val_linkedin: "Abiathar Mekem",
    f_name: "Name",
    f_email: "E-Mail",
    f_subject: "Betreff",
    f_message: "Nachricht",
    f_send: "Senden",
    ph_name: "Dein Name",
    ph_email: "Deine E-Mail",
    ph_subject: "Betreff",
    ph_message: "Deine Nachricht",

    // FOOTER
    rights: "Alle Rechte vorbehalten.",
    tagline: "Elektroingenieur • Energie • Automatisierung • Elektromobilität"
  },

  en: {
    // NAV
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_showcase: "Portfolio",
    nav_experience: "Experience",
    nav_contact: "Contact",

    // HERO
    hero_name: "Abiathar Mekem",
    hero_role: "Electrical Engineer • Energy Networks • Automation • Electromobility",
    hero_text:
      "Exploring the intersection of electrical engineering, energy networks, and electromobility through hands-on projects and practical engineering applications. Passionate about designing and optimizing intelligent energy systems, automation solutions, and sustainable technologies that support the transition toward modern and efficient electrical infrastructures.",
    btn_projects: "View Portfolio",
    btn_contact: "Contact Me",
    scroll: "Scroll Down",

    // ABOUT
    about_title: "About Me",
    about_p1:
      "I hold a Bachelor's degree in Electrical and Information Engineering, specialized in Energy and Automation Technology. I am currently pursuing a Master's degree in Energy Networks and Electromobility to deepen my expertise in modern energy systems, power grids, and sustainable mobility solutions.",
    about_p2:
      "My interests focus on developing and optimizing intelligent energy infrastructures, automation systems, and innovative technologies that enable reliable, efficient, and sustainable power networks. Through academic projects and practical engineering work, I enjoy turning theory into real-world solutions.",
    about_p3:
      "As a future electrical engineer, I continuously expand my technical skills, explore new tools, and strengthen my ability to design robust and efficient energy solutions. This portfolio reflects my journey always evolving driven by passion and purpose.",

    // STATS
    stat_degree: "B.Eng",
    stat_degree_lbl: "Energy & Automation ",
    stat_master: "M.Sc",
    stat_master_lbl: "Energy Networks & Electromobility ",
    stat_years: "1+",
    stat_years_lbl: "Years Experience",
    stat_projects: "5+",
    stat_projects_lbl: "Projects Completed",

    // SKILLS
    skills_title: "Skills & Expertise",
    skills_col1: "Development",
    skills_col2: "Engineering",
    skills_col3: "Tools",

    // SHOWCASE
    showcase_title: "Portfolio Showcase",
    showcase_sub: "Discover my certificates, achievements, and technical skills.",
    tab_awards: "Achievements",
    tab_certs: "Certificates",
    tab_tech: "Technical skills",

    // EXPERIENCE
    exp_title: "Experience",

    // CONTACT
    contact_title: "Get In Touch",
    contact_intro:
      "I’m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!",
    lbl_email: "Email",
    lbl_location: "Location",
    lbl_linkedin: "LinkedIn",
    val_location: "Regensburg, Germany",
    val_linkedin: "Abiathar Mekem",
    f_name: "Name",
    f_email: "Email",
    f_subject: "Subject",
    f_message: "Message",
    f_send: "Send Message",
    ph_name: "Your name",
    ph_email: "Your email",
    ph_subject: "Subject",
    ph_message: "Your message",

    // FOOTER
    rights: "All Rights Reserved.",
    tagline: "Electrical Engineer • Energy • Automation • Electromobility"
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  localStorage.setItem("portfolio_lang", lang);
}

const saved = localStorage.getItem("portfolio_lang") || "en";
langSelect.value = saved;
applyLang(saved);
langSelect.addEventListener("change", (e) => applyLang(e.target.value));

// ---------- Particle background ----------
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let W = 0, H = 0;

function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function rand(min,max){ return Math.random()*(max-min)+min; }

const particles = [];
const N = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 12000));

for(let i=0;i<N;i++){
  particles.push({
    x: rand(0,W),
    y: rand(0,H),
    r: rand(1.2, 3.8),
    vx: rand(-0.35, 0.35),
    vy: rand(-0.20, 0.20),
    a: rand(0.25, 0.75),
    hue: Math.random() < 0.75 ? 210 : 305
  });
}

function tick(){
  ctx.clearRect(0,0,W,H);

  const g = ctx.createRadialGradient(W*0.5,H*0.35, 50, W*0.5,H*0.5, Math.max(W,H));
  g.addColorStop(0, "rgba(8,16,36,0)");
  g.addColorStop(1, "rgba(8,16,36,0.65)");
  ctx.fillStyle = g;
  ctx.fillRect(0,0,W,H);

  for(const p of particles){
    p.x += p.vx; p.y += p.vy;
    if(p.x < -10) p.x = W+10;
    if(p.x > W+10) p.x = -10;
    if(p.y < -10) p.y = H+10;
    if(p.y > H+10) p.y = -10;

    ctx.beginPath();
    ctx.fillStyle = `hsla(${p.hue}, 70%, 68%, ${p.a})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(tick);
}
tick();