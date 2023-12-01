const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    console.log("c");
    if(birthdayValue === ""){
        alert("Please enter your birthday");
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
        /*true : false*/
    }
}

function getAge(birthdayValue){
    const curDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = curDate.getFullYear() - birthdayDate.getFullYear();
    const month = curDate.getMonth() - birthdayDate.getMonth();
    if(month < 0 
        || (month == 0 && curDate.getDate() < birthdayDate.getDate())){
        age--; //age should be let, not const
    }
    return age;
}

btnEl.addEventListener("click", calculateAge)
//parameters: event type, function name to be invoked