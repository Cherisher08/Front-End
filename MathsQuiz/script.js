const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

function myFunction() {
    if (score) {
        score = 0;
    }
}

console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    myFunction();
}

scoreEl.innerText = `score: ${score}`;
console.log(score);

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

let correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage(score);
    } else if (score == 0) {
        score = 0;
        updateLocalStorage(score);
    } else {
        score--;
        updateLocalStorage(score);
    }
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    correctAns = num1 * num2;
    console.log(correctAns)
    questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
    document.getElementById("input").value = inputEl.defaultValue;
});

function updateLocalStorage(x) {
    localStorage.setItem("score", JSON.stringify(x));
    scoreEl.innerText = `score: ${x}`;
}