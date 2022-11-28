function clicou(){
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let res = document.getElementById('res');
    let sexo = document.getElementsByName('sex');
    let num1 = Number(altura.value);
    let num2 = Number(peso.value);
    let imc = num2 / num1 ** 2
    let total = imc.toFixed(2)

    if(sexo[0].checked){
        res.innerHTML = `Você é um homem e  seu IMC é: ${total}<br>
        -Abaixo do peso: < 20.7
        <br>
        -Peso normal: 20.7 - 26.4
        <br>
        -Marginalmente acima do peso: 26.4 - 27.8
        <br>
        -Acima do peso ideal: 27.8 - 31.1 
        <br> 
        -Obeso: > 31.1
        `
    } else if(sexo[1].checked){
        res.innerHTML = `Você é uma mulher e  seu IMC é: ${total}<br>
        -Abaixo do peso: < 19.1
        <br>
        -Peso normal: 19.1 - 25.8
        <br>
        -Marginalmente acima do peso: 25.8 - 27.3
        <br>
        -Acima do peso ideal: 27.3 - 32.3
        <br> 
        -Obeso: > 32.3
        `
    }
}