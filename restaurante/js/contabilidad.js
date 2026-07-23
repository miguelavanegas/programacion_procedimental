
function validarFormulario() {
    let Ventas = document.getElementById("Ventas").value;
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;

    if (!Ventas || !fecha || !ingresos || !egresos || !concepto || !valor) {
        console.log("Por favor, complete todos los campos del formulario.");
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sus datos estan vacios",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        let regex = /^\d+$/;
        if (!regex.test(Ventas) && !regex.test(ingresos) && !regex.test(egresos) && !regex.test(valor)) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "sus datos no deben contener letras",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sus datos fueron guardados de manera correcta",
            showConfirmButton: false,
            timer: 1500
        });
    }





}
document.getElementById("btnGuardar").onclick = validarFormulario;
