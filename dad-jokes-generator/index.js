const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const API_KEY = "CAtfnf4Lvbtq5VZ6HwCdbQ==4xK5629H3Kov8bFv";
const URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method : "GET",
    headers:{
        "X-Api-Key": API_KEY,
    },
};

btnEl.addEventListener("click", getJoke);

async function getJoke(){
    try {
        jokeEl.innerHTML = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const res = await fetch(URL, options);
        const data = await res.json();
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerHTML = "An error happened, try again later...";
    }
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
}