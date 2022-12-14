const emojisArray = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < emojisArray.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = emojisArray[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

modifyEmoji = (myAction, value) => {
    emojisArray[myAction](value)
    emojiInput.value = ""
    renderEmojis()
}

pushBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        modifyEmoji("push", emojiInput.value)
    }
})

unshiftBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        modifyEmoji("unshift", emojiInput.value)
    }
})

popBtn.addEventListener("click", () =>  {
    emojisArray.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", () => {
    emojisArray.shift()
    renderEmojis()
})

