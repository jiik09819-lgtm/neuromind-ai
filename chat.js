// ===== Chat Logic =====

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  addUserMessage(message);
  input.value = "";

  sendMessageToAI(message);
}

function addUserMessage(text) {
  const chat = document.getElementById("chat-container");
  const div = document.createElement("div");
  div.className = "user-message";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function addAIMessage(text) {
  const chat = document.getElementById("chat-container");
  const div = document.createElement("div");
  div.className = "ai-message";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}