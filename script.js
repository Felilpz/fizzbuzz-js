//Divisível por 3 > Fizz
//Divisível por 5 > Buzz
//Divisível por 3 e 5 > FizzBuzz
//Não divisível por 3 ou 5 >> entrada
//Não é um numero > não é um numero

let fb = window.document.getElementById("fizzbuzz")

function promptVersion() {
    let takeNumber = window.prompt("Digite o numero: ")

    if(takeNumber % 3 === 0 && takeNumber % 5 === 0) {
        window.alert("FizzBuzz")
    } else if(takeNumber % 3 === 0) { //tirar os 3 = caso nao de certo
        window.alert("Fizz")
    } else if(takeNumber % 5 === 0) {
        window.alert("Buzz")
    } else {
        window.alert("Não é divisível ou não é um número!")
    }
}

function loopVersion() {
    for(i = 1; i < 101; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            fb.innerHTML += `<p>FizzBuzz</p>`
        } else if(i % 3 === 0) {
            fb.innerHTML += `<p>Fizz</p>`
        } else if(i % 5 === 0) {
            fb.innerHTML += `<p>Buzz</p>`
        } else {
            fb.innerHTML += `<p>${i}</p>`
        }
    }
}
