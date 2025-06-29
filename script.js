const send = document.getElementById("send");
const aiText = document.getElementById("ai-text");

send.addEventListener("click", () => {
  aiText.innerText = "Joker AI is making up a joke... 🤡";

  fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(res => res.json())
    .then(data => {
      if (data.type === "single") {
        aiText.innerText = data.joke;
      } else {
        aiText.innerText = `${data.setup} 🤡 ${data.delivery}`;
      }
    })
    .catch(() => {
      aiText.innerText = "Joker forgot the punchline. Try again.";
    });
});
