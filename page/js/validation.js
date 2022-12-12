const $msg = document.querySelector('.msg')
const $user = document.querySelector('.user')
const $email = document.querySelector('.email')
const $cell = document.querySelector('.cell')
const $cep = document.querySelector('.cep')
const $button = document.querySelector("#btn-notifica");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w*)*$/;


export function validation(){
    
    $button.onclick= () => {
      if($button.classList.contains('accepted')){
        validaUser()
        validaCell()
        validaEmail()
        validaCep($cep.value)
        $button.removeEventListener('click')
      };
    }

  function validaUser(){
    if($user.value.length<2){
      setError($user)
    }else{
      removeError($user)
    }
  }
  
  function validaCell(){
    if($cell.value.length!==11 || isNaN($cell.value)){
      setError($cell)
    }else{
      removeError($cell)
    }
  }


  function validaEmail(){
    if(emailRegex.test($email.value)){
      removeError($email)
    }else{
      setError($email)
    }
  }

}

async function validaCep(cep){
  try{
      let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      let data = await response.json()
      const $map = document.querySelector('.map')
      const $logradouro = document.querySelector('.logradouro')
      const $bairro = document.querySelector('.bairro')
      const $local = document.querySelector('.localidade-uf')

      $map.style.width = "100%";
      setTimeout(height, 500);
    
      function height() {
        $map.style.height = "100px";
        setInterval(()=>{
          $map.style.borderBottom = "none";
        },500)
      }

      $logradouro.innerHTML = data.logradouro
      $bairro.innerHTML = data.bairro
      $local.innerHTML = `${data.localidade}-${data.uf}`

      removeError($cep)

  } catch(erro){
      throw  (setError($cep))
  }
}


function setError(input){
  input.classList.add('error')
  $msg.innerHTML="Preencha os campos corretamente!"
}

function removeError(input){
  input.classList.remove('error')
}

