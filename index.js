let defualt = 20
function test() {
    let number = document.getElementById("number")
    defualt -= 1
    if (defualt < 10){
        alert("exhq prevented this")
        return
    }
    number.innerText = defualt
    
}