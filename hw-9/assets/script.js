const size = 50;
const amount = 25;
const row = 5;
const column = amount / row;

const mainBlock = document.getElementById("main-block");
const mainBlock2 = document.getElementById("main-block2");

const rowBlock = document.getElementsByClassName("row");
const blocks = document.getElementsByClassName("block");

function generateBlocks() {
    let block = 0;

    for (let i = 0; i < column; i++) {
        mainBlock.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            rowBlock[i].insertAdjacentHTML("beforeend", `<div class = "block" ></div>`);
            block += 1;
        }
    }
    generateBlocksStyle(block, 0)
}

function generateBlocksStyle(i, stop) {
    for (i= i-1; i>=stop; i--) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        blocks[i].style.background = `rgb(${r}, ${g}, ${b}`;
        blocks[i].style.width = `${size}px`;
        blocks[i].style.height = `${size}px`;
    }
    
}

generateBlocks();

function generateBlocksInterval() {
    let block = 0;

    for (let i = 0; i < column; i++) {
        mainBlock2.insertAdjacentHTML("beforeend", `<div class = "row"></div>`);
        for (let a = 0; a < row && block < amount; a++) {
            let index = row + i;
            rowBlock[index].insertAdjacentHTML("beforeend", `<div class = "block" ></div>`);
            block += 1;
            
        }
    }
    setTimeout(function run() {
        generateBlocksStyle((block+amount), amount);
        setTimeout((run), 1000)
    })
}
generateBlocksInterval()