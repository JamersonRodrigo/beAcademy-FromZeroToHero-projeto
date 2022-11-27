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
        var s=1;
        for(var i=0;i<3;i++){
            this.imgs[i]=new Image()
            this.imgs[i].src="../assets/slide"+s+".jpg"
            s++;
        }
    },

    selecionaObjetos:function(){
        this.$slide=document.getElementById("section1")
        this.imgAtual=0
        this.maxImg=this.imgs.length
        

    },

    carregaImg:function(img){
        this.$slide.style.backgroundImage="url('"+this.imgs[img].src+"')"
    }

}

slide.init()