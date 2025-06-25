let input = document.getElementById("input");
let send = document.getElementById("send");
let aiText = document.getElementById("ai-text");

send.addEventListener("click", () => {
  const message = input.value.trim();
  if (!message) return;

  aiText.innerText = "AI is thinking...";
  input.value = "";

  const apiUrl = `https://aimlapi.com/api/talk?uid=danilo123&msg=${encodeURIComponent(message)}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      aiText.innerText = data.response || "No reply from AI.";
    })
    .catch(() => {
      aiText.innerText = "AI error. Try again.";
    });
});
