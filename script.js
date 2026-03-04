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
    { img: "assets/awards/award1.jpg", title: "Achievement / Award", desc: "Add a short description here.", meta: "2026" },
    { img: "assets/awards/award2.jpg", title: "Achievement / Award", desc: "Add a short description here.", meta: "2025" },
    { img: "assets/awards/award3.jpg", title: "Achievement / Award", desc: "Add a short description here.", meta: "2025" },
  ],
  certs: [
    { img: "assets/certs/cert1.jpg", title: "Certificate", desc: "Course / Provider", meta: "2025" },
    { img: "assets/certs/cert2.jpg", title: "Certificate", desc: "Course / Provider", meta: "2025" },
    { img: "assets/certs/cert3.jpg", title: "Certificate", desc: "Course / Provider", meta: "2024" },
  ],
  tech: [
    { icon: "🐍", label: "Python" },
    { icon: "</>", label: "C" },
    { icon: "</>", label: "C++" },
    { icon: "🌐", label: "HTML5" },
    { icon: "🎨", label: "CSS3" },
    { icon: "JS", label: "JavaScript" },
    { icon: "⚙️", label: "TIA Portal" },
    { icon: "📊", label: "MATLAB" },
    { icon: "🧠", label: "SQL" },
    { icon: "🔌", label: "LTspice" },
    { icon: "🧩", label: "KiCad" },
    { icon: "🧱", label: "Inventor" },
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
    role: "Bachelorand / Werkstudent",
    company: "LPlusR GmbH, Parkstein",
    date: "März 2025 – laufend",
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

// ---------- Contact form -> mailto ----------
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get("name");
  const email = fd.get("email");
  const subject = fd.get("subject");
  const message = fd.get("message");

  const mailto = `mailto:mekemabiathar@gmail.com?subject=${encodeURIComponent(subject)}&body=${
    encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
  }`;

  window.location.href = mailto;
});

// ---------- i18n ----------
const langSelect = document.getElementById("langSelect");

