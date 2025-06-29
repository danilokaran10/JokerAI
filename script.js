const input = document.getElementById("input");
const send = document.getElementById("send");
const aiText = document.getElementById("ai-text");

// ✅ Your Hugging Face key (only use this for test/demo — rotate after!)
const HUGGINGFACE_API_KEY = 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";

send.addEventListener("click", () => {
  const message = input.value.trim();
  if (!message) return;

  aiText.innerText = "Joker AI is thinking... 🤡";
  input.value = "";

  const jokerPrompt = `You are Joker AI 🤡. Always respond with a wild, dark joke or chaotic humor. The user said: "${message}"`;

fetch("https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: jokerPrompt,
      parameters: {
        max_new_tokens: 60,
        temperature: 1.1,
        top_p: 0.95,
        repetition_penalty: 1.3
      }
    })
  })
    .then(res => res.json())
    .then(data => {
      const reply = data?.[0]?.generated_text?.replace(jokerPrompt, "").trim();
      aiText.innerText = reply || "Joker forgot the punchline. Try again.";
    })
    .catch(() => {
      aiText.innerText = "Joker broke down laughing. Try again. 🤡💥";
    });
});
