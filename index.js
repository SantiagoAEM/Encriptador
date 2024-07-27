
    document.getElementById('encriptar').addEventListener('click', function () {
        const textarea = document.getElementById('texto');
        const regex = /^[a-zA-ZÑñ\s]+$/;
        const inputValue = textarea.value;

        if (regex.test(inputValue)) {
            // Contenido válido
            encriptado();

        } else {
            // Contenido no válido
          
            alert("El contenido no es válido. Por favor, ingrese solo letras.");
           
        }
    });


    document.getElementById('desencriptar').addEventListener('click', function () {
        const textarea = document.getElementById('texto');
        const regex = /^[a-zA-ZÑñ\s]+$/;
        const inputValue = textarea.value;

        if (regex.test(inputValue)) {
            // Contenido válido
            desencriptado();

        } else {
            // Contenido no válido
          
            alert("El contenido no es válido. Por favor, ingrese solo letras.");
           
        }
    });
 
          
function encriptado() {
    //Funcion de encritado segun las reglas
    let input = document.getElementById("texto").value.toLowerCase();
    let encripted = input
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("encrypt").innerHTML = encripted;

    console.log(input);
    console.log(encripted);

    ocultar();
    
}    


function ocultar() {
    //Funcion para ocultar la imagen y texto del aside. Muestra tambien el botón de copiar y el texto encriptado
    document.getElementById("imagen").style.display ="none";
    document.getElementById("aText").style.display ="none";
    document.getElementById("sText").style.display ="none";
    document.getElementById("encrypt").style.display ="block";
    document.getElementById("abtn").style.display ="block";
    
}

function desencriptado() {
    //Funcion de desencritado segun las reglas
    let input = document.getElementById("texto").value.toLowerCase();
    let desencripted = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById("encrypt").innerHTML = desencripted;;
   
        ocultar(); 
}

function copiarTexto() {
    let outputText = document.getElementById('encrypt').innerHTML;
   
     navigator.clipboard.writeText(outputText)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  });

    reset(); 
}

function reset() {
    //Función de reset invierte todos los cambios
    window.location.reload()
    /*
    document.getElementById("imagen").style.display ="block";
    document.getElementById("aText").style.display ="block";
    document.getElementById("sText").style.display ="block";
    document.getElementById("encrypt").style.display ="none";
    document.getElementById("abtn").style.display ="none";
    document.getElementById("encrypt").innerHTML = "";
    document.getElementById("texto").value = "";*/
    
}