const API_KEY = "8X7ukVtEFGpGP-tl6qdShMBS1dBsXbi1rnKbfuZT7Pk";

const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");


btnEl.addEventListener("click", fetchImage);

async function fetchImage(){
    const inputValue = document.getElementById("input").value;

    if(inputValue > 10 || inputValue < 1){
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number should be between 0 and 11";
        return;
    }

    imgs = "";
    try{
        btnEl.style.display="none";
        const loading = `<img src="spinner.svg"/>`;
        galleryEl.innerHTML = loading;
        await fetch(
            `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
                Math.random() * 1000
            )}&client_id=${API_KEY}`
        ).then((res) =>
            res.json()
            .then((data) => {
                if(data){
                    data.forEach((pic) => {
                        imgs += `
                            <img src=${pic.urls.small} alt="image"/>
                        `;
                        galleryEl.style.display = "block";
                        galleryEl.innerHTML = imgs;
                        btnEl.style.display = "block";
                        errorMessageEl.style.display = "none";
                    });
                }
            })
        ); 
    }
    catch(err){
        errorMessageEl.style.display="block";
        errorMessageEl.innerText = "An error Happened, try again later..."
        btnEl.style.display = "block";
        galleryEl.style.display = "none";
    }
}