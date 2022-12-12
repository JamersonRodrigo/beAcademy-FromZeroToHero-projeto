export function notification(){
 
const $button = document.querySelector("#btn-notifica");

$button.addEventListener("click", () => {
  const $inputs = document.querySelector("#login-box");
  const $form = document.querySelector(".formulario")
  $inputs.style.width = "100%";
  setTimeout(height, 500);

  function height() {
    $inputs.style.height = "100%";
    $inputs.style.padding = "50px";
    if(window.innerWidth<1000){
    $form.style.height = "600px";
    }
    setTimeout(() => {
      $inputs.style.borderBottom = "none";
      $button.innerHTML = 
      `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        VERIFICAR!
      `;
  $button.classList.add('accepted')
    }, 400);

  }
  $button.removeEventListener('click')
});

}
