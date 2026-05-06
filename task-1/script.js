const themeToggleButton = document.querySelector("#theme-toggle");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent =
    "Thanks for reaching out! I'll get back to you soon.";

  contactForm.reset();
});
