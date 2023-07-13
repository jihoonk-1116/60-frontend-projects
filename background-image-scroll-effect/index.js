const bgImageEl = document.getElementById("bg-image");
window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900; 
    //the denominator depends on the screensize or image size
    bgImageEl.style.backgroundSize = 300 - window.pageYOffset / 12 + "%";
    //300 comes from the background-size property in CSS
}