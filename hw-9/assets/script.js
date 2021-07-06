let size;
let amount;
let column;
let row;
let stopInterval;
function getData() {
    size = +document.getElementById("size").value;
    amount = +document.getElementById("amount").value;
    row = +document.getElementById("column").value;
    column = amount / row;
}
const mainBlock = document.getElementById("main-block");
const mainBlock2 = document.getElementById("main-block2");
const rowBlock = document.getElementsByClassName("row");
const blocks = document.getElementsByClassName("block");

function generateBlocks() {
    mainBlock.querySelectorAll(".row").forEach((el) => el.remove());
    mainBlock.querySelectorAll(".title").forEach((el) => el.remove());
    mainBlock.insertAdjacentHTML("beforeend", `<h3 class = "title">BASIC</h3>`);
    
    let block = 0;
    for (let i = 0; i < column; i++) {
        mainBlock.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            rowBlock[i].insertAdjacentHTML("beforeend", `<div class = "block" ></div>`);
            block += 1;
        }
    }
    generateBlocksStyle(block, 0);
}

function generateBlocksInterval() {
    clearTimeout(stopInterval);
    mainBlock2.querySelectorAll(".row").forEach((el) => el.remove());
    mainBlock2.querySelectorAll(".title").forEach((el) => el.remove());
    mainBlock2.insertAdjacentHTML("beforeend", `<h3 class = "title">ADVANCED</h3>`);
    
    let block = 0;
    for (let i = 0; i < column; i++) {
        mainBlock2.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            let index = document.querySelectorAll(".row").length - 1;
            rowBlock[index].insertAdjacentHTML(
                "beforeend",
                `<div class = "block" ></div>`
            );
            block += 1;
        }
    }
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