 export function notification(){
 
 const $button = document.getElementById("btn-notifica");

 $button.addEventListener("click", () => {
  const $inputs = document.getElementById("login-box");
  const $form = document.querySelector(".formulario")
  $inputs.style.width = "100%";
  setTimeout(height, 500);

  function height() {
    $inputs.style.height = "100%";
    $inputs.style.padding = "50px";
    if(window.innerWidth<1000){
    $form.style.height = "500px";
    }
    setTimeout(() => {
      $inputs.style.borderBottom = "none";
      $button.innerHTML = 
      `
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        CONFIRMAR!
      `;
    }, 400);
  }

});
}
