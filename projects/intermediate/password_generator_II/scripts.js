const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const special = "!#$%&*+-=?"

document.querySelector("button").addEventListener("click", () => {
    const vocabulary = setVocabulary()
    let pass = ""
    const passLength = parseInt(document.querySelector(".length-num").innerText)
    for(let length = passLength; length > 0; length--) {
        const randomNumber = Math.floor(Math.random() * vocabulary.length)
        pass += vocabulary.charAt(randomNumber)
    }
    document.querySelector("input").value = pass
})

document.querySelector("#length-range").addEventListener("input", (e) => {
    console.log(e)
    document.querySelector(".length-num").innerText = e.target.value
})

function setVocabulary() {
    let vocabulary = ""
    if(document.querySelector("#lowercase").checked) vocabulary += letters
    if(document.querySelector("#uppercase").checked) vocabulary += letters.toUpperCase()
    if(document.querySelector("#numbers").checked) vocabulary += numbers
    if(document.querySelector("#special").checked) vocabulary += special
    return vocabulary
}