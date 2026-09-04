// Hamburger menu

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

// Demo-video

const demoButton = document.querySelector(".demo-button");
const demoModal = document.querySelector(".demo-modal");
const demoClose = document.querySelector(".demo-modal-close");
const demoVideo = document.querySelector(".demo-video");

demoButton.addEventListener("click", () => {
  demoModal.hidden = false;
  document.body.style.overflow = "hidden";

  demoVideo.play();
});

function closeDemo() {
  demoModal.hidden = true;

  demoVideo.pause();
  demoVideo.currentTime = 0;

  document.body.style.overflow = "";
}

demoClose.addEventListener("click", closeDemo);

demoModal.addEventListener("click", (event) => {
  if (event.target === demoModal) {
    closeDemo();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !demoModal.hidden) {
    closeDemo();
  }
});
