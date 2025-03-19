let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigos[indice]}`;
}
