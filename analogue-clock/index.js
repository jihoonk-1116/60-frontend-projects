const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate(){
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();

    const secondDeg = (getSecond / 60) * 360;
    const minDeg = (getMinutes / 60) * 360;
    const hourDeg = (getHours / 12) * 360;

    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);