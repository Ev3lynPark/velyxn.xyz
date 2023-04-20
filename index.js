let names = [
    "Velyxn",
    "ChrryMllk",
    "lilamphitrite",
    "Evelyn"
]

function getRandomObject(arr) {
    if (arr.length === 0) {
      return null; // If the array is empty, return null
    }
    const randomIndex = Math.floor(Math.random() * arr.length); // Get a random index of the array
    return arr[randomIndex]; // Return the object at that index
  }

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

function nick() {
    let name = document.getElementById("name")
    name.innerText = getRandomObject(names)
}