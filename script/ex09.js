function kebab(){
    let n1 = 4;
    let n2 = 2;
    let maior;
    let menor;
    if (n1 > n2){
        maior = n1;
        menor = n2;
    } else {
        maior = n2;
        menor = n1;
    }
    console.log("O número maior é: " + maior + ", o número menor é: "+ menor);
}