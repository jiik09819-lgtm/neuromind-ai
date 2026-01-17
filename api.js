// ===== API Logic =====

// 1️⃣ Paste your API key here
const API_KEY = AIzaSyAHUh_07jmMrvivc6FpqT174liy9Io-oUY;

// 2️⃣ API URL
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
  API_KEY;

// 3️⃣ Send message to AI
async function sendMessageToAI(userMessage) {
  try {
    playSendSound(); // Play send sound

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }]
      })
    });

    const data = await response.json();

    const aiText =
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content.parts[0].text
        ? data.candidates[0].content.parts[0].text
        : "No response from AI";

    addAIMessage(aiText);
    playReceiveSound(); // Play receive sound
  } catch (error) {
    console.error(error);
  }
}