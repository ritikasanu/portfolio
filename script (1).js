/* ==========================================
   EASY PLACEHOLDERS (EDIT THESE FIRST)
   ========================================== */
const SITE_CONFIG = {
  trainingInstitute: "Ardent Computech Pvt. Ltd.",
  trainerName: "SK SAHIL",
  trainerRole: "Full Stack AI Developer",
  collegeName: "GNIT Kolkata",
  department: "ECE Engineering",
  year: "2nd Year",
  trainingDuration: "10 Days",
  mcqsPracticed: 60,
  toolsExplored: 13,

  heroTitle: "AI/ML Student Portfolio",
  heroBadge: "10 Days AI/ML Training Completed",
  heroSubtitle: "GNIT Kolkata | 2nd Year ECE | Ardent Computech Pvt. Ltd.",

  aboutPrimary:
    "We are 2nd year ECE Engineering students from GNIT, Kolkata, who completed an intensive 10-day AI/ML training program at Ardent Computech Pvt. Ltd. with a strong focus on practical implementation.",
  aboutSecondary:
    "Across the training journey, we moved from fundamentals to guided project execution, practiced 60 MCQs, explored essential tools, and built confidence to pursue AI-focused careers with a portfolio-first mindset.",

  trainerLine:
    "Mentored students through AI, Machine Learning, and full-stack project workflows with a practical, industry-oriented approach focused on clarity, consistency, and real implementation.",

  footerSocialLinks: [
    {
      label: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/"
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/"
    },
    {
      label: "Training Institute",
      icon: "fa-solid fa-building",
      url: "https://ardentcollaborations.com/"
    }
  ]
};

// Easy placeholders for student names + links
const STUDENTS = [
  {
    name: "Student Name 1",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Focused on practical Python workflows and data-driven project development with a growing interest in ML engineering.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  },
  {
    name: "Student Name 2",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Built strong fundamentals in NumPy, Pandas, and model basics while exploring automation and applied AI use cases.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  },
  {
    name: "Student Name 3",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Interested in computer vision and intelligent systems, with a project-first learning approach and clean coding practice.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  }
];

/* ==========================================
   Reusable Data Models (Duplicate Easily)
   ========================================== */
const JOURNEY_POINTS = [
  "Students are from GNIT, Kolkata and currently in 2nd Year ECE Engineering.",
  "Completed 10 days of AI/ML training at Ardent Computech Pvt. Ltd.",
  "Built beginner-to-intermediate projects using Python, data analysis, and model basics.",
  "Practiced 60 MCQs for concept reinforcement and technical confidence.",
  "Trained by SK SAHIL (Full Stack AI Developer) through project-based learning.",
  "Future interests include Data Science, Machine Learning, Agentic AI, Automation, and AI Engineering."
];

const SKILLS = [
  { name: "Python 3", note: "Core programming foundation", icon: "fa-brands fa-python" },
  { name: "Pandas", note: "Data cleaning and analysis", icon: "fa-solid fa-table" },
  { name: "NumPy", note: "Numerical computing", icon: "fa-solid fa-superscript" },
  { name: "OpenCV", note: "Image and vision workflows", icon: "fa-solid fa-camera" },
  { name: "Matplotlib", note: "Visual plotting basics", icon: "fa-solid fa-chart-line" },
  { name: "Keras", note: "Neural network APIs", icon: "fa-solid fa-network-wired" },
  { name: "TensorFlow", note: "Model development ecosystem", icon: "fa-solid fa-brain" },
  { name: "Seaborn", note: "Statistical visualization", icon: "fa-solid fa-chart-column" },
  { name: "Scikit-learn", note: "Classical ML toolkit", icon: "fa-solid fa-robot" },
  { name: "Linux", note: "Command-line development", icon: "fa-brands fa-linux" },
  { name: "Git", note: "Version control discipline", icon: "fa-solid fa-code-branch" },
  { name: "GitHub", note: "Portfolio and collaboration", icon: "fa-brands fa-github" },
  { name: "Google Colab", note: "Cloud notebooks for ML", icon: "fa-solid fa-cloud" }
];

const STATS = [
  { label: "Days Training", value: 10, suffix: "", icon: "fa-solid fa-calendar-days" },
  { label: "Projects Built", value: 9, suffix: "", icon: "fa-solid fa-diagram-project" },
  { label: "MCQs Practiced", value: 60, suffix: "", icon: "fa-solid fa-list-check" },
  { label: "Tools Explored", value: 13, suffix: "+", icon: "fa-solid fa-toolbox" }
];

