const input = document.getElementById("input");
const send = document.getElementById("send");
const aiText = document.getElementById("ai-text");

// Hugging Face API key (replace this with your own from https://huggingface.co/settings/tokens)
const HUGGINGFACE_API_KEY = "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"; // <== PUT YOURS HERE

send.addEventListener("click", () => {
  const message = input.value.trim();
  if (!message) return;

  aiText.innerText = "Joker AI is thinking... 🤡";
  input.value = "";

  // Tell GPT-2 to act like Joker and be funny
  const jokerPrompt = `You're Joker AI 🤡. Respond like a crazy, hilarious villain comedian. User said: "${message}"`;

  fetch("https://api-inference.huggingface.co/models/gpt2", {
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
      aiText.innerText = "Joker is having a meltdown 🤡💥";
    });
});
