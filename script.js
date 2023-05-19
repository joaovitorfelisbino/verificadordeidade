function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var anoatual = Number(txtano.value)
    var res = document.getElementById('res')
    
    if(anoatual > ano || anoatual < 1900){
        window.alert('[Erro] algo estar errado,verifique por favor')
    } else{
        var sexos = document.getElementsByName('radsex')
        var idade = ano - anoatual 
        var genero = ''
        var img = document.getElementById('img')

        if(sexos[0].checked){
            genero = 'homem'

            if(idade > 0 && idade < 12){
                img.innerHTML = "<img src='fotocriançam.jpg' class='fotoimg'>"
            } else if(idade > 12 && idade < 21){
                img.innerHTML = "<img src='fotojovemm.jpg' class='fotoimg'>"
            } else if(idade > 21 && idade < 45){
                img.innerHTML = "<img src='fotohomem.jpg' class='fotoimg'>"
            }else{
                img.innerHTML = "<img src='fotovelhom.jpg' class='fotoimg'>"
            }
        } else if(sexos[1].checked){
            genero = 'mulher'
             if(idade > 0 && idade <= 12){
                img.innerHTML = "<img src='fotocriançaf.jpg' class='fotoimg'>"
             } else if (idade > 12 && idade < 21 ){
                img.innerHTML = "<img src='fotojovemf.jpg' class='fotoimg'>"
             }else if(idade > 21 && idade < 45){
                img.innerHTML = "<img src='fotomulher.jpg' class='fotoimg'>"
             }else{
                img.innerHTML = "<img src='fotovelhaf.jpg' class='fotoimg'>"
             }
        
        } 
        res.innerHTML = (`detectamos ${genero} com ${idade} anos`)
    }
}