const PROJECTS = [
  {
    id: 1,
    title: "Student Intro Generator",
    icon: "fa-solid fa-id-card",
    description:
      "Created a Python-based profile intro generator that collects basic student details and formats professional self-introductions for portfolio and interview practice.",
    tags: ["Python", "String Handling", "CLI"],
    github: STUDENTS[0].github,
    linkedin: STUDENTS[0].linkedin,
    cv: STUDENTS[0].cv
  },
  {
    id: 2,
    title: "Smart Grade Calculator",
    icon: "fa-solid fa-graduation-cap",
    description:
      "Designed a grading utility that computes marks, percentages, and grade categories using logical conditions, making result interpretation faster and less error-prone.",
    tags: ["Python", "Logic", "Academic Utility"],
    github: STUDENTS[0].github,
    linkedin: STUDENTS[0].linkedin,
    cv: STUDENTS[0].cv
  },
  {
    id: 3,
    title: "Simple Calculator App",
    icon: "fa-solid fa-calculator",
    description:
      "Implemented a menu-driven calculator supporting arithmetic operations and input validation, reinforcing function design and clean code structure.",
    tags: ["Python", "Functions", "Input Validation"],
    github: STUDENTS[1].github,
    linkedin: STUDENTS[1].linkedin,
    cv: STUDENTS[1].cv
  },
  {
    id: 4,
    title: "Contact Book Mini Project",
    icon: "fa-solid fa-address-book",
    description:
      "Built a contact management mini-project with add, update, delete, and search capabilities to practice list/dictionary operations and modular coding.",
    tags: ["Python", "CRUD", "Data Structures"],
    github: STUDENTS[1].github,
    linkedin: STUDENTS[1].linkedin,
    cv: STUDENTS[1].cv
  },
  {
    id: 5,
    title: "Student Performance Data Analyzer",
    icon: "fa-solid fa-chart-pie",
    description:
      "Analyzed student performance datasets using Pandas and Matplotlib to uncover trends across attendance, marks, and subject-level strengths.",
    tags: ["Pandas", "Matplotlib", "Data Analysis"],
    github: STUDENTS[1].github,
    linkedin: STUDENTS[1].linkedin,
    cv: STUDENTS[1].cv
  },
  {
    id: 6,
    title: "Sales and Performance Dashboard",
    icon: "fa-solid fa-chart-area",
    description:
      "Created a beginner dashboard-style analysis workflow with grouped sales KPIs and visual summaries to improve business-oriented data storytelling.",
    tags: ["Pandas", "Seaborn", "Visualization"],
    github: STUDENTS[2].github,
    linkedin: STUDENTS[2].linkedin,
    cv: STUDENTS[2].cv
  },
  {
    id: 7,
    title: "House Price Prediction Mini Model",
    icon: "fa-solid fa-house-chimney",
    description:
      "Trained a regression-based machine learning model to estimate house prices from basic features, with preprocessing and error evaluation.",
    tags: ["Scikit-learn", "Regression", "Feature Engineering"],
    github: STUDENTS[2].github,
    linkedin: STUDENTS[2].linkedin,
    cv: STUDENTS[2].cv
  },
  {
    id: 8,
    title: "Spam Message Detector",
    icon: "fa-solid fa-envelope-open-text",
    description:
      "Developed a text classification mini-project for spam detection using vectorization and a baseline ML classifier for binary prediction.",
    tags: ["NLP Basics", "Classification", "Scikit-learn"],
    github: STUDENTS[2].github,
    linkedin: STUDENTS[2].linkedin,
    cv: STUDENTS[2].cv
  },
  {
    id: 9,
    title: "Emotion Detection Project",
    icon: "fa-solid fa-face-smile",
    description:
      "Built a facial emotion detection mini-project using OpenCV and a basic deep learning pipeline to classify expressions like happy, sad, and neutral from image frames.",
    tags: ["OpenCV", "TensorFlow", "Computer Vision"],
    github: STUDENTS[0].github,
    linkedin: STUDENTS[0].linkedin,
    cv: STUDENTS[0].cv
  }
];

const CAREER_VISION = [
  {
    title: "Data Scientist",
    description: "Turn raw data into actionable decisions through analysis, experimentation, and storytelling.",
    icon: "fa-solid fa-database"
  },
  {
    title: "Machine Learning Engineer",
    description: "Build and optimize reliable ML pipelines ready for real deployment scenarios.",
    icon: "fa-solid fa-microchip"
  },
  {
    title: "AI Engineer",
    description: "Design intelligent systems that combine models, APIs, and product usability.",
    icon: "fa-solid fa-brain"
  },
  {
    title: "Agentic AI Builder",
    description: "Create autonomous agent workflows for multi-step problem solving and productivity.",
    icon: "fa-solid fa-bolt"
  },
  {
    title: "Automation Enthusiast",
    description: "Automate repetitive workflows with Python and modern AI tooling for efficiency.",
    icon: "fa-solid fa-gears"
  }
];

