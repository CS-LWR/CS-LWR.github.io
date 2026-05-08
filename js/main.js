const data = window.siteData;

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function createElement(tag, className, html) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html !== undefined) element.innerHTML = html;
  return element;
}

function renderStats() {
  const container = qs("#heroStats");
  container.innerHTML = data.stats
    .map(
      (item) => `
        <div class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>`
    )
    .join("");
}

function renderAbout() {
  qs("#aboutText").textContent = data.about;

  qs("#skillTags").innerHTML = data.skills
    .map((skill) => `<span class="tag">${skill}</span>`)
    .join("");
}

function cardTemplate(item) {
  const tagHtml = (item.tags || []).map((tag) => `<span>${tag}</span>`).join("");
  return `
    <article class="content-card reveal">
      <div class="card-image" data-image="${item.image || ""}"></div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-meta">${tagHtml}</div>
      </div>
    </article>
  `;
}

function renderResearch() {
  qs("#researchGrid").innerHTML = data.research.map(cardTemplate).join("");
}

function renderProjectFilters() {
  const container = qs("#projectFilters");
  container.innerHTML = data.projectCategories
    .map((category, index) => `<button class="filter-button ${index === 0 ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    qsa(".filter-button", container).forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.category);
  });
}

function renderProjects(category = "All") {
  const projects = category === "All" ? data.projects : data.projects.filter((project) => project.category === category);
  qs("#projectGrid").innerHTML = projects.map(cardTemplate).join("");
  applyDynamicImages();
  observeRevealElements();
}

function timelineTemplate(item) {
  return `
    <article class="timeline-item reveal">
      <div class="timeline-date">${item.date}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function renderTimelines() {
  qs("#publicationList").innerHTML = data.publications.map(timelineTemplate).join("");
  qs("#experienceList").innerHTML = data.experience.map(timelineTemplate).join("");
}

function renderContacts() {
  qs("#contactLinks").innerHTML = data.contacts
    .map((contact) => `<a class="contact-link" href="${contact.href}" target="_blank" rel="noreferrer">${contact.label}</a>`)
    .join("");
}

function applyDynamicImages() {
  qsa("[data-image]").forEach((element) => {
    const src = element.dataset.image;
    if (!src) return;

    const image = new Image();
    image.onload = () => {
      element.style.backgroundImage = `url('${src}')`;
      element.classList.add("has-image");
    };
    image.src = src;
  });
}

function setupMenu() {
  const toggle = qs("#menuToggle");
  const links = qs("#navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupTheme() {
  const button = qs("#themeToggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
  button.textContent = savedTheme === "dark" ? "Light" : "Dark";

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    button.textContent = nextTheme === "dark" ? "Light" : "Dark";
  });
}

function setupActiveNav() {
  const sections = qsa("main section[id]");
  const links = qsa(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

let revealObserver;
function observeRevealElements() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  qsa(".reveal:not(.visible)").forEach((element) => revealObserver.observe(element));
}

function init() {
  qs("#currentYear").textContent = new Date().getFullYear();
  renderStats();
  renderAbout();
  renderResearch();
  renderProjectFilters();
  renderProjects();
  renderTimelines();
  renderContacts();
  setupMenu();
  setupTheme();
  setupActiveNav();
  applyDynamicImages();
  observeRevealElements();
}

window.addEventListener("DOMContentLoaded", init);
