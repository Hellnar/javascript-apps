let VOICES = []
let PAUSE = false
const synth = window.speechSynthesis
const inputText = document.querySelector("textarea")
speechSynthesis.addEventListener("voiceschanged", () => addVoices())


document.querySelector(".start").addEventListener("click", () => {
    synth.cancel()
    const utterThis = new SpeechSynthesisUtterance(inputText.value)
    utterThis.voice = VOICES[document.querySelector(".voices").value]
    synth.speak(utterThis)
})

document.querySelector(".pause").addEventListener("click", () => {
    console.log(PAUSE)
    PAUSE = !PAUSE
    if(PAUSE) {
        synth.pause()
    } else {
        synth.resume()
    }
})

document.querySelector(".stop").addEventListener("click", () => {
    synth.cancel()
})

async function addVoices() {
    VOICES = synth.getVoices()
    VOICES.forEach((voice, index) => {
        const voiceElement = document.createElement("option")
        voiceElement.value = index
        voiceElement.innerText = voice.name
        console.log(voiceElement)
        document.querySelector(".voices").appendChild(voiceElement)
    })
}