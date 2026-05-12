function sorvete() {
    let escolha = prompt("a - chocolate b - morango c - creme d - manga e - melancia f - vanilla ice g - ceu azul h - brownie i - hawaiano").toLowerCase();
    switch (escolha) {
        case "a":
        case "chocolate":
            alert("valor R$1,50");
            break;
        case "b":
        case "morango":
            alert("valor R$2,50");
            break;
        case "c":
        case "creme":
            alert("valor R$2,50");
            break;
        case "d":
        case "manga":
            alert("valor R$3,20");
            break;
        case "e":
        case "melancia":
            alert("valor R$3,40");
            break;
        case "f":
        case "vanilla ice":
            alert("valor R$3,00");
            break;
        case "g":
        case "ceu azul":
            alert("valor R$3,60");
            break;
        case "h":
        case "brownie":
            alert("valor R$4,00");
            break;
        case "i":
        case "hawaiano":
            alert("valor R$5,00");
            break;
        default:
            alert("valor inválido!");
    }
}