var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#colorsButton");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6
            reset();
        });
    }

    for (var i  = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
           var clickedColor = this.style.backgroundColor
           if (clickedColor === pickedColor) {
               messageDisplay.textContent = "Correct!"
               changeColors(clickedColor);
               h1Display.style.backgroundColor = clickedColor;
               resetButton.textContent = "Play Again?"
           } else {
               this.style.backgroundColor = "#232323"
               messageDisplay.textContent = "Try Again"
           }
        });
    }

    reset();
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1Display.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr= [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
