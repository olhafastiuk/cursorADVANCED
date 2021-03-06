// homework 9
let size = 50;
let amount = 25;
let column = 5;
let row = 5;
let stopInterval;

const mainBlock = document.getElementById("output-6");
const mainBlock2 = document.getElementById("output-7");
const rowBlock = document.getElementsByClassName("row");
const blocks = document.getElementsByClassName("blocks");

function generateBlocks(mainBlock) {
    if (!size || !amount || !row) {
        alert("Введіть значення");
        return;
    }
    mainBlock.querySelectorAll(".row").forEach((el) => el.remove());
    mainBlock.querySelectorAll(".title").forEach((el) => el.remove());

    let block = 0;
    for (let i = 0; i < column; i++) {
        mainBlock.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            if (mainBlock === mainBlock2) {
                let index = document.querySelectorAll(".row").length - 1;
                rowBlock[index].insertAdjacentHTML("beforeend", `<div class = "blocks" ></div>`);
            } else {
                rowBlock[i].insertAdjacentHTML("beforeend", `<div class = "blocks" ></div>`);
            }
            block += 1;
        }
    }
    if (mainBlock === mainBlock2) {
        return block;
    }
    generateBlocksStyle(block, 0);
}

export function generateBlocksInterval() {
    clearTimeout(stopInterval);
    let block = generateBlocks(mainBlock2);
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
    let x = mainBlock.querySelectorAll(".blocks").length;
    generateBlocksStyle(number + x, x);
    stopInterval = setTimeout(run, 1000, number);
}