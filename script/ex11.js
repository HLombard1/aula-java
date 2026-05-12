function pay(){
    let salario = parseFloat(prompt("Diga seu salario: "));
    let liquido;

    if(salario <= 1000){
        liquido = salario - (salario*0.08);
        alert("Seu salario era: " + salario + "com um desconto de 8% do inss seu salario liquido é de: " + liquido);
    } else if (salario >= 1000.01 & salario <= 1500){
        liquido = salario - (salario*0.085);
        alert("Seu salario era: " + salario + "com um desconto de 8.5% do inss seu salario liquido é de: " + liquido);
    } else if(salario > 1500) {
          liquido = salario - (salario*0.09);
        alert("Seu salario era: " + salario + "com um desconto de 9% do inss seu salario liquido é de: " + liquido);
    } else {
        alert("Salario inválido")
    }
}