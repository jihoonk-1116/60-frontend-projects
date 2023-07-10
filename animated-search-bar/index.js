const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifireEl = document.querySelector(".magnifier");

magnifireEl.addEventListener("click", ()=>{
    searchBarContainerEl.classList.toggle("active");
})