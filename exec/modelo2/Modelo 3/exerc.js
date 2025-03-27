var lista = document.getElementById("lista");
var res = document.getElementById("res");
var valores = [];

function adicionar() {
    var num = document.getElementById("num").value;
    if (num === "") {
        alert("Digite um número!");
    } else {
        num = Number(num);
        if (num < 1 || num > 100) {
            alert("Digite um número entre 1 e 100!");
        } else {
            valores.push(num);
            let item = document.createElement("option");
            item.text = `Valor ${num} adicionado.`;
            lista.appendChild(item);
        }
    }
}