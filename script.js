let botao = document.getElementsByTagName("button")[1];
let name = document.getElementById("name");
let username = document.getElementById("username");
let number = document.getElementById("result");

let pokelist = document.querySelectorAll(".img-inactive");

let nameValue = "";
let userValue = "";

name.addEventListener("input", () => {
    nameValue = name.value;
})

username.addEventListener("input", () => {
    userValue = username.value;
})

pokelist.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("img-inactive")) {
            item.classList.remove("img-inactive");
            item.classList.add("img-active");

            item.setAttribute("src", `./assets/pokemon-gif/${item.getAttribute("index")}.png`);
        } else if(item.classList.contains("img-active")) {
            item.classList.remove("img-active");
            item.classList.add("inativar");
            item.classList.add("img-inactive");

            item.setAttribute("src", `./assets/pokemon-static/${item.getAttribute("index")}.png`);            
        }
    })
}) 

botao.addEventListener("click", () => {
    let somador = 0;

    pokelist.forEach((item) => {
        if(item.classList.contains("img-active")) {
            somador += 1;
        }
    })

    let intervalo = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 51);
        number.innerText = username.value && name.value? `${nameValue}(${userValue}), você capturou ${randomNumber} pokémon` : `Você capturou ${randomNumber} pokémon` ;
        if (randomNumber == somador) {
            clearInterval(intervalo);
        }
    }, 10);
})
