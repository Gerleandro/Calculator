function insert(num) {// função para inserir os numeros e operadores na tela  
    let result = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = result + num;
}

function clean() {// função para limpar tudo na tela
    let clean = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = "";
}

function back() {// função para limpar o ultimo numero digitado
    let back = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = back.substring(0, back.length -1);
}

function squareRoot() {// função para calcular a raiz quadrada
    let squareRoot = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = parseInt(Math.sqrt(squareRoot));
}

function calculate() {//função para calcular e entregar o resultado
    let calculate = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = eval(calculate);
}