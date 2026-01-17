// ===== Local Storage for Fake Account & Chat History =====

// Save chat history
function saveChatHistory(chatArray) {
  localStorage.setItem("neuroChatHistory", JSON.stringify(chatArray));
}

// Load chat history
function loadChatHistory() {
  const data = localStorage.getItem("neuroChatHistory");
  return data ? JSON.parse(data) : [];
}

// Add message to history
function addMessageToHistory(role, text) {
  const history = loadChatHistory();
  history.push({ role, text });
  saveChatHistory(history);
}