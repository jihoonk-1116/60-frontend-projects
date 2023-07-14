const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const resetEl = document.getElementById("reset");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

resetEl.addEventListener("click", (e)=>{
    e.preventDefault();
    score = 0;
    window.alert("reset!");
    updateLocalStorage();
    scoreEl.innerText = `score: ${score}`;
})

function updateLocalStorage(){
    console.log(score);
    localStorage.setItem("score", JSON.stringify(score));
}