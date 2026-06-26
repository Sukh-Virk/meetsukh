const themeButton = document.querySelector(".theme-btn");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDark ? "☀" : "☾";
});

const hero = document.querySelector(".hero");
const leftCharacter = document.querySelector(".character-left");
const rightCharacter = document.querySelector(".character-right");

hero?.addEventListener("mousemove", (event) => {
  const rect = hero.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  leftCharacter.style.translate = `${x * -10}px ${y * -8}px`;
  rightCharacter.style.translate = `${x * 10}px ${y * -8}px`;
});

hero?.addEventListener("mouseleave", () => {
  leftCharacter.style.translate = "0 0";
  rightCharacter.style.translate = "0 0";
});