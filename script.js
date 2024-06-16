let mainDivContainer = document.querySelector(".main-container");
let inputColor = document.querySelector("input");
let showCurrentColor = document.querySelector(".show-current-color");

let divGridNumber = Number(prompt("How many row & column grids do you want: "));

let newColor = "black";

showCurrentColor.style.backgroundColor = newColor;

inputColor.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Enter") {
    newColor = inputColor.value;
    showCurrentColor.style.backgroundColor = newColor;
    // updateHoverClassColor(newColor);
  }
});

function createDivContainer() {
  for (let i = 1; i <= divGridNumber; i++) {
    let divContainer = document.createElement("div");
    divContainer.classList.add("container");

    mainDivContainer.appendChild(divContainer);

    createNestedDivs(divContainer);
  }
}

function createNestedDivs(divContainer) {
  for (let i = 1; i <= divGridNumber; i++) {
    let divNestedContainer = document.createElement("div");
    divNestedContainer.classList.add("nested-div");

    divNestedContainer.addEventListener("mouseover", () => {
      divNestedContainer.setAttribute(
        "style",
        `background-color: ${newColor || "white"};`
      );
      let computedStyle = getComputedStyle(divNestedContainer);
      // Show the current color in the specified element
      showCurrentColor.style.backgroundColor = computedStyle.backgroundColor;
    });
    divContainer.appendChild(divNestedContainer);
  }
}

createDivContainer();
