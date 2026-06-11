let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;

function validarFormulario() {
    if (ventas == "" || fecha == "" || ingresos == "" || egresos == "" || concepto == "" || valor === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        return false;
    }

        function solonumeros() {
            let regex = /^\d+$/;
            return regex.test(ventas) && regex.test(ingresos) && regex.test(egresos) && regex.test(valor);
        }

    return true;
}