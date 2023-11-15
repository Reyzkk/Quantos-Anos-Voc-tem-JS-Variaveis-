function Verificar() {
    let ano = document.getElementById('ano').value;
    let nome = document.getElementById('nome').value;

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - ano;

    if (idade == anoAtual) {
        idade = "Coloque um ano de 1900, a 2023 :)"
    }

    else if (ano > anoAtual) {
        idade = "Provavelmente você veio do futuro :)"
    }
    else if (ano < 1900) {
        idade = "Provavelmente você é um homem das cavernas :)"
    }


    if (nome == "" || null) {
        nome = "Coloque seu Nome :)"
    } if (nome == "Alexandre") {
        nome = "Sou Eu kkk :)"
    }



    document.getElementById('seuNome').innerHTML = nome;
    document.getElementById("suaIdade").innerHTML = idade;


}