/* ==========================================
   Render Helpers
   ========================================== */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function safeLink(url) {
  return url && typeof url === "string" ? url : "#";
}

/* ==========================================
   Populate Static Text
   ========================================== */
function applyConfigText() {
  const studentNames = STUDENTS.map((student) => student.name).join(", ");

  $("#heroTitle").textContent = SITE_CONFIG.heroTitle;
  $("#heroBadgeText").textContent = SITE_CONFIG.heroBadge;
  $("#heroSubtitle").textContent = SITE_CONFIG.heroSubtitle;
  $("#studentNamesLine").textContent = `Students: ${studentNames}`;

  $("#aboutTextPrimary").textContent = SITE_CONFIG.aboutPrimary;
  $("#aboutTextSecondary").textContent = SITE_CONFIG.aboutSecondary;

  $("#trainerHeading").textContent = `Trained by ${SITE_CONFIG.trainerName}`;
  $("#trainerSubtitle").textContent = SITE_CONFIG.trainerRole;
  $("#trainerLine").textContent = SITE_CONFIG.trainerLine;

  $("#footerMeta").textContent = `${SITE_CONFIG.collegeName} | ${SITE_CONFIG.trainingInstitute} | Trained by ${SITE_CONFIG.trainerName}`;
  $("#copyrightText").textContent = `© ${new Date().getFullYear()} ${SITE_CONFIG.collegeName} AI/ML Student Portfolio. All rights reserved.`;
}

/* ==========================================
   Theme Toggle (Dark / Light)
   ========================================== */
