var meuCarro = {
    portas:4,
    nome:"monza",
}

console.log("Meu carro se chama "+meuCarro.nome+" ele tem "+meuCarro.portas+ " portas!")

var botao = document.querySelector("button[name='salvar']")
var lista = document.querySelector('ul')

botao.addEventListener("click", function(){
    var titulo = document.querySelector("h2[name='ler']")
    var span = document.querySelector("span[name='editar']")

    lista.insertAdjacentHTML("afterbegin",'<li>'+span.innerHTML+'</li>')

    titulo.innerHTML = span.innerHTML

    })

