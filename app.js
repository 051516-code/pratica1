function hamburguer($hamburguer){

    let queijo = (100 * $hamburguer) / 1;
    let presunto = (165 * $hamburguer) / 1;
    let carne = 130 * $hamburguer

    console.log("para fazer : " + $hamburguer  + " sanduiches  precisa-se :")

    console.warn("queijo :" + queijo /1000 + "kg")
    console.warn("presunto :" + presunto/1000 + "kg")
    console.warn("carne :" + carne/1000 + "kg")
    
}


// hamburguer(3)


function numeroInvertido($a , $b){


    let  VA = $a ;
    let  VB = $b ;
    let  VC = VA;

    

    console.log( "valor de VA :" + VA)
        VA = VB
        console.log( "nuevo valor de VA :" + VA)
    console.log( "valor de VB :" + VB)
    console.log( "nuevo valor de VB :" + VC)
}

numeroInvertido(80 , 90)