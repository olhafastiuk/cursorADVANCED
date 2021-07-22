const idGenerator = createIdGenerator();
function* createIdGenerator() {
    let i = 1;
    while(true){
        yield i++;
    }
}


const fontGenerator = newFontGenerator(14);

function* newFontGenerator(size) {
    let res = yield size

    while(true) {
        if (res === "up") {
            size = size + 2;
            res = yield size
        } else if (res === "down") {
            size = size - 2;
            res = yield size
        }
        else res = yield size
    }
    }

console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next().value)



