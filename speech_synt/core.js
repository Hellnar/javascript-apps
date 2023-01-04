const synt = window.speechSynthesis
synt.addEventListener("voiceschanged", () => addVoices())

const inputText = document.querySelector("textarea")
addVoices()

document.querySelector("button").addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(inputText.value)
    synt.speak(utterThis)
})


async function addVoices() {
    const voices = synt.getVoices()
    voices.forEach(voice => {
        const voiceElement = document.createElement("option")
        voiceElement.value = voice.voiceURI
        voiceElement.innerText = voice.name
        console.log(voiceElement)
        document.querySelector(".voices").appendChild(voiceElement)
    })
}