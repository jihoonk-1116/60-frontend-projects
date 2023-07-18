const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
    //toggle -> if there is the class, then remove 
    //if not, add 
    //add -> always add whether there is the class or not
});

closingButton.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
});