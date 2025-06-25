let input = document.getElementById("input");
let send = document.getElementById("send");
let aiText = document.getElementById("ai-text");

send.addEventListener("click", () => {
  const message = input.value.trim();
  if (!message) return;

  aiText.innerText = "AI is thinking...";
  input.value = "";

  fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit')
  .then(res => res.json())
  .then(data => {
    let joke = "";
    if (data.type === "single") {
      joke = data.joke;
    } else {
      joke = `${data.setup} ... ${data.delivery}`;
    }
    console.log(joke);
  });
});
