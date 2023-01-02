const synt = window.speechSynthesis

const inputText = document.querySelector("textarea")

document.querySelector("button").addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(inputText.value)
    synt.speak(utterThis)
})