

let container = document.getElementById("container");
let display = document.getElementById("display");


//keydown event 

document.addEventListener("keydown" ,function (e){
    display.style.color = "red"
    display.innerText = e.key + "is keydown";
})


// key up event

document.addEventListener("keyup" , function(e){
    display.style.color = "green;"
    display.innerText = e. key + "is keyUp"
});