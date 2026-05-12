function parimpar(){
    let numero = parseFloat(prompt("Digite um numero (inteiro):"));
    if (numero % 2 == 0) {
        alert("O numero é par");
        numero += 1;
        alert("O numero impar é " + numero);
    } else {
        alert("O numero é impar");
        numero += 1;
        alert("O numero par é "+ numero);
    }
}