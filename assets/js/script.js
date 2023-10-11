const navbarMenu = document.querySelector(".navbar__menu");
const navbarBtn = document.querySelector(".navbar__btn");
const navLinks = document.querySelectorAll(".nav__link");
const skillsInner = document.querySelector(".skills__inner");
const contactFormInput = document.querySelector(".contact__form-input");
const contactFormBtn = document.querySelector(".contact__form-btn");

navbarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle("show");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    navbarMenu.classList.remove("show");
    link.classList.add("active");
  });
});

const skillsContent = Array.from(skillsInner.children);

skillsContent.forEach((item) => {
  const duplicate = item.cloneNode(true);
  skillsInner.appendChild(duplicate);
});

contactFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    `https://wa.me/6285936574870/?text=${contactFormInput.value}`,
    "_blank"
  );
});
