function calcularPerimetro(){
    let rad = obtenerRadio();
    let res = 2 * Math.PI * rad;
    alert(`El perimetro de la circunferencia es: ${res}`);
}

function calcularArea(){
    let rad = obtenerRadio;
    let res = Math.PI * rad * rad;
    alert(`El área de la circunferencia es: ${res}`);
}

function obtenerRadio(){
    var rad = document.getElementById('radio').value;
    // rad = parseInt(rad);
    return rad;
}