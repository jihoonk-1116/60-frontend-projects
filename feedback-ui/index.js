const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        console.log(event);
        // selectedRating = event.target.innerText || event.target.parentNode.innerText;
        // console.log(selectedRating);
        /*parentnode.innerText is for clicking emoji image. Emoji's parent is rating div*/ 
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
            <strong>Thank you!</strong>
            <br>
            <br>
            <stong>Feedback: ${selectedRating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}