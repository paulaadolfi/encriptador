const input = document.querySelector("#inputtexto");
const btnEncriptador = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const mensaje = document.querySelector("#texto-resultado");
const btnCopiar = document.querySelector("#copiar");

function home() {
  document.getElementById("div-resultado").style.display = 'none';
  document.getElementById("div-sin-mensaje").style.display = 'block';
}

function aparece() {
  document.getElementById("div-sin-mensaje").style.display = 'none';
  document.getElementById("div-resultado").style.display = 'block';
}


function inputverificar() {
  var inputPalabra = document.querySelector("#inputtexto");
  inputPalabra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}


document.getElementById("div-resultado").style.display = 'none';
inputverificar();


document.getElementById('btn-encriptar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece()
}


document.getElementById('btn-desencriptar').onclick = (e) => {
  e.preventDefault();
  const textoDesencriptado = desencriptar(input.value);
  mensaje.value = textoDesencriptado;
  input.value = "";
  aparece()
}



function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}


function desencriptar(stringDesencriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDesencriptada.includes(matrixCode[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDesencriptada
}


document.getElementById('copiar').onclick = (e) => {
  e.preventDefault();
  const mensaje = document.querySelector("#texto-resultado");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}





