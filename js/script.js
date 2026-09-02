const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  navToggle.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", isOpen);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
