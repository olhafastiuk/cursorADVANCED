let size;
let amount;
let column;
let row;
let stopInterval;

function getData() {
    size = +document.getElementById("size").value;
    column = +document.getElementById("row").value;
    row = +document.getElementById("column").value;
    amount = column * row;
}

const basic = "BASIC";
const advanced = "ADVANCED";
const mainBlock = document.getElementById("main-block");
const mainBlock2 = document.getElementById("main-block2");
const rowBlock = document.getElementsByClassName("row");
const blocks = document.getElementsByClassName("block");

function generateBlocks(mainBlock, basic) {
    if (!size || !amount || !row) {
        alert("Введіть значення");
        return;
    }
    mainBlock.querySelectorAll(".row").forEach((el) => el.remove());
    mainBlock.querySelectorAll(".title").forEach((el) => el.remove());
    mainBlock.insertAdjacentHTML( "beforeend", `<h3 class = "title">${basic}</h3>`);

    let block = 0;
    for (let i = 0; i < column; i++) {
        mainBlock.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            if (mainBlock === mainBlock2) {
                let index = document.querySelectorAll(".row").length - 1;
                rowBlock[index].insertAdjacentHTML("beforeend", `<div class = "block" ></div>`);
            } else {
                rowBlock[i].insertAdjacentHTML("beforeend", `<div class = "block" ></div>`);
            }
            block += 1;
        }
    }
    if (mainBlock === mainBlock2) {
        return block;
    }
    generateBlocksStyle(block, 0);
}

function generateBlocksInterval() {
    clearTimeout(stopInterval);
    let block = generateBlocks(mainBlock2, advanced);
    run(block);
}

function generateBlocksStyle(i, stop) {
    for (i = i - 1; i >= stop; i--) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        blocks[i].style.background = `rgb(${r}, ${g}, ${b}`;
        blocks[i].style.width = `${size}px`;
        blocks[i].style.height = `${size}px`;
    }
}

function run(number) {
    let x = mainBlock.querySelectorAll(".block").length;
    generateBlocksStyle(number + x, x);
    stopInterval = setTimeout(run, 1000, number);
}