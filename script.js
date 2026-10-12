```javascript
const input = document.getElementById("message");
const chatbox = document.getElementById("chatbox");

function addMessage(sender, message) {
    const p = document.createElement("p");
    p.textContent = sender + ": " + message;
    chatbox.appendChild(p);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    const message = input.value.trim();

    if (message === "") return;

    addMessage("You", message);
    input.value = "";

    setTimeout(() => {
        addMessage("Bot", "Demo reply: AI connection will be added soon!");
    }, 500);
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
