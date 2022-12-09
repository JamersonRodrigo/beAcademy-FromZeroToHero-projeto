
let $menuMobile = document.getElementById("header")
let aberto=false

function ativaDesativa(){
    if (aberto ===true){
        $menuMobile.classList.remove("ativado")
        aberto=false
    }else if(aberto===false){
        $menuMobile.classList.add("ativado")
        aberto=true
    }
}



function header(){
    const header=document.getElementById("header")
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 0){
            $menuMobile.style.backgroundColor="var(--color-tertiary)"
            $menuMobile.style.boxShadow="3px 3px 5px rgba(0, 0, 0, 0.473)"
        }else{
            $menuMobile.style.backgroundColor="transparent"
            $menuMobile.style.boxShadow="none"
        }
    })
}

window.addEventListener('load',header)



const slide={

    init:function(){
        this.imgs=[]
        this.preCarregamento()
        this.selecionaObjetos()
        this.carregaImg(this.imgAtual)
        this.tmp=setInterval(() => {
            this.imgAtual++
            if(this.imgAtual>this.maxImg){
                this.imgAtual=0;
            }
            this.carregaImg(this.imgAtual);
        }, 3000);

    },

    preCarregamento:function(){
        let s=1;
        for(let i=0;i<4;i++){
            this.imgs[i]=new Image()
            this.imgs[i].src="./assets/slide"+s+".jpg"
            s++;
        }
    },

    selecionaObjetos:function(){
        this.$slide=document.getElementById("section1")
        this.imgAtual=0
        this.maxImg=this.imgs.length
        

    },

    carregaImg:function(n){
        this.$slide.style.backgroundImage="url('"+this.imgs[n].src+"')"
    }

}
slide.init()


const btnscroll={
    activate:function(){
        this.$btn=document.querySelector("#btnscroll")
        this.$btn.addEventListener('click',()=>{
            window.scroll({top:-window.innerHeight, behavior: "smooth"})
        })
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 0){
                this.$btn.style.opacity="100"
            }else{
                this.$btn.style.opacity="0"
            }
        })
    }
}
btnscroll.activate()




const $button=document.getElementById("btn-notifica")


$button.addEventListener("click",()=>{
    const $form=document.getElementById('login-box')
    $form.style.width="100%"
    setTimeout(height,500)

    function height(){
    $form.style.height="100%"
    $form.style.padding="50px"
    setTimeout(()=>{
        $form.style.borderBottom="none"
        $button.innerHTML="COMFIRMAR!"
    },400)
    }
    
})


