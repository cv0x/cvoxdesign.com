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
    "Frontend vývoj",
    "Testování",
    "Design",
    "3D Modelování",
    "3D Tisk",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const typedSkills = new Typed(".multiple-text-skills", {
  strings: [
    "HTML, CSS, JavaScript",
    "Git, Docker",
    "Virtualizace - Proxmox, Linux",
    "SolidWorks, PrusaSlicer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000,
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
