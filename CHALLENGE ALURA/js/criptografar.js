function encriptar() {
  const txtDigitado = document.getElementById("entrada").value.toLowerCase();
  if (txtDigitado !== "") {
    const txtCripto = txtDigitado
      .replace(/[éêë]/g, "e")
      .replace(/[íï]/g, "i")
      .replace(/[áàâä]/g, "a")
      .replace(/[óòôö]/g, "o")
      .replace(/[úùûü]/g, "u")
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("saida").value = txtCripto;
    document.getElementById("entrada").value = "";
    document.getElementById("aviso").innerHTML = "&nbsp;";
  } else {
    var modal = document.createElement("div");
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modal");

    var modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    var image = document.createElement("img");
    image.setAttribute("src", "https://trello.com/1/cards/622752efbfe4da2c930109a5/attachments/622754b15037f717049f5e3e/download/1.PNG");
    image.setAttribute("alt", "Imagem de exemplo");

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
  console.log(txtCripto);
}

document.getElementById("criptografar").addEventListener("click", encriptar);
