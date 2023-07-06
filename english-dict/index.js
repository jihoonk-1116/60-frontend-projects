const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const inputEl = document.getElementById("input");
const audioEl = document.getElementById("audio");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");

async function fetchMeaning(word){
    try {
        
        infoTextEl.style.display = "block";
        meaningContainerEl.style.display = "block";
        infoTextEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url)
                        .then((res) => res.json());

        console.log(result);
        if(result.title){ //no definitions found
            meaningContainerEl.style.display = "block";
            infoTextEl.style.display = "none"; 
            titleEl.innerText = word;
            meaningEl.innerText = result.title;
            audioEl.style.display = "none";          
        }
        else{
            infoTextEl.style.display = "none";
            meaningContainerEl.style.display = "block";
            audioEl.style.display = "inline-flex";
            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }

    } catch (error) {
        console.log(error);
        infoTextEl.innerText = "An error happened, try again later";
    }
}

inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchMeaning(e.target.value);
    }
})