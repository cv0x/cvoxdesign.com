/*multilanguage*/
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const elements = document.querySelectorAll("[data-lang-key]");
  let currentLang = localStorage.getItem("lang") || detectUserLanguage();

  function detectUserLanguage() {
    return navigator.language.startsWith("cs") ? "cs" : "en";
  }

  /*function to load translations*/
  function loadTranslations(lang) {
    fetch("translations.json")
      .then((response) => response.json())
      .then((translations) => {
        document.querySelectorAll("[data-lang-key]").forEach((el) => {
          const key = el.getAttribute("data-lang-key");
          if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
          }
        });
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);
      });
  }
  /*toggle language*/
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    loadTranslations(currentLang);
  });

  loadTranslations(currentLang);
});

/* toggle icon navbar*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* scroll section active link*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* remove toggle icon navbar when click link or scroll*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* scroll reveal*/
ScrollReveal({
  distance: "50px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "lright" });

/* typed js*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Development",
    "Manual Testing",
    "Automation Testing",
    "Quality Assurance",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*email js*/
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_lcpdqpo";
  const templateID = "template_qb16ktw";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
