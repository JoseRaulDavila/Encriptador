const ingreso_texto = document.getElementById('ingreso_texto');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar = document.getElementById('copiar');
const mensaje = document.getElementById('mensaje');
const imagen_fondo = document.getElementById('imagen_fondo');
const textEncriptar = document.getElementById('textEncriptar');
const content_2 = document.getElementById('content_2');


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

let remplace = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]
const remplazo = (newValor) => {
    mensaje.innerHTML = newValor;
    imagen_fondo.classList.add('oculto');
    ingreso_texto.value = "";
    imagen_fondo.style.display = 'none';
    textEncriptar.style.display = 'none';
    copiar.style.display = 'block';
    content_2.classList.add('ajustar');
    textEncriptar.classList.add('ajustar');
}

/*Resetear elementos */
const reseteo = () => {
    mensaje.innerHTML = "";
    imagen_fondo.style.display = 'block';
    textEncriptar.style.display = 'block';
    copiar.style.display = 'none';
    content_2.classList.remove('ajustar');
    mensaje.classList.remove('ajustar')
    imagen_fondo.classList.remove('oculto');
    ingreso_texto.focus();
}

/*Encriptar */
encriptar.addEventListener('click', () => {
    const texto = ingreso_texto.value.toLowerCase();
    if (texto != '') {
        function encriptador(newText) {
            for (let i = 0; i < remplace.length; i++) {
                if (newText.includes(remplace[i][0])) {
                    newText = newText.replaceAll(remplace[i][0], remplace[i][1]);
                }

            };
            return newText;
        };
        remplazo(encriptador(texto));
        alert('Texto encriptado correctamente...');
    } else {
        alert('Ingrese un texto para encriptar.');
    }
});

/*Desencriptar */
desencriptar.addEventListener('click', () => {
    const texto = ingreso_texto.value.toLowerCase();
    if (texto != '') {
    function desencriptador(newText) {
        for (let i = 0; i < remplace.length; i++) {
            if (newText.includes(remplace[i][1])) {
                newText = newText.replaceAll(remplace[i][1], remplace[i][0]);
            };
        };
        return newText;
    }
    remplazo(desencriptador(texto));
    alert('Texto desencriptado correctamente...');
    }else{
        alert('Ingrese un texto para desencriptar.');
    }
});

/*copiar */
copiar.addEventListener('click', () => {
    let texto = mensaje;
    texto.select();
    document.execCommand("copy");
    alert('Texto copiado al portapapeles');
    location.reload();
});