function initThemeToggle() {
  const themeToggle = $("#themeToggle");
  const icon = $("i", themeToggle);
  const label = $("span", themeToggle);
  const THEME_KEY = "portfolio-theme";

  function applyTheme(mode) {
    const isLight = mode === "light";
    document.body.classList.toggle("light-theme", isLight);
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    icon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
    label.textContent = isLight ? "Light" : "Dark";
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === "light" ? "light" : "dark");

  themeToggle.addEventListener("click", () => {
    const isCurrentlyLight = document.body.classList.contains("light-theme");
    const nextTheme = isCurrentlyLight ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}

/* ==========================================
   Render Journey List
   ========================================== */
function renderJourneyPoints() {
  const list = $("#journeyList");
  list.innerHTML = JOURNEY_POINTS.map(
    (point) => `
      <li>
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        <span>${point}</span>
      </li>
    `
  ).join("");
}

/* ==========================================
   Render Stats
   ========================================== */
function renderStats() {
  const container = $("#statsGrid");
  container.innerHTML = STATS.map(
    (item) => `
      <article class="stat-card reveal">
        <div class="stat-icon" aria-hidden="true"><i class="${item.icon}"></i></div>
        <p class="stat-value" data-counter data-target="${item.value}" data-suffix="${item.suffix}">0${item.suffix}</p>
        <p class="stat-label">${item.label}</p>
      </article>
    `
  ).join("");
}

/* ==========================================
   Render Skills
   ========================================== */
function renderSkills() {
  const container = $("#skillsGrid");
  container.innerHTML = SKILLS.map(
    (skill) => `
      <article class="skill-card reveal">
        <div class="skill-icon" aria-hidden="true"><i class="${skill.icon}"></i></div>
        <h3>${skill.name}</h3>
        <p>${skill.note}</p>
      </article>
    `
  ).join("");
}

/* ==========================================
   Render Projects
   ========================================== */
function renderProjects() {
  const container = $("#projectsGrid");

  container.innerHTML = PROJECTS.map(
    (project) => `
      <article class="project-card reveal tilt-card" data-tilt>
        <div class="project-head">
          <span class="project-number">${project.id}</span>
          <span class="project-accent" aria-hidden="true"><i class="${project.icon}"></i></span>
        </div>

        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="tag-list">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>

        <div class="project-actions">
          <a class="icon-btn" href="${safeLink(project.github)}" target="_blank" rel="noopener noreferrer" aria-label="Project student GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="icon-btn" href="${safeLink(project.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="Project student LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a class="cv-btn" href="${safeLink(project.cv)}" target="_blank" rel="noopener noreferrer" aria-label="Project student CV">
            <i class="fa-solid fa-file-arrow-down"></i>
            CV
          </a>
        </div>
      </article>
    `
  ).join("");
}

/* ==========================================
   Render Students
   ========================================== */
function renderStudents() {
  const container = $("#studentsGrid");

  container.innerHTML = STUDENTS.map((student) => {
    const hasImage = Boolean(student.image && student.image.trim().length);

    return `
      <article class="student-card reveal">
        <div class="student-top">
          <div class="student-photo" aria-label="${student.name} profile photo">
            ${
              hasImage
                ? `<img src="${student.image}" alt="${student.name}" loading="lazy" />`
                : `<span>${getInitials(student.name)}</span>`
            }
          </div>
          <div>
            <h3 class="student-name">${student.name}</h3>
            <p class="student-meta">${student.department} | ${student.year}</p>
          </div>
        </div>

        <p class="student-bio">${student.bio}</p>

        <div class="student-actions">
          <a class="icon-btn" href="${safeLink(student.github)}" target="_blank" rel="noopener noreferrer" aria-label="${student.name} GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="icon-btn" href="${safeLink(student.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="${student.name} LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a class="cv-btn" href="${safeLink(student.cv)}" target="_blank" rel="noopener noreferrer" aria-label="${student.name} CV">
            <i class="fa-solid fa-file-lines"></i>
            Download CV
          </a>
        </div>
      </article>
    `;
  }).join("");
}

/* ==========================================
   Render Vision Timeline
   ========================================== */
function renderVision() {
  const container = $("#visionTimeline");
  container.innerHTML = CAREER_VISION.map(
    (goal) => `
      <article class="vision-item reveal">
        <div class="vision-icon" aria-hidden="true"><i class="${goal.icon}"></i></div>
        <h3>${goal.title}</h3>
        <p>${goal.description}</p>
      </article>
    `
  ).join("");
}

/* ==========================================
   Render Footer Social
   ========================================== */
function renderFooterSocial() {
  const container = $("#footerSocialLinks");
  container.innerHTML = SITE_CONFIG.footerSocialLinks.map(
    (item) => `
      <a href="${safeLink(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
        <i class="${item.icon}"></i>
      </a>
    `
  ).join("");
}

/* ==========================================
   Interactions - Navbar + Scroll State
   ========================================== */
function initNavigation() {
  const header = $(".site-header");
  const menuToggle = $("#menuToggle");
  const navMenu = $("#navMenu");
  const navLinks = $$(".nav-link");
  const sections = $$("main section[id]");
  const backToTop = $("#backToTop");

  function handleScrollState() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 12);
    backToTop.classList.toggle("show", y > 450);
  }

  window.addEventListener("scroll", handleScrollState, { passive: true });
  handleScrollState();

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    }
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");
        const hasMatchingNavLink = navLinks.some((link) => link.getAttribute("href") === `#${id}`);
        if (!hasMatchingNavLink) return;

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    {
      threshold: 0.4,
      rootMargin: "-15% 0px -35% 0px"
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================
   Interactions - Scroll Reveal
   ========================================== */
function initReveal() {
  const revealItems = $$(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

/* ==========================================
   Interactions - Animated Counters
   ========================================== */
function initCounters() {
  const counters = $$("[data-counter]");
  if (!counters.length) return;

  function animateCounter(counter) {
    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || "";

    let startTime = null;
    const duration = 1400;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);

      counter.textContent = `${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.75 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/* ==========================================
   Interactions - Hero Particles + Parallax
   ========================================== */
function initHeroEffects() {
  const particleContainer = $("#heroParticles");
  const hero = $(".hero");
  const particleCount = window.innerWidth < 640 ? 16 : 28;

  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 16 + 12;
    const delay = Math.random() * -18;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const hue = i % 3 === 0 ? "71, 215, 201" : i % 3 === 1 ? "116, 169, 255" : "255, 195, 111";

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.background = `rgba(${hue}, ${Math.random() * 0.55 + 0.2})`;

    particleContainer.appendChild(particle);
  }

  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    particleContainer.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
  });

  hero.addEventListener("mouseleave", () => {
    particleContainer.style.transform = "";
  });
}

/* ==========================================
   Interactions - Tilt Cards
   ========================================== */
function initTiltCards() {
  const cards = $$("[data-tilt]");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      const rotateX = -(y * 7);
      const rotateY = x * 9;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/* ==========================================
   Bootstrap
   ========================================== */
function initApp() {
  applyConfigText();
  renderJourneyPoints();
  renderStats();
  renderSkills();
  renderProjects();
  renderStudents();
  renderVision();
  renderFooterSocial();

  initThemeToggle();
  initNavigation();
  initReveal();
  initCounters();
  initHeroEffects();
  initTiltCards();
}

document.addEventListener("DOMContentLoaded", initApp);
