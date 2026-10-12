const input = document.getElementById("message");
const chatbox = document.getElementById("chatbox");
const form = document.getElementById("chatForm");
const clearButton = document.getElementById("clear");
const sendButton = document.getElementById("send");

function addMessage(sender, message, type) {
    const welcome = document.getElementById("welcome");
    if (welcome) welcome.remove();

    const p = document.createElement("p");
    p.className = "message " + type;
    p.textContent = sender + ": " + message;

    chatbox.appendChild(p);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getReply(message) {
    const text = message.toLowerCase();

    if (/\b(hello|hi|hey)\b/.test(text))
        return "Hello! 😊 Welcome to Nova AI.";

    if (text.includes("your name") || text.includes("who are you"))
        return "My name is Nova AI. 🤖";

    if (text.includes("joke"))
        return "Why did the computer go to the doctor? Because it caught a virus! 😂";

    if (text.includes("python"))
        return "Python is a beginner-friendly programming language used in AI, automation and data analysis.";

    if (text.includes("java"))
        return "Java is an object-oriented programming language used to build applications.";

    if (text.includes("what is ai") || text.includes("artificial intelligence"))
        return "AI stands for Artificial Intelligence. It helps computers perform tasks that normally require human intelligence.";

    if (text.includes("thank"))
        return "You're welcome! 😊";

    if (text.includes("how are you"))
        return "I'm working well! What would you like to learn today?";

    if (text.includes("bye"))
        return "Goodbye! 👋 See you again.";

    return "I'm Nova AI Demo. Try asking me about AI, Python, Java, or jokes. Real AI is not connected yet.";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = input.value.trim();
    if (!message) return;

    addMessage("You", message, "user");
    input.value = "";

    sendButton.disabled = true;
    sendButton.textContent = "Wait...";

    setTimeout(function() {
        addMessage("Nova AI", getReply(message), "bot");
        sendButton.disabled = false;
        sendButton.textContent = "Send ➤";
        input.focus();
    }, 300);
});

clearButton.addEventListener("click", function() {
    chatbox.innerHTML = `
        <div class="welcome" id="welcome">
            <h2>👋 Hello there!</h2>
            <p>Welcome to Nova AI.<br>
            Type a message below to start chatting.</p>
        </div>`;

    input.value = "";
    input.focus();
});
