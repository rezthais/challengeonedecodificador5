document.getElementById("descriptografar").addEventListener("click", descriptar);

function descriptar(){
    var txtColado = document.getElementById("entrada").value;

    if (txtColado != "") {
        var txtCripto = txtColado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById("saida").value = txtCripto;
        document.getElementById("entrada").value = "";
    } else {
        var modal = document.createElement("div");
        modal.setAttribute("id", "myModal");
        modal.setAttribute("class", "modal");

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        var image = document.createElement("img");
        image.setAttribute("src", "https://trello.com/1/cards/622752efbfe4da2c930109a5/attachments/622754b15037f717049f5e3e/download/1.PNG");

        modalContent.appendChild(image);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        var span = document.createElement("span");
        span.setAttribute("class", "close");
        span.innerHTML = "&times;";
        modalContent.appendChild(span);

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
