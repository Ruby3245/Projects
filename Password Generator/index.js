const generateButton = document.getElementById("generate-button")
const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "ß", "q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", "+", "*", "?", "!", "#", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "y", "x", "c", "v", "b", "n", "m", "_", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä", "Y", "X", "C", "V", "B", "N", "M"]
let Password = []
const passwordLength = document.getElementById("password-length")
const firstRectangle = document.getElementById("first-rectangle")
const secondRectangle = document.getElementById("snd-rectangle")
const thirdRectangle = document.getElementById("third-rectangle")
const fourthRectangle = document.getElementById("fourth-rectangle")

generateButton.addEventListener("click", newPasswords)
/*firstRectangle.addEventListener("click", copyText)
secondRectangle.addEventListener("click", copyText)
thirdRectangle.addEventListener("click", copyText)
fourthRectangle.addEventListener("click", copyText)

function copyText() {
    let createInput = document.createElement("input")
    createInput.value = this.textContent
    console.log(createInput.value)
    document.appendChild(createInput)
    createInput.select()
    navigator.clipboard.writeText(createInput.value)
    document.removeChild("input")
    alert("Copied the text: " + createInput.value)
} */

function passwordGenerator() {
    Password = []
        for (let i = 0; i < passwordLength.value; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            Password.push(characters[randomNumber])
        }
        return Password.join("")
}

function newPasswords() {
    firstRectangle.value = passwordGenerator()
    secondRectangle.value = passwordGenerator()
    thirdRectangle.value = passwordGenerator()
    fourthRectangle.value = passwordGenerator()
}