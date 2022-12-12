const $header = document.querySelector("#header");
const $menu = document.querySelector("#menuHamburguer");
let opened = false;

$menu.onclick = () => {
  opened = !opened;
  $header.classList.toggle("active");
};

export function initHeader() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      $header.style.backgroundColor = "var(--color-tertiary)";
      $header.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.473)";
    } else {
      $header.style.backgroundColor = "transparent";
      $header.style.boxShadow = "none";
    }
  });
}
