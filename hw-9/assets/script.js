const size = 50;
const amount = 30;
const row = 5;
const column = amount / row;

const mainBlock = document.getElementById("main-block");
const rowBlock = mainBlock.getElementsByClassName("row");
const blocks = mainBlock.getElementsByClassName("block");

function generateBlocks() {
    let block = 0;

    for (let i = 0; i < column; i++) {
        mainBlock.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            rowBlock[i].insertAdjacentHTML("beforeend", `<div class = "block" ></div>`);
            generateBlocksStyle(block);
            block += 1;
        }
    }
}

function generateBlocksStyle(i) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    blocks[i].style.background = `rgb(${r}, ${g}, ${b}`;
    blocks[i].style.width = `${size}px`;
    blocks[i].style.height = `${size}px`;
}

generateBlocks();
