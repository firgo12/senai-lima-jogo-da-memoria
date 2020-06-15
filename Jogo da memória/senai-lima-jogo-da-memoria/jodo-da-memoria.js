const deck = [{
    "id": 1,
    "name" : "1.png",
    "src" : "./image/deck/1.png"
},
{
    "id" : 2,
    "name": "2.png",
    "src": "./images/deck/2.png"
},
{
    "id": 3,
    "name": "3.png",
    "src": "./images/deck/2.png"
},
{
    "id": 4,
    "name": "4.png",
    "src": "./images/deck/4.png"
},
{
    "id": 5,
    "name": "5.png",
    "src": "./images/deck/5.png"
},
{
    "id": 6,
    "name": "6.png",
    "src": "./images/deck/6.png"
},
{
    "id": 7,
    "name": "7.png",
    "src": "./images/deck/7.png"
},
{
    "id": 8,
    "name": "8.png",
    "src": "./images/deck/8.png"
},
{
    "id": 9,
    "name": "9.png",
    "src": "./images/deck/9.png"
},
{
    "id": 10,
    "name": "10.png",
    "src": "./images/deck/10.png"
},
{
    "id": 11,
    "name": "11.png",
    "src": "./images/deck/11.png"
},
{
    "id": 12,
    "name": "12.png",
    "src": "./images/deck/12.png"
}
]

tabuleiro = document.getElementById("fundo")
var carta = null
var img = null

deck.forEach(element => {
    carta = document.createElement("div")
    carta.setAttribute("class", "carta")
    carta.setAttribute("id",element.id)
    carta.setAttribute("onclick","minha_funcao")

    img = document.createElement("img")
    img.setAttribute("src", element.src)
    carta.setAttribute("alt",element.name)

    carta.appendChild(img)
    jogo.appendChild(carta)

    var cartas_escondidas = 0
    function minha_funcao() {
        var card = document.getElementById(event.currentTarget.id)
        card.style.visibility = "hidden"
        cartas_escondidas += 1;
    }
})

function minha_funcao() {
    var carta = document.getElementById(event.currentTarget.id)
    carta.style.visibility = "hidden"

}