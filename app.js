
let ingresoTexto = document.getElementById("texto");
let mensajeFinal = document.getElementById("mensaje-sin-texto");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");
let botonCopiar = document.getElementById("boton-copiar");
let imagenBusqueda = document.getElementById("Busqueda");
let mensajeInfo = document.getElementById("mensaje-info");
let textoContenedor = document.getElementById("texto-contenedor")

let remplazar = [ ["e", "enter"],["o", "ober"],["i", "imes"],["a", "ai"],["u", "ufat"],]


const replace = (nuevoValor) => {

    mensajeFinal.innerHTML = nuevoValor;

    imagenBusqueda.style.display = "none";
    mensajeInfo.style.display = "none";
    botonCopiar.style.display = "block";
    textoContenedor.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar")
    ingresoTexto.value = "";
}

botonEncriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase()

    if (texto != ""){
        function encriptar (newText) {

            for (let i = 0; i < remplazar.length; i++) {
                if ( newText.includes(remplazar[i][0])){
                    newText=newText.replaceAll(remplazar[i][0], remplazar[i][1])
                };
           };
           return newText
        } 
    }   
    else {
        alert ("Ingrese un texto para encriptar")
    } 
    replace(encriptar(texto));   
});

botonDesencriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase()
    
if (texto != ""){
    function Desencriptar (newText) {

        for (let i = 0; i < remplazar.length; i++) {
            if ( newText.includes(remplazar[i][1])){
                newText=newText.replaceAll(remplazar[i][1], remplazar[i][0])
            };
       };
       return newText
    }
}

else {
    alert ("Ingrese un texto para desencriptar")
} 

    replace(Desencriptar(texto));

});

botonCopiar.addEventListener("click",() => {
    let texto= mensajeFinal;
    //navigator.clipboard.writeText(texto.value)
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado con exito");
    
})

