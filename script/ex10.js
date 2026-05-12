function inss(){
    let nome = prompt("informe seu nome: ");
    let salario = parseFloat(prompt("informe seu salario bruto: "));
    let liquido = salario - (salario*0.08);

    alert(nome +" seu salário bruto é de "+ salario);
    alert("com o desconto do inss de 8% seu salario é: " + liquido);
}