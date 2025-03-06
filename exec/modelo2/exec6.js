function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.getElementById('imagem');

    if (fano.value == 0 || fano.value > ano) {
        window.alert('Campo Inválido [Preencha Corretamente]')
        return;
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade <= 18) {
                img.src = 'modelo2/fotos/homem.jpg'
            } else if (idade > 18 && idade <= 60) {
                img.src = 'modelo2/fotos/jovem.jpg'
            } else {
                img.src = 'modelo2/fotos/idoso.jpg'
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
        } else {
            genero = "Não correspondido";
            img.src = ""
        }

        res.innerHTML = `Você tem ${idade} anos e é ${genero}.`;
    }
}
