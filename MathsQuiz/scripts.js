/*var scoreel = document.getElementById("score").innerText
let z = parseInt(scoreel.substring(6));
var questionel = document.getElementById("question").innerText
let inputel = document.getElementById("input")
let formel = document.getElementById("form")

function questionswap(x) {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    document.getElementById("score").innerHTML = "score: " + x;
    questionel = "What is " + a + " Multiply by " + b + "?";
    document.getElementById("question").innerText = questionel;
    document.getElementById("input").value = inputel.defaultValue;
}

function answer(question) {
    let a = parseInt(question.substring(7));
    var b = -1;
    if (a > -1) {
        b = parseInt(question.substring(21));
    }
    console.log(b + " " + a)
    return a * b;
}

function check(y) {
    let answerques = answer(questionel)
    console.log(answerques);
    y = parseInt(y)
    console.log(y);
    if (answerques == y) {
        z += 1;
    } else if (z == 0) {
        z = 0;
    } else {
        z -= 1;
    }
    console.log(z)
    questionswap(z)
}


formel.addEventListener("submit", () => {
    check(inputel.value);
})*/