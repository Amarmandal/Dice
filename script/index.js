//Generate random Number
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

//Set the path name images/dice1.png - dice6.png
let sourceImage1 = `images/dice${randomNumber1}.png`;
let sourceImage2 = `images/dice${randomNumber2}.png`;

//Changing header text
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Winner";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Winner";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}

//Player 1
document.querySelector(".img1").setAttribute("src", sourceImage1);

//Player 2
document.querySelector(".img2").setAttribute("src", sourceImage2);


