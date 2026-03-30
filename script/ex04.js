function valores() {
    let numero = [];
    
    for (let i=0; i<4; i++) {

        numero[i]= parseInt(prompt("digite um numero inteiro: " + i));

    }


    numero.sort((a, b) =>  b - a);

    alert(numero);
        
}