const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start")
const stopButtonEl = document.getElementById("stop")
const resetButtonEl = document.getElementById("reset")

let startTime = 0;
let elapsedTime = 0;
let timerInterval; 

function startTimer(){
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}
function formatTime(elaspedTime){
    const miliseconds = Math.floor((elaspedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
             ":" +
            (mins ? (mins > 9 ? mins : "0" + mins) : "00") +
             ":" +
            (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
             "." + (miliseconds > 9 ? miliseconds : "0" + miliseconds)
        );
}
function stopTimer(){
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00";

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);