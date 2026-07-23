function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let pais = document.getElementById("pais").value;
    let telefono = document.getElementById("telefono").value;
    let numero_documento = document.getElementById("numero_documento").value;
    let nacimiento = document.getElementById("nacimiento").value;


    if (!nombre || !apellidos || !pais || !telefono || !numero_documento || !nacimiento) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Por favor, complete todos los campos del formulario.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    else {
        let regex = /^[a-zA-Z]+$/;
        if (!regex.test(nombre) && !regex.test(apellidos)) {
            console.log("Los campos de nombre y apellidos contienen solo letras.");
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "sus datos solo puden contener letras",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        
        {
            let regex = /^\d+$/;
            if (!regex.test(telefono) && !regex.test(numero_documento)) {
                console.log("Los campos de teléfono y número de documento deben contener solo números.");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "sus datos solo puden contener numeros",
                    showConfirmButton: false,
                    timer: 1500
                });
                return false;
            }
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