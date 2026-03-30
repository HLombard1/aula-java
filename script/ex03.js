    let ganhoa = 0;
    let gastoa = 0;
    let saldoa = 0;
function anoGay() {
    for (let i=0; i<12; i++) {
        let ganhom = parseInt(prompt("digite os ganhos do mes: " + i));
        let gastom = parseInt(prompt("digite os gastos do mes: " + i));

        ganhoa += ganhom;
        gastoa += gastom;
        saldoa = ganhoa - gastoa;
    }

    if (saldoa < 0){
        alert("A empresa lucrou");
    }else {
        alert("tão devendo");
    }
    


}