const idGenerator = createIdGenerator();
function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

document.getElementById("endless").addEventListener("click", () => {
    document.querySelector(".res-1").innerHTML = idGenerator.next().value;
});

const fontGenerator = newFontGenerator(14);
function* newFontGenerator(size) {
    let res = yield size;
    while (true) {
        if (res === "up") {
            size = size + 2;
            res = yield size;
        } else if (res === "down") {
            size = size - 2;
            res = yield size;
        } else res = yield size;
    }
}

document.getElementById("btn-down").addEventListener("click", () => {
    fontGenerator.next("down");
    document
        .querySelector(".font")
        .setAttribute("style", `font-size: ${fontGenerator.next().value}px`);
});

document.getElementById("btn-up").addEventListener("click", () => {
    fontGenerator.next("up");
    document
        .querySelector(".font")
        .setAttribute("style", `font-size: ${fontGenerator.next().value}px`);
});
