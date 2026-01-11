let randomNum = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 10"));

if (guess === randomNum) {
    console.log("🎉 Correct Guess!");
} else {
    console.log("❌ Wrong! Number was:", randomNum);
}
