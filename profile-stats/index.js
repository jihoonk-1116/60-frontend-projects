const counterEl = document.querySelectorAll(".counter")

counterEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15; 
        //the division should be the smallest one
        //cause we need to synchonize the increasing speeds of all numbers
        currentNum = Math.ceil(currentNum + increment);
        //do rounding using ceil()
        if(currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 27);
        }else{ 
            //there can be the case that the mod of the number is not 0
            //so we need to add this condition.
            counterEl.innerText = dataCeil;
        }
    }
});