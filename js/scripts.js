const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let box_width_start = 80;
let box_height_start = 80;
var tempText;
var istrue = 0;

class createBlack_square {
  constructor() {
    this.width = 80;
    this.height = 80;
  }
  setWidth(num) {
    this.width = num;
  }
  setHeight(num) {
    this.height = num;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

const button = document.getElementById("Square_black");
button.addEventListener("click", createSquares);

function createSquares() {
  let newBox = new createBlack_square();
  for (let i = 0; i < 3; i++) {
    let newSquare = document.createElement("div");
    newSquare.style.background = "black";
    newSquare.style.margin = "20px";
    newSquare.style.display = "flex";
    newSquare.style.justifyContent = "center";
    newSquare.style.alignItems = "center";
    newBox.setHeight(box_height_start);
    newBox.setWidth(box_width_start);
    newSquare.style.height = newBox.getHeight() + "px";
    newSquare.style.width = newBox.getWidth() + "px";
    box_height_start = newBox.getHeight() + 20;
    box_width_start = newBox.getWidth() + 20;
    document.getElementById("wrapper_game").appendChild(newSquare);
    let text = document.createElement("h2");
    const letter = letters[Math.floor(Math.random() * letters.length)];
    text.innerHTML = letter;
    text.style.fontSize = "64px";
    text.style.fontFamily = "Amiko";
    text.style.alignItems = "center";
    text.style.color = "white";
    text.style.justifyContent = "center";
    text.style.visibility = "hidden";
    newSquare.appendChild(text);
    newSquare.onclick = function () {
      if (text.style.visibility === "hidden") {
        text.style.visibility = "visible";
        if (istrue === 0) {
          tempText = text;
          tempSquare = this;
          istrue++;
        } else if (istrue === 1) {
          if (tempSquare.innerHTML === this.innerHTML) {
            tempSquare.style.backgroundColor = "blue";
            this.style.backgroundColor = "blue";
            istrue = 0;
            return;
          }
          setTimeout(() => {
            tempText.style.visibility = "hidden";
            text.style.visibility = "hidden";
            tempSquare.style.backgroundColor = "black";
            this.style.backgroundColor = "black";
            tempSquare = undefined;
            istrue = 0;
          }, 500);
          tempSquare.style.background = "pink";
          this.style.backgroundColor = "pink";
        }
      }
    };
  }
}