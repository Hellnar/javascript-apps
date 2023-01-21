document.querySelector("button").addEventListener("click", () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-=?"
    let pass = ""
    for(let length = 14; length > 0; length--) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        pass += chars.charAt(randomNumber)
    }
    document.querySelector("input").value = pass
})