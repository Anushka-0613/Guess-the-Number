let secretNum = Math.floor(Math.random() * 100) + 1;

let guessInput = document.querySelector("#guess-input");
let guessBtn = document.querySelector("#guess-btn");
let msg = document.querySelector("#message");
let resetBtn = document.querySelector("#reset-btn");

let attempts = 0;
let attemptsDisplay = document.querySelector("#attempts");

guessBtn.addEventListener("click", () => {
    let userGuess = Number(guessInput.value);

if(userGuess === secretNum){
    msg.innerText = "🎉 Correct!";
    msg.classList.add("correct");
} else if (userGuess < secretNum){
    msg.innerText = "📉 Too low!";
    msg.classList.add("incorrect");
} else {
    msg.innerText = "📈 Too high!";
      msg.classList.add("incorrect");
}

attempts++;
attemptsDisplay.innerText = `Attempts: ${attempts}`;
});

resetBtn.addEventListener("click", () => {
    secretNum = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    msg.innerText = "";
    attempts = 0;
    attemptsDisplay.innerText = "Attempts: 0";
})