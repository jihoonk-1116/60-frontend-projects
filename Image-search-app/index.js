const API_KEY = "8X7ukVtEFGpGP-tl6qdShMBS1dBsXbi1rnKbfuZT7Pk";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImg(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if(page === 1){
        searchResultsEl.innerHTML="";
    }

    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image); //img
        imageWrapper.appendChild(imageLink) // a tag
        searchResultsEl.appendChild(imageWrapper);
    });
    
    page++;

    if(page > 1){
        showMoreButtonEl.style.display = "block";
    }



}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImg();
});

showMoreButtonEl.addEventListener("click", ()=>{
    searchImg();
})