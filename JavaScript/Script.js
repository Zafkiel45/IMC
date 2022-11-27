function clicou(){
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let res = document.getElementById('res');
    let num1 = Number(altura.value);
    let num2 = Number(peso.value);
    let imc = num2 / num1 ** 2
    let total = imc.toFixed(2)

    res.innerHTML = `Seu IMC é: ${total} <br> Menor que 18.5 - Abaixo do peso ;
    <br>
    Entre 18.5 e 24.9 - Peso normal ;
    <br>
    Entre 25.0 e 29.9 - Pré-obesidade ;
    <br>
    Entre 30.0 e 34.9 - Obesidade Grau 1 ;
    <br>
    Entre 35.0 e 39.9 - Obesidade Grau 2 ;
    <br>
    Acima de 40 - Obesidade Grau 3`
}