let input = document.getElementById("input");
let send = document.getElementById("send");
let aiText = document.getElementById("ai-text");

send.addEventListener("click", () => {
  if (!input.value.trim()) return;

  aiText.innerText = "AI is thinking...";
  input.value = "";

  fetch("https://v2.jokeapi.dev/joke/Any")
    .then(res => res.json())
    .then(data => {
      if (data.type === "single") {
        aiText.innerText = data.joke;
      } else if (data.type === "twopart") {
        aiText.innerText = data.setup + "\n\n" + data.delivery;
      } else {
        aiText.innerText = "Hmm, no joke found!";
      }
    })
    .catch(() => aiText.innerText = "AI error. Try again.");
});