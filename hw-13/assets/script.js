const charactersInfo = document.getElementById("characters_info");
let episode = 5;
const planets = document.getElementById("planets");

function getInfo(episode) {
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
                        fetch(films[i].characters[a])
                            .then((response) => response.json())
                            .then((data) => {
                                let gender;
                                if (data.gender === "female") {
                                    gender = "woman";
                                } else {
                                    gender = "man";
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
        });
}

let page = "https://swapi.dev/api/planets";
let obj;

function getPlanets(page) {
    if (page !== null) {
        fetch(page)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                obj = data;
                planets
                    .querySelectorAll(".planet")
                    .forEach((el) => el.remove());
                for (let i = 0; i < data.results.length; i++) {
                    planets.insertAdjacentHTML(
                        "beforeend",
                        `<p class="planet">${data.results[i].name}</p>`
                    );
                }
            });
    } else planets.querySelectorAll(".planet").forEach((el) => el.remove());
    planets.insertAdjacentHTML(
        "beforeend",
        `<p class="planet">There isn't page</p>`
    );
}

document.getElementById("episode").addEventListener("change", () => {
    episode = +document.querySelector("#episode").value;
});
