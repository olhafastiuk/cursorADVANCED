const charactersInfo = document.getElementById("characters_info");
let episode = 5;
const planets = document.getElementById("planets");
let page = "https://swapi.dev/api/planets/?page=1";
let obj;
let wookiee = false;

function getInfo(episode, wookiee) {
    fetch("https://swapi.dev/api/films/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let films = data.results;
            for (i = 0; i < films.length; i++) {
                if (films[i].episode_id === episode) {
                    charactersInfo
                        .querySelectorAll(".character")
                        .forEach((el) => el.remove());
                    for (let a = 0; a < films[i].characters.length; a++) {
                        if (wookiee) {
                            fetch(`${films[i].characters[a]}?format=wookiee`)
                                .then((response) => response.json())
                                .then((data) => {
                                    let gender;
                                    if (data.rrwowhwaworc === "wwwoscraanwo") {
                                        gender = "👧";
                                    } else {
                                        gender = "👦";
                                    }
                                    charactersInfo.insertAdjacentHTML(
                                        "beforeend",
                                        `<div class = "character" >
                      <p class = 'name'>${data.whrascwo}</p>
                      <p class = 'birth'>${data.rhahrcaoac_roworarc}</p>
                      <p class = 'gender'>${gender}</p>
                      </div>`
                                    );
                                });
                        } else {
                            fetch(films[i].characters[a])
                                .then((response) => response.json())
                                .then((data) => {
                                    let gender;
                                    if (data.gender === "female") {
                                        gender = "👩";
                                    } else {
                                        gender = "👨";
                                    }
                                    charactersInfo.insertAdjacentHTML(
                                        "beforeend",
                                        `<div class = "character" >
                      <p class = 'name'>${data.name}</p>
                      <p class = 'birth'>${data.birth_year}</p>
                      <p class = 'gender'>${gender}</p>
                      </div>`
                                    );
                                });
                        }
                    }
                }
            }
        });
}

function getPlanets(page, wookiee) {
    if (page !== null) {
        fetch(page)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                obj = data;
                planets
                    .querySelectorAll(".planet")
                    .forEach((el) => el.remove());
                if (wookiee) {
                    page = `${page}&format=wookiee`;
                    fetch(page)
                        .then((response) => response.json())
                        .then((data) => {
                            for (let i = 0; i < data.rcwochuanaoc.length; i++) {
                                planets.insertAdjacentHTML(
                                    "beforeend",
                                    `<p class="planet">${data.rcwochuanaoc[i].whrascwo}</p>`
                                );
                            }
                        });
                } else {
                    for (let i = 0; i < data.results.length; i++) {
                        planets.insertAdjacentHTML(
                            "beforeend",
                            `<p class="planet">${data.results[i].name}</p>`
                        );
                    }
                }
            });
    } else {
        planets.querySelectorAll(".planet").forEach((el) => el.remove());
        planets.insertAdjacentHTML(
            "beforeend",
            `<p class="planet">There isn't page</p>`
        );
    }
}

function getNextPage(obj, wookiee) {
    let a = document.getElementsByClassName("planet")[0].innerText;
    if (a === "There isn't page" && obj.previous === null) {
        fetch(obj.next)
            .then((response) => response.json())
            .then((data) => {
                obj = data;
                getPlanets(obj.previous, wookiee);
            });
    } else getPlanets(obj.next, wookiee);
}

function getPrevPage(obj, wookiee) {
    let a = document.getElementsByClassName("planet")[0].innerText;
    if (a === "There isn't page" && obj.next === null) {
        fetch(obj.previous)
            .then((response) => response.json())
            .then((data) => {
                obj = data;
                getPlanets(obj.next, wookiee);
            });
    } else getPlanets(obj.previous, wookiee);
}

document.querySelector(".wookiee").addEventListener("change", () => {
    if (document.querySelector(".wookiee").checked) {
        wookiee = true;
        document.querySelector(".wookiee").classList.add("checked");
        if (document.querySelector(".character") !== null) {
            getInfo(episode, wookiee);
        }
    } else {
        wookiee = false;
        document.querySelector(".wookiee").classList.remove("checked");
        if (document.querySelector(".character") !== null) {
            getInfo(episode, wookiee);
        }
    }
});

document.getElementById("episode").addEventListener("change", () => {
    episode = +document.querySelector("#episode").value;
});
