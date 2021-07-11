let btn = document.getElementsByTagName("button");
let play;

document.onkeydown = function (e) {
    if (document.getElementById(e.code)) {
        remover();
        document.getElementById(e.code).classList.add("active");
        play = document.getElementById(e.code).getElementsByTagName("audio")[0];
        play.play();
    }
};
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        remover();
        btn[i].classList.add("active");
        play = btn[i].getElementsByTagName("audio")[0];
        play.play();
    });
}

function remover() {
    let prev = document.getElementsByClassName("active");
    if (prev[0]) {
        prev[0].classList.remove("active");
        play.pause();
        play.currentTime = 0;
    }
}
