const input = document.getElementById("input");
const send = document.getElementById("send");
const aiText = document.getElementById("ai-text");

send.addEventListener("click", () => {
  const message = input.value.trim();
  if (!message) return;

  aiText.innerText = "Joker AI is thinking... 🤡";
  input.value = "";

  fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyC-X2ryWMc_VSQA6aCk8dukIEMliJFjGec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: message }]
      }]
    })
  })
    .then(res => res.json())
    .then(data => {
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      aiText.innerText = reply || "No response from Gemini.";
    })
    .catch(() => {
      aiText.innerText = "Error contacting Gemini AI.";
    });
});
