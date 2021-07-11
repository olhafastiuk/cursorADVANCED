let btn = document.getElementsByTagName("button");

document.onkeydown = function (e) {
    if (document.getElementById(e.code)) {
        remover();
        document.getElementById(e.code).classList.add("active");
        document.getElementById(e.code).getElementsByTagName("audio")[0].play();
    }
    console.log("a");
};
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        remover();
        btn[i].classList.add("active");
        btn[i].getElementsByTagName("audio")[0].play();
    });
}

function remover() {
    let prev = document.getElementsByClassName("active");
    if (prev[0]) {
        prev[0].classList.remove("active");
    }
}