const I18N = {
  fr: {
    nav_home:"Accueil", nav_about:"À propos", nav_skills:"Compétences", nav_showcase:"Portfolio", nav_experience:"Expérience", nav_contact:"Contact",

    hero_name:"Abiathar Mekem",
    hero_role:"Ingénieur électricien • Énergie & Automatisation",
    hero_text:"Master Énergie & Électromobilité (OTH Regensburg). Toujours Werkstudent chez LPlusR. Projet principal : commande shuttle via Siemens PLC (SCL).",
    btn_projects:"Voir Portfolio", btn_contact:"Me contacter", btn_cv:"Télécharger le CV",
    scroll:"Descendre",

    about_title:"À propos",
    about_p1:"Je suis ingénieur orienté automatisation industrielle et systèmes énergétiques. J’aime construire une logique PLC robuste, analyser les données et livrer des solutions fiables en environnement industriel.",
    about_p2:"J’ai terminé mon Bachelor à OTH Regensburg et je fais maintenant un Master en Énergie & Électromobilité. Je travaille toujours comme Werkstudent chez LPlusR, où j’ai aussi réalisé mon sujet de commande shuttle.",
    stat_degree:"B.Eng", stat_degree_lbl:"Bachelor terminé",
    stat_master:"M.Sc", stat_master_lbl:"Master en cours",
    stat_focus:"PLC", stat_focus_lbl:"Focus principal",

    skills_title:"Compétences & Expertise",
    skills_col1:"Développement", skills_col2:"Ingénierie", skills_col3:"Outils",

    showcase_title:"Portfolio Showcase",
    showcase_sub:"Découvre mes certificats, réalisations et compétences techniques.",
    tab_awards:"Prix & Réalisations", tab_certs:"Certificats", tab_tech:"Compétences techniques",

    exp_title:"Expérience",

    contact_title:"Contact",
    contact_intro:"Je suis toujours intéressé par de nouveaux projets et opportunités. Si tu as une question ou si tu veux juste dire bonjour, n’hésite pas à me contacter !",
    lbl_email:"Email", lbl_location:"Lieu", lbl_linkedin:"LinkedIn", lbl_cv:"CV",
    val_location:"Regensburg, Allemagne", val_linkedin:"Abiathar Mekem", val_cv:"Ouvrir le CV",
    f_name:"Nom", f_email:"Email", f_subject:"Objet", f_message:"Message", f_send:"Envoyer",
    ph_name:"Ton nom", ph_email:"Ton email", ph_subject:"Objet", ph_message:"Ton message",
    f_note:"Ce formulaire ouvre ton application mail (mailto). On pourra connecter un vrai backend plus tard.",
    rights:"Tous droits réservés.",
    tagline:"Ingénieur électricien • Énergie • Automatisation • Data",
  },

  de: {
    nav_home:"Start", nav_about:"Über mich", nav_skills:"Skills", nav_showcase:"Portfolio", nav_experience:"Erfahrung", nav_contact:"Kontakt",

    hero_name:"Abiathar Mekem",
    hero_role:"Elektroingenieur • Energie & Automatisierung",
    hero_text:"Master Energie & Elektromobilität (OTH Regensburg). Weiterhin Werkstudent bei LPlusR. Fokus: Shuttle-Steuerung mit Siemens PLC (SCL).",
    btn_projects:"Portfolio ansehen", btn_contact:"Kontakt", btn_cv:"CV herunterladen",
    scroll:"Runterscrollen",

    about_title:"Über mich",
    about_p1:"Ich bin Elektroingenieur mit Fokus auf Industrie-Automatisierung und Energiesysteme. Ich entwickle gerne robuste PLC-Logik, analysiere Daten und setze Anforderungen in zuverlässige Lösungen um.",
    about_p2:"Bachelor an der OTH Regensburg abgeschlossen, aktuell Master Energie & Elektromobilität. Ich arbeite weiterhin als Werkstudent bei LPlusR, wo ich auch mein Shuttle-Thema umgesetzt habe.",
    stat_degree:"B.Eng", stat_degree_lbl:"Bachelor abgeschlossen",
    stat_master:"M.Sc", stat_master_lbl:"Master laufend",
    stat_focus:"PLC", stat_focus_lbl:"Hauptfokus",

    skills_title:"Skills & Expertise",
    skills_col1:"Development", skills_col2:"Engineering", skills_col3:"Tools",

    showcase_title:"Portfolio Showcase",
    showcase_sub:"Zertifikate, Erfolge und technische Skills auf einen Blick.",
    tab_awards:"Awards & Erfolge", tab_certs:"Zertifikate", tab_tech:"Technische Skills",

    exp_title:"Erfahrung",

    contact_title:"Kontakt",
    contact_intro:"Ich freue mich immer über neue Projekte und Möglichkeiten. Wenn du eine Frage hast oder einfach Hallo sagen willst, melde dich gerne!",
    lbl_email:"E-Mail", lbl_location:"Ort", lbl_linkedin:"LinkedIn", lbl_cv:"CV",
    val_location:"Regensburg, Deutschland", val_linkedin:"Abiathar Mekem", val_cv:"CV öffnen",
    f_name:"Name", f_email:"E-Mail", f_subject:"Betreff", f_message:"Nachricht", f_send:"Senden",
    ph_name:"Dein Name", ph_email:"Deine E-Mail", ph_subject:"Betreff", ph_message:"Deine Nachricht",
    f_note:"Dieses Formular öffnet dein E-Mail-Programm (mailto). Später können wir ein echtes Backend verbinden.",
    rights:"Alle Rechte vorbehalten.",
    tagline:"Elektroingenieur • Energie • Automatisierung • Data",
  },

  en: {
    nav_home:"Home", nav_about:"About", nav_skills:"Skills", nav_showcase:"Portfolio", nav_experience:"Experience", nav_contact:"Contact",

    hero_name:"Abiathar Mekem",
    hero_role:"Electrical Engineer • Energy & Automation",
    hero_text:"M.Sc. Energy & E-Mobility (OTH Regensburg). Still working student at LPlusR. Main project: shuttle control using Siemens PLC (SCL).",
    btn_projects:"View Portfolio", btn_contact:"Contact Me", btn_cv:"Download CV",
    scroll:"Scroll Down",

    about_title:"About Me",
    about_p1:"I’m an electrical engineer focused on industrial automation and energy systems. I enjoy building robust PLC logic, analyzing data, and delivering reliable solutions in industrial environments.",
    about_p2:"I completed my Bachelor at OTH Regensburg and I’m now doing a Master in Energy & E-Mobility. I’m still working as a working student at LPlusR, where I also developed my shuttle control topic.",
    stat_degree:"B.Eng", stat_degree_lbl:"Bachelor Completed",
    stat_master:"M.Sc", stat_master_lbl:"Master Ongoing",
    stat_focus:"PLC", stat_focus_lbl:"Main Focus",

    skills_title:"Skills & Expertise",
    skills_col1:"Development", skills_col2:"Engineering", skills_col3:"Tools",

    showcase_title:"Portfolio Showcase",
    showcase_sub:"Discover my certificates, achievements, and technical skills.",
    tab_awards:"Awards & Achievements", tab_certs:"Certificates", tab_tech:"Technical skills",

    exp_title:"Experience",

    contact_title:"Get In Touch",
    contact_intro:"I’m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!",
    lbl_email:"Email", lbl_location:"Location", lbl_linkedin:"LinkedIn", lbl_cv:"CV",
    val_location:"Regensburg, Germany", val_linkedin:"Abiathar Mekem", val_cv:"Open CV",
    f_name:"Name", f_email:"Email", f_subject:"Subject", f_message:"Message", f_send:"Send Message",
    ph_name:"Your name", ph_email:"Your email", ph_subject:"Subject", ph_message:"Your message",
    f_note:"This form opens your email app (mailto). We can connect a real backend later.",
    rights:"All Rights Reserved.",
    tagline:"Electrical Engineer • Energy • Automation • Data",
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