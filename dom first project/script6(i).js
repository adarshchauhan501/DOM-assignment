document.getElementById("btn1").addEventListener("click",  yes)
function yes(){
    document.getElementById("btn1").innerText = "Good, you will get success."
    document.getElementById("btn1").style.fontSize = "20px"
    document.getElementById("btn1").style.color = "black"
    document.getElementById("btn1").style.backgroundColor = "aqua"

}

document.getElementById("btn2").addEventListener("click", no )
function no(){
    alert("This is not fair,work hard and you can create history.")
}