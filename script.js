

var computerChoice;

var age = 0;

let userChoice = prompt("heads or tails?");
let randomNumber = Math.round(Math.random());
if(randomNumber == 1){
    computerChoice = "tails";
}else{
    computerChoice = "heads";
}

if(userChoice === computerChoice){
    alert("You guessed right! The coin landed on " + computerChoice);
}else{
    alert("You guessed wrong. The coin landed on " + computerChoice);
}

let birthYear = parseInt(prompt("What is your birth year?"));
age = (2023 - birthYear);

if(age === 21){
    alert("You are legal to drink in the U.S... barely");
}else if(age > 21 ){
    alert("You are legal to drink the U.S.");
}else if(age < 21){
    alert("It is not legal for you to drink in the U.S.");
}