const daily = document.querySelectorAll(".daily")
const weekly = document.querySelectorAll(".weekly")
const monthly = document.querySelectorAll(".monthly")

const buttonDaily = document.querySelector(".daily a")
const buttonWeekly = document.querySelector(".weekly a")
const buttonMonthly = document.querySelector(".monthly a")

buttonDaily.addEventListener("click", ()=> {
    daily.forEach(element => {
        element.style.display = "block"
    });
    weekly.forEach(element => {
        if(element.tagName != "DIV"){
            element.style.display = "none"
        }
    });
    monthly.forEach(element => {
        if(element.tagName != "DIV"){
            element.style.display = "none"
        }
    });
})

buttonWeekly.addEventListener("click", ()=> {
    daily.forEach(element => {
        if(element.tagName != "DIV"){
            element.style.display = "none"
        }
    });
    weekly.forEach(element => {
        element.style.display = "block"
    });
    monthly.forEach(element => {
        if(element.tagName != "DIV"){
            element.style.display = "none"
        }
    });
})

buttonMonthly.addEventListener("click", ()=> {
    daily.forEach(element => {
        if(element.tagName != "DIV"){
            element.style.display = "none"
        }
    });
    weekly.forEach(element => {
        if(element.tagName != "DIV"){
            element.style.display = "none"
        }
    });
    monthly.forEach(element => {
        element.style.display = "block"
    });
})