var input = document.getElementById("in");

input.addEventListener('keyup', showMessage);

function showMessage() {
  let p = document.getElementById('mensaje');
  let inp = input.value.toUpperCase();
  let msg = `Se ha introducido ${
    "S" == inp || "N" == inp ? "correctamente" : "incorrectamente"
  } lo solicitado`;

  p.innerText = String(`${"" == inp ? "" : msg}`);
}
