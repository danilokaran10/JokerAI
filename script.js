let input = document.getElementById("input");
let send = document.getElementById("send");
let aiText = document.getElementById("ai-text");

send.addEventListener("click", () => {
  const message = input.value.trim();
  if (!message) return;

  aiText.innerText = "Joker AI is thinking... 🤡";
  input.value = "";

  fetch("https://api-inference.huggingface.co/models/mrm8488/t5-base-finetuned-joke-generator", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: "Tell me a joke"
    })
  })
    .then(res => res.json())
    .then(data => {
      const joke = data[0]?.generated_text || "No joke found!";
      aiText.innerText = joke;
    })
    .catch(() => {
      aiText.innerText = "AI error. Try again.";
    });
});
